# فريق شباب الخير | Shabab Al-Khair

A production-ready website for a youth volunteer team built with React, Vite, and Tailwind CSS.

## Features

- 🌍 **Bilingual Support**: Arabic (RTL) and English (LTR) with language switcher
- 📱 **Fully Responsive**: Mobile-first design
- 🎨 **Modern UI**: Clean, professional, humanitarian-focused design
- ⚡ **Fast**: Built with Vite for optimal performance
- 🧩 **Component-Based**: Clean, reusable component architecture

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 │   ├─ LanguageToggle.jsx
 │   ├─ InitiativeCard.jsx
 │   └─ SectionTitle.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ About.jsx
 │   ├─ VisionMission.jsx
 │   ├─ Initiatives.jsx
 │   ├─ JoinUs.jsx
 │   ├─ Gallery.jsx
 │   ├─ Contact.jsx
 │   └─ Partners.jsx
 ├─ data/
 │   └─ content.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

## Pages

1. **Home** - Hero section with call-to-action
2. **About Us** - Team information and values
3. **Vision & Mission** - Organization's vision and mission
4. **Initiatives** - Showcase of volunteer initiatives
5. **Join Us** - Volunteer registration form
6. **Gallery** - Photo gallery of activities
7. **Contact** - Contact information and form
8. **Partners** - Partnership information

## Language Support

The website supports both Arabic and English. The language preference is saved in localStorage and persists across sessions.

## Ready for Backend Integration

Forms are set up and ready to be connected to a backend API. Update the form submission handlers in:
- `src/pages/JoinUs.jsx`
- `src/pages/Contact.jsx`

## License

All rights reserved © فريق شباب الخير
