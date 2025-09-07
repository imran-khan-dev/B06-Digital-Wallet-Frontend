# Digital Wallet

## 📌 Project Overview

The **Digital Wallet** is a secure and user-friendly platform that allows users to manage transactions such as **sending money, cash-in, and cash-out**. It also includes features for role-based authentication (**Admin, Agent, User**) and transaction history with advanced filtering.

This project is built following **Clean Architecture principles** for scalability and maintainability.

---

## 🚀 Live Demo

🔗 [Live URL](https://b06-digital-wallet-frontend-uw8n.vercel.app/)

---

## 🛠 Technology Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Redux Toolkit, RTK Query
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Styling:** Tailwind CSS + shadcn/ui
- **Version Control:** Git & GitHub

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
 git clone https://github.com/imran-khan-dev/B06-Digital-Wallet-Frontend
 cd digital-wallet
```

### 2. Install Dependencies

```bash
 bun install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_BASE_URL=http://localhost:5000/api/v1/
```

### 4. Run Backend

```bash
 bun run dev
```

### 5. Run Frontend

Navigate to the frontend folder:

```bash
 cd client
 bun install
 bun run dev
```

### 6. Access the App

Visit: `https://b06-digital-wallet-frontend-uw8n.vercel.app/`

---

## 🔑 Test Credentials

### Admin Login

- **Email:** [admin@gmail.com]
- **Password:** 12345678

### Agent Login

- **Email:** [anikagent@gmail.com]
- **Password:** 12345678Anik@

### User Login

- **Email:** [nayem@gmail.com]
- **Password:** 12345678Sanoar@

---

## 📖 Notes

- Admin can manage users, agents, and monitor transactions.
- Agents can handle **cash-in** and **cash-out** operations for users.
- Users can **send money, cash-in, and cash-out**.
- Transactions include **status tracking, filters, and pagination**.
- Responsive and mobile-friendly UI.

---

✅ This project is built for **learning & real-world implementation** of a role-based **Digital Wallet System**.
