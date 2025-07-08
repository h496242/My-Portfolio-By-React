# 🚀 Hasnain Chohan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Showcasing professional development skills with beautiful animations and a clean design.

![Portfolio Preview](https://cdn.builder.io/api/v1/image/assets%2Fbe9fc0ac59cd4482a308b8c849d77d5f%2F56ab05aed6bc4de592c6f735e1945b50?format=webp&width=800)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark/Light Mode**: Theme switching with system preference detection
- **⚡ Performance Optimized**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: Framer Motion animations throughout the site
- **📧 Contact Form**: Functional contact form with validation and backend API
- **🎯 Single Page Application**: Smooth navigation with React Router
- **♿ Accessible**: ARIA labels and semantic HTML for better accessibility
- **🔧 Type Safe**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router 6** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Next Themes** - Theme management

### Backend

- **Express.js** - Server framework
- **CORS** - Cross-origin resource sharing
- **Zod** - Server-side validation

### Development Tools

- **Vitest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
├── client/                     # Frontend React application
│   ├── components/
│   │   ├── Portfolio/          # Portfolio-specific components
│   │   │   ├── Hero.tsx        # Hero section with profile image
│   │   │   ├── About.tsx       # About section with skills
│   │   │   ├── Projects.tsx    # Projects showcase
│   │   │   ├── Contact.tsx     # Contact form
│   │   │   ├── Navigation.tsx  # Header navigation
│   │   │   └── Footer.tsx      # Footer component
│   │   └── ui/                 # Reusable UI components (Radix UI)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Route components
│   │   ├── Index.tsx           # Homepage
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # App entry point and routing
│   └── global.css              # Global styles and CSS variables
├── server/                     # Backend Express server
│   ├── routes/                 # API route handlers
│   │   ├── contact.ts          # Contact form endpoint
│   │   └── demo.ts             # Demo endpoint
│   └── index.ts                # Server configuration
├── shared/                     # Shared types and interfaces
│   └── api.ts                  # API type definitions
└── public/                     # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the portfolio website.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server (client + server)

# Building
npm run build        # Build for production
npm run build:client # Build client only
npm run build:server # Build server only

# Production
npm start           # Start production server

# Testing & Quality
npm test           # Run tests with Vitest
npm run typecheck  # TypeScript type checking
npm run format.fix # Format code with Prettier
```

## 🎨 Customization

### Personal Information

Update the following files to customize with your information:

1. **Hero Section** (`client/components/Portfolio/Hero.tsx`)

   - Change the profile image URL
   - Update name and description
   - Modify social media links

2. **About Section** (`client/components/Portfolio/About.tsx`)

   - Update skills and technologies
   - Modify the about description
   - Add your experience details

3. **Projects Section** (`client/components/Portfolio/Projects.tsx`)

   - Replace with your actual projects
   - Update project descriptions, technologies, and links
   - Add screenshots of your work

4. **Contact Information** (`client/components/Portfolio/Contact.tsx`)
   - Update email, phone, and location
   - Modify the contact form fields if needed

### Styling

- **Colors**: Modify CSS variables in `client/global.css`
- **Fonts**: Update font family in `tailwind.config.ts`
- **Animations**: Customize Framer Motion animations in components

### Contact Form

The contact form sends data to `/api/contact`. You can:

- Integrate with email services (SendGrid, Nodemailer)
- Connect to a database
- Add webhook integrations

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/spa`
4. Environment variables: Set any required environment variables

### Vercel

1. Connect your GitHub repository to Vercel
2. Framework preset: Other
3. Build command: `npm run build`
4. Output directory: `dist/spa`

### Traditional Hosting

1. Run `npm run build`
2. Upload the `dist/spa` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 🔧 Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
# Example environment variables
CONTACT_EMAIL=your-email@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [TailwindCSS](https://tailwindcss.com/) - For the amazing utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For beautiful animations
- [Radix UI](https://www.radix-ui.com/) - For accessible component primitives
- [Lucide](https://lucide.dev/) - For the beautiful icons

## 📞 Contact

**Hasnain Chohan**

- Email: [hello@example.com](mailto:hello@example.com)
- LinkedIn: [linkedin.com/in/hasnain](https://linkedin.com/in/hasnain)
- GitHub: [github.com/hasnain](https://github.com/hasnain)

---

⭐ Star this repository if you found it helpful!
