# 🚀 Dev Stack

> Explore frontend, backend, database, and tooling options, compare them side by side, and put together the ideal technology stack for your next project[cite: 1].

---

## 📖 About The Project
**Dev Stack** is a modern, interactive web application built with React and Tailwind CSS. It allows developers to browse various technology stacks across multiple categories (Frontend, Backend, Database, Styling, DevOps, etc.), manage selections in a dynamic sidebar, and build their customized development environment seamlessly.

---

## 🛠️ Technologies Used
* **React** (JavaScript Library)
* **TypeScript / JavaScript**
* **Tailwind CSS** (Styling Framework)
* **React Hot Toast** (Notifications)

---

## ✨ Key Features
1. **Interactive Technology Grid:** Browse through multiple categorized tech cards equipped with badges, difficulty levels, and ratings.
2. **"Your Stack" Sidebar Management:** Add or remove items dynamically with real-time counters and duplicate-addition warnings.
3. **Responsive UI & Sticky Navbar:** Fully optimized layout for mobile, tablet, and desktop screens with smooth navigation.

---

# 💡 React Concepts & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML. It allows us to write HTML structures directly inside JavaScript code. It is used in React because it makes code cleaner, easier to read, and lets developers write UI components intuitively.

### 2. What is the difference between props and state?
**Answer:** 
* **Props** (properties) are passed from parent to child components and are read-only (immutable).
* **State** is managed within a component, holds data that can change over time, and triggers re-renders when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` is a React Hook that lets components add and manage state variables. In this project, we used `useState` to track the user's selected technologies (`selectedStack`) and manage loading states.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` lets us perform side effects (like data fetching, timers, or subscriptions) after a component renders. We use it to handle asynchronous loading or side operations when components mount.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses `key` props to uniquely identify which items have changed, been added, or removed. This helps React optimize rendering performance and maintain accurate DOM states.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:** Conditional rendering means displaying different UI elements based on specific conditions (using ternary operators or logical `&&`). 
* *Example from project:* Showing the empty stack message when no items are selected.
```tsx
{selectedStack.length === 0 ? <p>No Technology Selected</p> : ...}
