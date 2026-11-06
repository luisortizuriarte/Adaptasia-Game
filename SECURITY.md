# Security Policy

## Supported Versions

Adaptasia is a client-side, browser-based web application with no backend services, databases, or third-party executable dependencies.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x (Beta) | :white_check_mark: |
| < 0.1.0 | :x:                |

## Reporting a Vulnerability

Because Adaptasia runs entirely client-side and stores data solely within the browser's `localStorage`, security vulnerabilities are generally limited to client-side input validation, script execution, or Cross-Site Scripting (XSS) vectors if customized.

If you discover a potential security concern:
1. **Do not** create a public issue on GitHub.
2. Email the maintainers directly or use GitHub's private vulnerability reporting feature in the Security tab.
3. Include a description of the issue, steps to reproduce, and the potential impact.

Maintainers will acknowledge receipt within 48 hours and work with you on a resolution before public disclosure.
