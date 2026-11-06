"""
Adaptasia Repository & HTML Integrity Test Suite
Verifies files, repository structure, HTML tags, and configuration sanity.
"""

import os
import re
import sys

def test_file_exists(path, description):
    assert os.path.exists(path), f"Missing required file: {description} ({path})"
    size = os.path.getsize(path)
    assert size > 0, f"File {description} ({path}) is empty"
    print(f"✔ Found {description} ({size} bytes)")

def test_html_integrity(path):
    print(f"\nChecking HTML integrity for {path}...")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    assert "<!DOCTYPE html>" in content, "Missing DOCTYPE"
    assert '<canvas id="game"></canvas>' in content, "Missing game canvas element"
    assert "<script>" in content and "</script>" in content, "Missing script tags"
    assert "CONFIG" in content, "Missing CONFIG object"
    assert "PAL" in content, "Missing PAL color palette"
    assert "newState" in content, "Missing newState function"
    assert "endYear" in content, "Missing endYear function"
    assert "module.exports" in content, "Missing module.exports bridge"

    # Check for expected items
    expected_items = ["inspect", "demolish", "road", "res", "com", "levee", "drain", "cool", "wetland", "park", "roof", "swale"]
    for item in expected_items:
        assert f"{item}:" in content or f"'{item}':" in content or f'"{item}":' in content, f"Missing item definition for {item}"

    print(f"✔ {path} passed all structural and syntactic checks")

def main():
    print("=" * 60)
    print("Running Adaptasia Open Source Repository Integrity Tests")
    print("=" * 60)

    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    
    # 1. Test critical files
    files_to_check = [
        ("adaptasia.html", "Core game file (adaptasia.html)"),
        ("index.html", "Default web server entry point (index.html)"),
        ("README.md", "Project README"),
        ("LICENSE", "License file"),
        ("CONTRIBUTING.md", "Contribution guidelines"),
        ("CODE_OF_CONDUCT.md", "Code of Conduct"),
        ("SECURITY.md", "Security policy"),
        ("CHANGELOG.md", "Changelog"),
        ("package.json", "Package metadata"),
        (".gitignore", "Git ignore configuration"),
        (".editorconfig", "EditorConfig file"),
        (".github/ISSUE_TEMPLATE/bug_report.md", "Bug report template"),
        (".github/ISSUE_TEMPLATE/feature_request.md", "Feature request template"),
        (".github/PULL_REQUEST_TEMPLATE.md", "Pull request template"),
        (".github/workflows/ci.yml", "CI workflow"),
        (".github/workflows/deploy.yml", "GitHub Pages deployment workflow"),
    ]

    for rel_path, desc in files_to_check:
        full_path = os.path.join(base_dir, rel_path)
        test_file_exists(full_path, desc)

    # 2. Test HTML files
    test_html_integrity(os.path.join(base_dir, "adaptasia.html"))
    test_html_integrity(os.path.join(base_dir, "index.html"))

    # 3. Verify sync between adaptasia.html and index.html
    with open(os.path.join(base_dir, "adaptasia.html"), "r", encoding="utf-8") as f1:
        c1 = f1.read()
    with open(os.path.join(base_dir, "index.html"), "r", encoding="utf-8") as f2:
        c2 = f2.read()
    assert c1 == c2, "adaptasia.html and index.html must be identical"
    print("✔ adaptasia.html and index.html are perfectly synchronized")

    print("\n" + "=" * 60)
    print("All Repository & Integrity Checks Passed Successfully! ✨")
    print("=" * 60)

if __name__ == "__main__":
    main()
