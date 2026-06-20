# ANL Web Application

A modern, responsive web application for ANL, built with Next.js, React, and Tailwind CSS. The platform allows users to organize, manage, and monitor their shipments globally.

## Features
- **Responsive UI:** Fully mobile-responsive interface scaling seamlessly across desktop, tablet, and mobile devices.
- **Modern Design:** High-quality, aesthetic components using Antonio and Inter fonts for a premium look.
- **Service Hubs:** 
  - **Discover My ANL:** Overview of shipping, tracking, and API/EDI features.
  - **EDI/API Solutions:** Detailed breakdown of enterprise connectivity solutions.
  - **Cargo Solutions:** Information on dry cargo, refrigerated cargo, and more.
  - **Sustainability:** Details on ANL's commitment to the environment.

## Technology Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Project Structure
```text
anl-web/
├── app/
│   ├── (pages)/          # Application routes (discover, edi-api-solutions, etc.)
│   ├── components/       # Reusable React components (Header, Footer, etc.)
│   ├── data/             # Static data files and types
│   ├── globals.css       # Global stylesheet and Tailwind directives
│   ├── layout.tsx        # Root layout wrapper
│   └── page.tsx          # Main entry page
├── public/               # Static assets (images, icons, fonts)
├── tailwind.config.ts    # Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SocialOrangeGlobal/anl.git
   ```
2. Navigate into the directory:
   ```bash
   cd anl-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production
To build the application for production:
```bash
npm run build
```
To start the production server:
```bash
npm run start
```

## Deployment
This project is configured to be easily deployed on [Vercel](https://vercel.com/).

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Next.js framework and configure build settings.
3. Push to the `main` branch to trigger a production deployment.
