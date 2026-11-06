# 🚀 Next.js 15 & TypeScript Fundamentals Assignment

This repository contains my completed 4-day practical assignment covering the core concepts of **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Library:** React 19

---

## 📅 Completed Days & Features

### 🟢 Day 1: Next.js 15 Setup & App Router Anatomy
* Created Next.js 15 application using TypeScript, Tailwind, and App Router architecture.
* Explored file-based routing: `page.tsx`, `layout.tsx`, and `loading.tsx` (with UI skeleton).
* Organized routes using route groups `(marketing)`.
* **Routes created:**
  * `/` (Home)
  * `/about` (About page)
  * `/pricing` (Marketing route group)

### 🟢 Day 2: Server vs Client Components
* Explored the distinction between **Server Components** (default) and **Client Components** (`'use client'`).
* Built a client-side `Counter` component using `useState`.
* Built a server-side `ProductList` component passing serializable props to child components.
* Tested boundary errors when mixing interactivity inside Server Components.

### 🟢 Day 3: TypeScript Essentials
* Defined component props using TypeScript `interface`.
* Implemented a custom generic function `wrapInArray<T>(item: T): T[]`.
* Used utility types like `Partial<User>` for update functions.
* Ensured end-to-end type safety across components.

### 🟢 Day 4: Tailwind CSS & Responsive Design
* Implemented mobile-first responsive utility classes (`sm:`, `md:`, `lg:`).
* Designed a responsive pricing section layout (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`).
* Added interactive hover and focus state variants to cards.

---

## 🚦 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
   cd YOUR_REPOSITORY_NAME