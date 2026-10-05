<div align="center">

# ⚡ Akshat Kalal — 3D Developer Portfolio

<p align="center">
  <strong>An interactive, high-performance 3D personal portfolio showcasing software development projects, technical skills, and experience.</strong>
</p>

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TanStack](https://img.shields.io/badge/TanStack_Start-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)](https://tanstack.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🌟 Overview

This portfolio website delivers an immersive and interactive user experience using modern web technologies. Featuring an interactive 3D desktop workstation in the hero section, smooth micro-interactions, magnetic buttons, and responsive design, it highlights full-stack capabilities, cybersecurity projects, and backend engineering skills.

---

## ✨ Key Features

- **🎮 Interactive 3D Workstation**: Rendered with `@react-three/fiber` and `@react-three/drei`, featuring smooth orbit controls, lighting effects, and optimized 3D model rendering.
- **✨ Fluid Micro-Interactions**: Physics-based magnetic buttons, scroll-triggered text animations, and staggered fade-in transitions using **Framer Motion**.
- **🚀 Featured Projects Showcase**:
  - **PaperTradeX**: Full-stack paper trading platform (Java, Spring Boot, MySQL, REST APIs, JWT authentication).
  - **PrepWise AI**: AI-powered mock interview and coding prep platform (React, FastAPI, Flask, Ollama, Firebase).
  - **Network IDS**: Cybersecurity intrusion detection and network monitoring tool.
- **📊 Technical Stack & Skills Breakdown**: Core competencies in Java, Spring Boot, DSA, DBMS, REST APIs, and System Design.
- **📱 Responsive & Accessible**: Optimized performance across desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Frontend Framework** | React 19, TypeScript |
| **Routing & SSR** | TanStack Start, TanStack Router |
| **3D Graphics & Canvas** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Styling & Design System** | Tailwind CSS v4, Radix UI Primitives, Lucide Icons |
| **Animations** | Framer Motion |
| **Data Fetching** | TanStack React Query |
| **Build & Tooling** | Vite 8 |

---

## 📁 Project Structure

```text
portfolio4/
├── public/
│   ├── desktop_pc/          # 3D GLTF model files, textures, and assets
│   ├── projects/            # Project showcase preview images
│   ├── favicon.ico          # Web favicon
│   └── favicon.svg          # Modern SVG vector favicon
├── src/
│   ├── components/
│   │   ├── portfolio/       # Hero, About, Projects, Experience, Skills, 3D Canvas
│   │   └── ui/              # Accessible Radix UI components
│   ├── hooks/               # Custom React hooks (useMobile, etc.)
│   ├── routes/              # TanStack router routes and pages
│   ├── styles.css           # Global Tailwind CSS and design tokens
│   └── start.ts             # Application entry point
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build and plugin setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 20+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shankarop-git/Portfolionew.git
   cd Portfolionew
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👤 Author

**Akshat Kalal**
- **GitHub**: [@AkshathKalal18](https://github.com/AkshathKalal18)
- **Repository**: [Shankarop-git/Portfolionew](https://github.com/Shankarop-git/Portfolionew.git)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
