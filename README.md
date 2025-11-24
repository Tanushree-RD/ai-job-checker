# Will AI Take My Job?

A lightweight web application that estimates the likelihood of AI automation for a given job role.  
The interface is built with a modern dark UI theme using glassmorphism, while the logic classifies job inputs using predefined risk factors, heuristic scoring, and pattern detection.

Live Demo: https://ai-job-checker.vercel.app/

---

Overview

The application analyzes job titles entered by the user and produces:
- An AI-risk percentage score.
- A clear “Yes/No” verdict on whether the role is likely to be automated.
- A visual indicator bar showing risk intensity.

The system includes handling for:
- Recognized job roles (fixed scores).
- Unknown roles (dynamic heuristic scoring).
- Non-standard or slang inputs (pattern detection and custom messaging).
- Cases such as “unemployed” or “no job”.

---

Features

- Modern, responsive UI with:
  - Dark animated gradient background
  - Neon-style glow effects
  - Frosted glass container
- Instant, client-side evaluation (no backend required)
- Intelligent fallback scoring for unfamiliar job titles
- Detection of non-professional or non-valid roles
- Zero external dependencies
