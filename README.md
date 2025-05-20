# Storyblok + Nextjs Sample App

This app was created following the [Storyblok Nextjs Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial) and modified to follow App Router best practices.

Key Features:

- Storyblok: Headless CMS used to create and manage content
- Storyblok React SDK: React plugin needed to interact with Storyblok APIs
- Next.js: Framework for server-rendered React applications.
- next-i18n-router: Library adds back internationalized routing to Nextjs
- local-ssl-proxy: Simple SSL HTTP proxy using a self-signed certificate
- Tailwind CSS: Utility-first CSS framework for styling.
- TypeScript: Ensures type safety throughout the project.
- Eslint: Maintains code quality and consistency.
- PostCSS: Used alongside Tailwind for processing CSS.

.env variables:

- NEXT_PUBLIC_STORYBLOCK_PREVIEW_ACCESS_TOKEN = \*\*\*\*
- PREVIEW_SECRET = \*\*\*\*

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
