# INDMoney Investor Experience Discovery

> **NextLeap Product Management Graduation Project**  
> **Hypothesis H1:** Bank Mandate Debit Failure Recovery Assistant  
> **Target Submission Deadline:** 9 November 2026

An evidence-driven product discovery engine and research classification platform examining why first-time Indian mutual fund investors pause, miss, or discontinue SIPs, featuring a mobile-first SIP Recovery Assistant prototype.

---

## 🚀 Live Vercel Deployment Guide

### Prerequisites
* **Node.js**: v20+
* **GitHub Account**: To host the repository
* **Vercel Account**: [vercel.com](https://vercel.com)
* **Supabase Project** *(Optional for cloud persistence)*: [supabase.com](https://supabase.com)

---

### Step 1: Database Setup (Supabase PostgreSQL)

If enabling persistent cloud storage:
1. Create a new Supabase project at [database.new](https://database.new).
2. Open the **SQL Editor** in your Supabase project dashboard.
3. Paste and run the complete schema script from `supabase/schema.sql`.
4. Copy your project URL, Anon Key, and Service Role Key from **Project Settings > API**.

*Note: If Supabase credentials are not provided, the application runs automatically with local storage persistence and pre-bundled baseline datasets.*

---

### Step 2: Push Repository to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "feat: complete Phase 3.1 persistent backend and evidence classification"

# Link to your remote GitHub repository
git branch -M main
git remote add origin https://github.com/<your-username>/indmoney-investor-experience-discovery.git
git push -u origin main
```

---

### Step 3: Deploy to Vercel

1. In the Vercel Dashboard, click **Add New > Project** and select your GitHub repository.
2. Select the **Next.js** framework preset.
3. Under **Environment Variables**, add the keys from your `.env.example`:

| Variable Name | Environment | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Production, Preview | Supabase Project URL (`https://xyz.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production, Preview | Supabase Anon Key (Browser-safe) |
| `SUPABASE_SERVICE_ROLE_KEY` | Production, Preview | Supabase Service Key (Server-side API routes only) |
| `RESEARCH_ADMIN_SECRET` | Production, Preview | Custom secret string for secure data imports |
| `NEXT_PUBLIC_APP_URL` | Production | Your Vercel domain (`https://your-app.vercel.app`) |

4. Click **Deploy**. Vercel will build and deploy the Next.js application.

---

### Step 4: Seed Initial Research Data to Supabase

Once deployed, populate the 235 candidate reviews and 8 audited records into your database:

```bash
# Set your environment variables in .env.local
npm run seed:supabase
```

The seed script utilizes `ON CONFLICT (id) DO NOTHING` to ensure that existing human classifications and researcher notes are **never overwritten**.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:3000
```

---

## 🏗️ Architecture & Features

### 1. Evidence Review Workspace (`/api/candidates`)
* **Data Funnel:** Ingests the 62,523 raw review corpus, isolates 235 candidate reviews, and manages 8 deep-dive audited records.
* **9 Classification Categories:**
  1. *Bank mandate failure*
  2. *SIP instalment debit failure*
  3. *NACH / AutoPay issue*
  4. *Bank account linking problem*
  5. *SIP setup issue*
  6. *Withdrawal / redemption issue*
  7. *General payment issue*
  8. *Unrelated feedback*
  9. *Insufficient information*
* **3-Tier Evidence Strength:** `DIRECT` (explicit SIP failure), `INDIRECT` (mandate/autopay general), `INSUFFICIENT` (general linking/onboarding).
* **AI Assistance:** Real-time multi-category and evidence strength suggestions with supporting verbatim excerpts.
* **Human-in-the-Loop Governance:** Researcher Approve/Reject controls, category editing, and persistent audit notes.

### 2. Evidence Library (`/api/evidence`)
* Houses the 8 deep-dive verified evidence records with exact Google Play, TradingQ&A, and interview citations.

### 3. H1 Project Workspace
* Comprehensive exploration of Hypothesis H1 (Bank Mandate Debit Failures) across all 7 research sections (A–G), personas (Rohan & Priya), current vs. proposed journeys, and A/B experiment design.

### 4. SIP Recovery Assistant Prototype
* 5-screen mobile-first interactive flow: Dashboard, Failure Alert, Recovery Guidance, UPI Instant Payment simulation, and SIP Health Rebuilding.

### 5. Research Decision Log & PDF Report Export
* Audit trail of all PM decisions and printable formatted NextLeap graduation project brief (`Cmd+P` / PDF).

---

## 🔒 Security & Privacy Guardrails
* **No Real Banking Credentials:** All payment and bank account screens are simulated illustrative prototypes.
* **Separation of Secrets:** Database service keys are restricted to server-side Next.js route handlers.
* **Zero PII Exposure:** Original reviews undergo automated redaction of names and account numbers.
