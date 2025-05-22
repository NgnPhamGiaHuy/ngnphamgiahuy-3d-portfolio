# 🌟 3D Interactive Portfolio

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-Latest-black?logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)

## 📝 Description

A modern, interactive 3D portfolio website built with React 19 and Three.js. This portfolio showcases professional experience, technical skills, and projects through an immersive 3D interface with smooth animations and interactive elements. The application features responsive design principles ensuring optimal viewing experience across all devices.

The portfolio integrates EmailJS for contact functionality and uses modern React patterns with TypeScript for type safety and maintainability.

## ✨ Features

- Displays interactive 3D models for tech stack visualization
- Presents professional experience with animated cards
- Showcases technical skills with visual representations
- Provides testimonials section with dynamic content
- Includes contact form with email integration
- Features responsive design for all device sizes
- Implements smooth scrolling and animations using GSAP
- Offers dark mode support through Tailwind CSS

## 🖼️ Demo / Screenshots

![Portfolio Screenshot](./img/portfolio.png)

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/NgnPhamGiaHuy/ngnphamgiahuy-3d-portfolio.git

# Navigate to the project folder
cd ngnphamgiahuy-3d-portfolio/portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open your browser and navigate to `http://localhost:5173` to view the portfolio.

## 🔧 Configuration

The project uses environment variables for EmailJS integration. Create a `.env` file in the portfolio directory with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🗂️ Folder Structure

```
portfolio/
├── public/              # Static files and 3D models
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── constants/       # Project data and configurations
│   ├── sections/        # Main page sections
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🤝 Contributing

```bash
# Create a new branch
git checkout -b feature/my-feature

# Make your changes and commit
git commit -m "Add new feature"

# Push to your branch
git push origin feature/my-feature

# Create a pull request on GitHub
```

## 📄 License

Licensed under the MIT License. See [LICENSE](./LICENSE) for more information.

## 👤 Author

**NgnPhamGiaHuy**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NgnPhamGiaHuy)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/nguyenphamgiahuy)
## 🙏 Acknowledgements

- Built with React, Three.js, and TypeScript
- 3D models and animations powered by React Three Fiber and Drei
- Styling implemented with Tailwind CSS
- Animations powered by GSAP
- Contact form functionality provided by EmailJS 