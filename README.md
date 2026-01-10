# Advait Chordia - Portfolio Website

This is a personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It is designed with a professional, mechanical engineering aesthetic.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Resume Data
You can update your resume information, including experience, education, and skills, in `src/data/resume.ts`.

### Project Images
To add images to your projects:
1.  Place your image files (e.g., `project1.jpg`) in the `public/projects/` folder.
2.  Update `src/data/resume.ts` to include an `image` field for each project (you'll need to update the type definition or component logic if you want to make it dynamic).
3.  Or directly edit `src/components/Projects.tsx` to reference the images.

Currently, the `Projects` component uses a placeholder. To use real images:
1. Open `src/components/Projects.tsx`.
2. Replace the `<div className="h-48...">` block with an `<img src="/projects/your-image.jpg" ... />` or use Next.js `<Image />` component.

### Colors and Theme
The theme is defined in `src/app/globals.css`. You can change the `--primary`, `--background`, and `--foreground` variables to adjust the look.

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1.  Push this code to a GitHub repository.
2.  Log in to Vercel and import the repository.
3.  Click "Deploy".
