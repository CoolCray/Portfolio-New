# KresnaDananjaya.dev - Personal Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Kresna Dananjaya, an Information Systems student at Universitas Atma Jaya Yogyakarta.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-page Navigation**: Home, About, Portfolio, and Contact pages
- **Interactive Portfolio**: Filterable project showcase
- **Contact Form**: Integrated contact form (ready for EmailJS)
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading with modern React practices

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Navigation.tsx      # Navigation bar with mobile menu
│   └── Footer.tsx          # Footer component
├── contexts/
│   └── ThemeContext.tsx    # Dark/light mode context
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── About.tsx          # About page
│   ├── Portfolio.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact form
│   └── NotFound.tsx       # 404 error page
├── App.tsx                # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kresnadananjaya-portfolio.git
cd kresnadananjaya-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Update the contact form configuration in `src/pages/Contact.tsx`:

```typescript
// Uncomment and configure EmailJS
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

- **Primary Light**: `#1E3A8A` (Dark Blue)
- **Primary Dark**: `#3B82F6` (Light Blue)
- **Secondary Light**: `#FFFFFF` (White)
- **Secondary Dark**: `#1F2937` (Dark Gray)

### Content

Update the following files to customize content:

- **Personal Information**: `src/pages/Home.tsx` and `src/pages/About.tsx`
- **Projects**: `src/pages/Portfolio.tsx`
- **Contact Information**: `src/pages/Contact.tsx`
- **Meta Information**: `index.html`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for React Router (create `_redirects` file in public folder):
```
/*    /index.html   200
```

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kresna Dananjaya**
- Email: dwkiller831@gmail.com
- Portfolio: [KresnaDananjaya.dev](https://kresnadananjaya.dev)
- University: Universitas Atma Jaya Yogyakarta
- Field: Information Systems

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/kresnadananjaya-portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*