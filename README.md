# My Portfolio

A modern, production-ready portfolio built with Next.js 14, Tailwind CSS, Framer Motion, and shadcn/ui.

## Features
- Responsive, animated UI
- Modular components
- Dark mode
- Animated typewriter and watch
- Project showcase
- Contact form
- Utility functions in `lib/utils`

## Folder Structure

```
my-protfolio/
│
├── app/
│   ├── _layout.js
│   ├── page.js
│   ├── globals.css
│   ├── favicon.ico
│   ├── fonts/
│   └── projects/
│       └── [id].js
│
├── components/
│   ├── About.js
│   ├── ContactForm.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Navbar.js
│   ├── PortfolioLogo.js
│   ├── PortfolioWatch.js
│   ├── ProjectCard.js
│   ├── ProjectDetailsClient.js
│   ├── Projects.js
│   ├── ScrollIndicator.js
│   ├── ThemeToggle.js
│   └── ui/
│       ├── button.jsx
│       ├── card.jsx
│       └── input.jsx
│
├── lib/
│   └── utils/
│       ├── typewriter.js
│       └── cn.js
│
├── public/
│   └── (static assets, images, cv.pdf)
│
├── tailwind.config.js
├── package.json
├── README.md
└── ...
```

## Utilities
All reusable logic is in `lib/utils` for easy import and testing.

## How to Run
```bash
npm install
npm run dev
```

## Deployment
Ready for Vercel. See `.vercel` and environment setup.

## Author
Afroja Jahan
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
