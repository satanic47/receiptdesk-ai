from typing import List, Dict, Any
from app.models import TaxSummary, TaxCategorySummary, AuditAnalysis, ReceiptRecord
from app.core.vector_store import vector_store

class AuditAnalyzer:
    """Computes Schedule C tax deduction summaries and IRS audit risk analyses for freelancers."""

    def compute_summary(self) -> TaxSummary:
        """Aggregates all stored receipts into a comprehensive tax deduction summary."""
        receipts = vector_store.get_all_receipts()
        
        total_receipts = len(receipts)
        total_expenses = sum(r["total_amount"] for r in receipts)
        total_deductible = sum(r["deductible_amount"] for r in receipts)
        
        # Estimate freelance tax savings (self-employment tax 15.3% + effective income tax ~12% = ~27.3%)
        estimated_tax_savings = round(total_deductible * 0.273, 2)
        
        # Category breakdown
        cat_map: Dict[str, Dict[str, Any]] = {}
        flags_count = 0
        merchant_spend: Dict[str, float] = {}
        
        for r in receipts:
            cat = r["category"]
            line = r["schedule_c_line"]
            if cat not in cat_map:
                cat_map[cat] = {
                    "category": cat,
                    "schedule_c_line": line,
                    "count": 0,
                    "total_spent": 0.0,
                    "total_deductible": 0.0
                }
            cat_map[cat]["count"] += 1
            cat_map[cat]["total_spent"] += r["total_amount"]
            cat_map[cat]["total_deductible"] += r["deductible_amount"]
            
            if r.get("audit_flags"):
                flags_count += len(r["audit_flags"])
                
            m = r["merchant"]
            merchant_spend[m] = merchant_spend.get(m, 0.0) + r["total_amount"]
            
        categories_list = []
        for c in cat_map.values():
            pct = round((c["total_spent"] / total_expenses * 100.0), 1) if total_expenses > 0 else 0.0
            categories_list.append(TaxCategorySummary(
                category=c["category"],
                schedule_c_line=c["schedule_c_line"],
                count=c["count"],
                total_spent=round(c["total_spent"], 2),
                total_deductible=round(c["total_deductible"], 2),
                percentage_of_expenses=pct
            ))
            
        categories_list.sort(key=lambda x: x.total_spent, reverse=True)
        
        top_merchants = [
            {"merchant": m, "amount": round(amt, 2)}
            for m, amt in sorted(merchant_spend.items(), key=lambda x: x[1], reverse=True)[:5]
        ]
        
        return TaxSummary(
            total_receipts=total_receipts,
            total_expenses=round(total_expenses, 2),
            total_deductible=round(total_deductible, 2),
            estimated_tax_savings=estimated_tax_savings,
            categories=categories_list,
            audit_flags_count=flags_count,
            top_merchants=top_merchants
        )

    def analyze_audit_risk(self) -> AuditAnalysis:
        """Evaluates IRS audit risk and provides actionable suggestions."""
        receipts = vector_store.get_all_receipts()
        flagged: List[ReceiptRecord] = []
        
        # Calculate health score starting at 100
        health_score = 100
        tips = []
        
        meal_total = sum(r["total_amount"] for r in receipts if "meal" in r["category"].lower())
        total_exp = sum(r["total_amount"] for r in receipts)
        
        if total_exp > 0 and (meal_total / total_exp) > 0.25:
            health_score -= 15
            tips.append("High Dining Ratio: Meals account for over 25% of total deductions. Keep notes of client meeting agendas to satisfy IRS substantiation rules.")
            
        for r in receipts:
            flags = r.get("audit_flags", [])
            if flags:
                flagged.append(ReceiptRecord(**r))
                health_score -= (len(flags) * 5)
                
        if not tips:
            tips.append("Deductions are well-distributed across standard Schedule C categories with low audit exposure.")
        tips.append("Under IRS Section 179 / De Minimis Safe Harbor, single-item hardware purchases under $2,500 can be expensed immediately rather than depreciated over 5 years.")
        tips.append("Ensure original digital copies or PDF invoices are retained for at least 3 years from tax filing date.")
        
        health_score = max(20, min(100, health_score))
        
        return AuditAnalysis(
            overall_health_score=health_score,
            flagged_receipts=flagged,
            audit_tips=tips,
            duplicate_candidates=[]
        )

    def export_csv_rows(self) -> List[List[str]]:
        """Exports all receipts formatted for CSV / spreadsheet import."""
        receipts = vector_store.get_all_receipts()
        rows = [["ID", "Date", "Merchant", "Category", "Schedule C Line", "Total Amount", "Deductible %", "Deductible Amount", "Audit Flags"]]
        for r in receipts:
            rows.append([
                r["id"],
                r["date"],
                r["merchant"],
                r["category"],
                r["schedule_c_line"],
                f"${r['total_amount']:.2f}",
                f"{r['deductible_percentage']:.0f}%",
                f"${r['deductible_amount']:.2f}",
                "; ".join(r.get("audit_flags", []))
            ])
        return rows

audit_analyzer = AuditAnalyzer()
