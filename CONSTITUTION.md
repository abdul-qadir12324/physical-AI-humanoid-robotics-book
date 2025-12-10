# Project Constitution: Physical AI & Humanoid Robotics Textbook

## 1. Project Goal

To create a comprehensive, AI-native textbook for a course in "Physical AI & Humanoid Robotics." The textbook will be built using Docusaurus, deployed on GitHub Pages, and will feature an integrated RAG (Retrieval-Augmented Generation) chatbot. This project aims to contribute to the Panaversity initiative, supporting education in cutting-edge AI fields.

## 2. Core Deliverables (Hackathon Requirements)

*   **AI/Spec-Driven Book Creation:**
    *   Textbook content based on the provided course details.
    *   Built with Docusaurus.
    *   Deployed to GitHub Pages.
    *   Development process will leverage Claude Code and Spec-Kit Plus commands (`/sp.Constitution`, `/sp.specifyplus`, `/sp.plan`, `/sp.tasks`, `/sp.implement`).
*   **Integrated RAG Chatbot:**
    *   Embedded within the published book.
    *   Utilizes OpenAI Agents/ChatKit SDKs.
    *   Uses FastAPI for the backend.
    *   Leverages Neon Serverless Postgres database.
    *   Uses Qdrant Cloud Free Tier for vector embeddings.
    *   Capable of answering user questions about the book's content, including selected text.

## 3. Bonus Deliverables (Optional, but Aimed For)

*   **Reusable Intelligence:** Create and use Claude Code Subagents and Agent Skills.
*   **User Authentication:** Implement Signup and Signin using Better-Auth.com, gathering user background for personalization.
*   **Content Personalization:** Allow logged-in users to personalize chapter content.
*   **Urdu Translation:** Enable logged-in users to translate chapter content to Urdu.

## 4. Key Technologies & Tools

*   **Frontend/Book Generation:** Docusaurus (React, TypeScript), GitHub Pages
*   **Backend (Chatbot):** FastAPI (Python)
*   **Databases:** Neon Serverless Postgres, Qdrant Cloud (Vector DB)
*   **AI/LLM:** OpenAI Agents/ChatKit SDKs
*   **Development Tools:** Claude Code, Spec-Kit Plus, Git
*   **Authentication (Bonus):** Better-Auth.com

## 5. Development Process & Guidelines

*   **Iterative Development:** The project will be built in phases, starting with foundational setup, then content, then chatbot, and finally deployment and bonus features.
*   **Spec-Driven Approach:** `/sp.specifyplus`, `/sp.plan`, `/sp.tasks`, `/sp.implement` commands will guide the development.
*   **Version Control:** All changes will be managed through Git, with regular commits to the GitHub repository.
*   **Code Quality:** Adherence to best practices, readability, and existing Docusaurus/React/FastAPI conventions.
*   **Modularity:** Design components and modules for reusability and maintainability.
*   **Testing:** Implement appropriate testing strategies for both the Docusaurus site and the FastAPI backend.
*   **Security:** Prioritize secure handling of API keys and sensitive information. These will be treated as environment variables and never committed to the repository.

## 6. Roles & Responsibilities

*   **AI Agent (Me):** Responsible for executing the plan, writing code, generating content, setting up infrastructure, and deploying the solution, under user guidance.
*   **User:** Responsible for providing approvals, API keys/credentials, repository access, and any specific content guidance.

## 7. Communication

*   All communication related to this project will be in Roman English, as per the user's request.
*   Progress updates, decisions, and any blockers will be clearly communicated.

## 8. Definition of Done

*   All core deliverables (Docusaurus book on GitHub Pages, functional RAG chatbot) are implemented, tested, and deployed.
*   Bonus features are implemented as time and feasibility allow.
*   The project adheres to the specified technologies and architectural patterns.
*   A `history.md` file tracks major project milestones.