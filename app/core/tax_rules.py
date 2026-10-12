from typing import Dict, List, Optional
from app.models import TaxCategory

# IRS Schedule C Deduction Knowledge Base for Freelancers & Contractors
TAX_CATEGORIES: Dict[str, TaxCategory] = {
    "software_saas": TaxCategory(
        category_id="software_saas",
        name="Software & SaaS Subscriptions",
        schedule_c_line="Line 27a (Other Expenses - Software)",
        deductible_percentage=100.0,
        description="Cloud hosting, development tools, design software, domain names, API credits, and project management tools directly used for client work.",
        keywords=["github", "aws", "amazon web services", "figma", "digitalocean", "render", "slack", "zoom", "adobe", "google workspace", "openai", "anthropic", "vultr", "vercel", "heroku", "notion", "docker", "jetbrains", "cloud", "api", "hosting", "domain", "saas", "subscription", "mongodb", "elevenlabs", "tiger data", "tabpfn"],
        audit_risk="Low"
    ),
    "office_supplies": TaxCategory(
        category_id="office_supplies",
        name="Office Supplies & Stationery",
        schedule_c_line="Line 18 (Office Expense)",
        deductible_percentage=100.0,
        description="Everyday consumable office items, stationery, printer paper, packaging, desk accessories, and cables.",
        keywords=["staples", "office depot", "paper", "stationery", "pens", "cables", "adapter", "usb", "notebook", "printer ink", "cartridge", "postage", "packaging", "envelope"],
        audit_risk="Low"
    ),
    "hardware_equipment": TaxCategory(
        category_id="hardware_equipment",
        name="Equipment & Technology (De Minimis)",
        schedule_c_line="Line 27a (Other Expenses - Equipment under $2,500)",
        deductible_percentage=100.0,
        description="Computers, monitors, keyboards, microphones, webcams, and test devices under the IRS de minimis safe harbor ($2,500).",
        keywords=["apple", "macbook", "dell", "lenovo", "monitor", "keyboard", "mouse", "headset", "microphone", "webcam", "hard drive", "ssd", "ram", "repair", "best buy", "micro center", "electronics", "uno q", "arduino"],
        audit_risk="Medium"
    ),
    "legal_professional": TaxCategory(
        category_id="legal_professional",
        name="Legal & Professional Fees",
        schedule_c_line="Line 17 (Legal and Professional Services)",
        deductible_percentage=100.0,
        description="Accountant fees, tax preparation, freelance contractor payouts, legal counsel, contract review, and business consulting.",
        keywords=["lawyer", "attorney", "cpa", "accountant", "tax prep", "contractor", "upwork", "fiverr", "freelancer", "consulting", "bookkeeping", "notary"],
        audit_risk="Low"
    ),
    "advertising_marketing": TaxCategory(
        category_id="advertising_marketing",
        name="Advertising & Marketing",
        schedule_c_line="Line 8 (Advertising)",
        deductible_percentage=100.0,
        description="Social media ads, search ads, portfolio website hosting, business cards, sponsorships, and promotional assets.",
        keywords=["facebook ads", "google ads", "meta ads", "linkedin ads", "advertising", "marketing", "promotion", "sponsor", "business cards", "flyers", "newsletter", "mailchimp", "convertkit", "press release"],
        audit_risk="Low"
    ),
    "rent_coworking": TaxCategory(
        category_id="rent_coworking",
        name="Rent & Coworking Spaces",
        schedule_c_line="Line 20b (Rent or Lease - Other Business Property)",
        deductible_percentage=100.0,
        description="Hot desk memberships, dedicated desk rentals, meeting room rentals, and offsite studio booking.",
        keywords=["wework", "regus", "coworking", "office rent", "shared space", "meeting room", "desk rental", "studio rent"],
        audit_risk="Low"
    ),
    "travel": TaxCategory(
        category_id="travel",
        name="Business Travel",
        schedule_c_line="Line 24a (Travel)",
        deductible_percentage=100.0,
        description="Airfare, train tickets, hotel stays, conference travel, and airport transport for client meetings or industry events.",
        keywords=["airline", "flight", "delta", "united", "american airlines", "hotel", "airbnb", "marriott", "hilton", "amtrak", "train", "baggage fee", "conference hotel", "travel"],
        audit_risk="Medium"
    ),
    "meals": TaxCategory(
        category_id="meals",
        name="Business Meals & Client Dining",
        schedule_c_line="Line 24b (Deductible Meals - 50% limit)",
        deductible_percentage=50.0,  # Strict IRS 50% limitation
        description="Dining with clients, collaborators, or during qualifying business travel. Subject to standard IRS 50% deduction rule.",
        keywords=["restaurant", "cafe", "coffee", "starbucks", "diner", "lunch", "dinner", "breakfast", "meal", "grubhub", "doordash", "ubereats", "bistro", "catering"],
        audit_risk="High"
    ),
    "car_truck": TaxCategory(
        category_id="car_truck",
        name="Local Transit & Rideshare",
        schedule_c_line="Line 9 (Car and Truck Expenses)",
        deductible_percentage=100.0,
        description="Uber, Lyft, taxi, subway, tolls, or parking fees incurred traveling to client on-site meetings, workshops, or bank visits.",
        keywords=["uber", "lyft", "taxi", "cab", "parking", "toll", "metro", "subway", "transit", "gasoline", "fuel"],
        audit_risk="Medium"
    ),
    "utilities_internet": TaxCategory(
        category_id="utilities_internet",
        name="Internet & Telecom (Business Portion)",
        schedule_c_line="Line 25 (Utilities)",
        deductible_percentage=80.0,  # Standard reasonable allocation for home-office business portion
        description="Home office broadband, business phone line, and mobile data utilized for remote freelancing.",
        keywords=["internet", "comcast", "verizon", "at&t", "t-mobile", "broadband", "fiber", "phone bill", "telecom"],
        audit_risk="Medium"
    ),
    "other_expenses": TaxCategory(
        category_id="other_expenses",
        name="Other Miscellaneous Business Expenses",
        schedule_c_line="Line 27a (Other Expenses)",
        deductible_percentage=100.0,
        description="Bank wire fees, payment processing fees, professional membership dues, and education/books.",
        keywords=["fee", "stripe fee", "paypal fee", "bank fee", "wire fee", "books", "course", "tutorial", "certification", "membership", "license"],
        audit_risk="Low"
    )
}

def get_category_by_id(category_id: str) -> Optional[TaxCategory]:
    return TAX_CATEGORIES.get(category_id)

def get_all_categories() -> List[TaxCategory]:
    return list(TAX_CATEGORIES.values())

def rule_based_classify(text: str, merchant: str = "") -> TaxCategory:
    """Classifies a receipt text based on keyword density and merchant signatures."""
    combined = (merchant + " " + text).lower()
    
    scores = {}
    for cat_id, cat in TAX_CATEGORIES.items():
        score = 0
        for kw in cat.keywords:
            if kw in combined:
                # Give extra weight to merchant name match
                if merchant and kw in merchant.lower():
                    score += 5
                else:
                    score += 2
        scores[cat_id] = score
        
    best_cat_id = max(scores, key=scores.get)
    if scores[best_cat_id] > 0:
        return TAX_CATEGORIES[best_cat_id]
        
    return TAX_CATEGORIES["other_expenses"]
