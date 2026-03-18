# 🎨 Pookie Profile Generator

A **cute pixel-style avatar generator** built with **React + Canvas** that lets users create customizable "pookie" profile pictures by mixing facial features, colors, and styles.

<img width="1318" height="220" alt="image" src="https://github.com/user-attachments/assets/66db2278-6897-40d1-bf42-c514269adc18" />

---

## ✨ Current Features

### 🎭 Avatar Generator
- Random avatar generation
- Mix and match facial features
- Real-time preview

### 🧑‍🎨 Customization
- Hair styles
- Eyes
- Eyebrows
- Nose
- Mouth
- Skin tone selection
- Hair color customization
- Eye color customization

### 🎨 UI / UX
- Pixel-style retro UI
- Smooth loading animation
- Responsive layout
- Interactive controls

### ⚡ Performance
- Optimized canvas rendering
- Layer-based drawing system
- Efficient image loading Built using HTML5 Canvas layering

---

## 🧠 How It Works

The avatar is rendered using **HTML5 Canvas layering**.

### Rendering Order:

```
Skin → Hair → Eyebrows → Eyes → Nose → Mouth
```

Each layer is:
- Loaded dynamically
- Drawn onto a temporary canvas
- Color-modified using `globalCompositeOperation`
- Merged into the final canvas

---

## 🖥 Tech Stack

- React
- Vite
- HTML5 Canvas
- JavaScript (ES6+)
- Tailwind CSS

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Jousure/pookie-profile.git
```

Navigate to the project folder:

```bash
cd pookie-profile
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🎯 Project Goals

The goal of this project is to build a **fun and customizable avatar creator** where users can:

- Build a fun avatar creation tool
- Explore Canvas rendering techniques
- Handle real-world deployment issues
- Create a portfolio-ready frontend project

---

## ⚠️ Project Status

🚧 **Work in Progress** — The core system is complete, but enhancements and features are still being added.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Make changes
4. Commit

```bash
git commit -m "feat: your feature"
```

5. Push and open a pull request

---

## 📄 License

This project is mainly for **learning and experimentation**.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!

