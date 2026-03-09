# 🎨 Pookie Profile Generator

A **cute pixel-style avatar generator** built with **React + Canvas** that lets users create customizable “pookie” profile pictures by mixing facial features, colors, and accessories.

⚠️ **Note:** This project is currently **work in progress** and **not finished yet**. More features, assets, and improvements will be added.

---

## ✨ Current Features

- 🎭 **Avatar Generator**
  - Random avatar generation
  - Mix and match facial features

- 🧑‍🎨 **Customizable Parts**
  - Hair
  - Eyes
  - Eyebrows
  - Nose
  - Mouth

- 🎨 **Skin Tone Selector**

- 🖼 **Pixel-Style UI**
  - Pixelated canvas rendering
  - Retro-inspired UI buttons

- ⚡ **Fast Canvas Rendering**
  - Built using HTML5 Canvas layering

---

## 🚧 Planned Features

The following features are **planned but not implemented yet**:

- 🎨 Hair color customization
- 👁 Eye color customization
- 💎 Accessories (glasses, jewelry, etc.)
- ✨ Extras (sparkles, blush, freckles)
- 🎲 Seed-based avatar generation
- 📥 Download avatar as PNG
- 🧩 Drag & move accessories
- 🎭 More avatar variations
- 📱 Better responsive design

---

## 🧠 How It Works

The avatar is rendered using **canvas layering**.

Layer order:

```
Skin
Hair
Eyebrows
Eyes
Nose
Mouth
Accessories (future)
Extras (future)
```

Assets are automatically imported using:

```javascript
import.meta.glob("../assets/Hair/*.png", { eager: true })
```

This allows new assets to be added without changing the code.

---

## 🖥 Tech Stack

- React
- Vite
- HTML5 Canvas
- JavaScript
- Tailwind CSS

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/pookie-profile.git
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

- Generate unique profile pictures
- Customize facial features
- Add accessories and effects
- Export avatars for social media

---

## ⚠️ Project Status

🚧 **This project is not complete yet.**

Still missing:

- More avatar assets
- Accessories system
- Download/export feature
- Color customization
- Additional UI improvements

---

## 🤝 Contributing

Contributions, ideas, and suggestions are welcome.

Steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is mainly for **learning and experimentation**.
