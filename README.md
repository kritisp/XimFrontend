# Archival Title Verification System (v4.2)

A specialized React + TypeScript application designed for the **Department of Press Records**. This tool allows for the real-time verification of newspaper titles against archival guidelines (PRGI), rendered in a pixel-perfect 1946 vintage newspaper aesthetic.

## 📰 Features

- **Multi-Page Navigation**: Integrated routing system for a seamless archival experience.
- **Dynamic Masthead**: The newspaper title updates instantly as you type.
- **Responsive Typography**: Intelligent font-scaling logic ensures headlines fit the layout regardless of length.
- **Title Verification Engine**:
  - **Phonetic Similarity**: Detects similar-sounding existing titles.
  - **Restricted Terms**: Flags disallowed words (e.g., "Police", "Army").
  - **Periodicity Check**: Validates terms like "Daily" or "Weekly".
  - **Semantic Conflict**: Identifies conceptual overlaps with existing publications.
- **Archival Aesthetic**: 
  - 1940s-style layout with justified columns and drop-caps.
  - Animated "APPROVED" and "REJECTED" stamps.
  - Custom paper texture and vignette effects.

## 🛠️ Architecture

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion, **React Router 7**.
- **Backend**: Express.js (Node.js) serving as a custom API and Vite middleware.
- **Build System**: Vite with `tsx` for server-side execution.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository (or download the source).
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server (Express + Vite):

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

```text
src/
 ├── components/
 │    ├── HeadlineValidatorPanel.tsx  # Left-side input & validation UI
 │    ├── Newspaper.tsx               # Newspaper layout container
 │    └── TitleVerificationReport.tsx # Dynamic verification article logic
 ├── hooks/
 │    └── useHeadlineReview.ts        # Submission state management
 ├── pages/                           # Page-level components
 │    ├── LandingPage.tsx             # Editorial introduction
 │    ├── VerifyPage.tsx              # Title verification portal
 │    └── GuidelinesPage.tsx          # Official regulation sheet
 ├── types/
 │    └── headline.types.ts           # Centralized TS interfaces
 ├── ui/                              # Reusable styled primitives
 │    ├── Button.tsx
 │    ├── SectionTitle.tsx
 │    └── TextArea.tsx
 ├── App.tsx                          # App router & navigation
 └── index.css                        # Tailwind & Global styles
server.ts                             # Express backend & API routes
```

## 📡 API Documentation

### POST `/api/title/verify`

Verifies a proposed newspaper title against archival rules.

**Request Body:**
```json
{
  "title": "The London Daily"
}
```

**Response Example:**
```json
{
  "status": "rejected",
  "similarity_score": 0.65,
  "verification_probability": 35,
  "violations": [
    { "type": "periodicity", "message": "includes a periodicity indicator..." }
  ],
  "reason_summary": "The submitted title fails to meet mandatory requirements..."
}
```

---
*© 1946 Department of Press Records. All rights reserved.*
