# Simple React Steps

A small practice project demonstrating step-by-step UI logic in React.  
The app guides the user through a simple 3-step flow, with the ability to navigate forward/backward and toggle visibility of the entire step interface.

## 🚀 Demo

Live demo is available here:  
https://simple-react-steps.vercel.app/

## 🧩 Features

- 3-step guided flow
- Buttons for “Next” and “Previous”
- Active step highlighting
- Show/hide entire step interface
- Clean, beginner-friendly React structure
- Component state handled with `useState`

## 🛠️ Tech Stack

- **React 18**
- **JavaScript (ES6+)**
- **CSS** (basic styles)
- Deploy: **Vercel**

## 📦 Getting Started

Clone the repository:

```bash
git clone https://github.com/mrobacki/simple-react-steps.git
cd simple-react-steps
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start
```

Build for production:

```bash
npm run build
```

## 🧠 How It Works

- `step` state (1–3) controls which step is active.
- `isOpen` toggles visibility of the whole step interface.
- `messages[]` contains the text for each step.
- “Next” / “Previous” update the step while preventing out-of-range values.
- Active step bullets get a dynamic class:

```jsx
<div className={step >= 2 ? "active" : ""}>2</div>
```

- Main message is computed from `messages[step - 1]`.

## 📄 License

This project is open-source and available under the MIT License.
