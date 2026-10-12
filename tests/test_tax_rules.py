import pytest
from app.core.tax_rules import rule_based_classify, get_category_by_id, get_all_categories

def test_categories_loaded():
    categories = get_all_categories()
    assert len(categories) >= 10
    assert any(c.category_id == "software_saas" for c in categories)
    assert any(c.category_id == "meals" for c in categories)

def test_meal_limitation_rate():
    meal_cat = get_category_by_id("meals")
    assert meal_cat is not None
    # Strict 50% IRS limitation
    assert meal_cat.deductible_percentage == 50.0

def test_software_deduction_rate():
    software_cat = get_category_by_id("software_saas")
    assert software_cat is not None
    assert software_cat.deductible_percentage == 100.0

def test_rule_classification():
    cat1 = rule_based_classify("Figma Professional License Renewal", "Figma Inc.")
    assert cat1.category_id == "software_saas"

    cat2 = rule_based_classify("Client Lunch Special Burger and Coffee", "Bistro Cafe")
    assert cat2.category_id == "meals"

    cat3 = rule_based_classify("WeWork Monthly Hot Desk Space", "WeWork")
    assert cat3.category_id == "rent_coworking"

    cat4 = rule_based_classify("Uber trip to airport client presentation", "Uber")
    assert cat4.category_id == "car_truck"
