# React to Next.js TypeScript Migration Guide

## What's Been Done

### 1. Project Structure Changes

- Converted from Create React App to Next.js 14 with App Router
- Added TypeScript support with proper configuration
- Updated package.json with Next.js dependencies and scripts

### 2. Routing Migration

- Removed `react-router-dom` dependency
- Converted React Router routes to Next.js App Router structure:
  - `/` → `src/app/page.tsx`
  - `/about-us` → `src/app/about-us/page.tsx`
  - `/faq` → `src/app/faq/page.tsx`
  - `/contact-us` → `src/app/contact-us/page.tsx`
  - `/terms-and-conditions` → `src/app/terms-and-conditions/page.tsx`
  - `/privacy-policy` → `src/app/privacy-policy/page.tsx`
  - `/notice-of-non-discrimination-and-language-assistance` → `src/app/notice-of-non-discrimination-and-language-assistance/page.tsx`
  - 404 handling → `src/app/not-found.tsx`

### 3. Layout Changes

- Created `src/app/layout.tsx` as the root layout
- Moved global styles to `src/app/globals.css`
- Integrated Header, Footer, ScrollToTop, and ToastContainer in layout

### 4. Component Updates

- Updated navigation components to use Next.js `Link` and `usePathname`
- Converted key components from `.js` to `.tsx`
- Added TypeScript interfaces and proper typing

### 5. Configuration Files

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `postcss.config.js` - PostCSS configuration for Tailwind
- Updated `tailwind.config.js` for Next.js file patterns

## Next Steps to Complete Migration

### 1. Install Dependencies

```bash
npm install
```

### 2. Convert Remaining Components

The following files still need to be converted from `.js` to `.tsx` with proper TypeScript types:

#### Sections (High Priority)

- `src/sections/Home/HeroSection/HeroSection.js`
- `src/sections/Home/AboutUsSection/AboutUsSection.js`
- `src/sections/Home/MotiveSection/MotiveSection.js`
- `src/sections/Home/Roadmap/Roadmap.js`
- All other section components

#### Components (Medium Priority)

- `src/components/Button/Button.js`
- `src/components/ContactForm/ContactForm.js`
- `src/components/AccordionBox/AccordionBox.js`
- All other component files

#### Common Components (Medium Priority)

- All files in `src/common/components/` directory

### 3. Update Navigation References

Search for any remaining `react-router-dom` imports and replace with Next.js equivalents:

- `Link` from `react-router-dom` → `Link` from `next/link`
- `useLocation` → `usePathname` from `next/navigation`
- `useNavigate` → `useRouter` from `next/navigation`

### 4. Update Data Types

Add TypeScript interfaces for the data structures in `src/data.ts`

### 5. Image Optimization

Consider using Next.js `Image` component for better performance:

```tsx
import Image from "next/image";
// Replace <img> tags with <Image> components
```

### 6. Environment Variables

If you have environment variables, create `.env.local` file and prefix them with `NEXT_PUBLIC_` for client-side access.

### 7. Testing

- Test all routes work correctly
- Verify all components render properly
- Check that styling is maintained
- Test responsive design
- Verify form submissions and interactions

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Key Differences to Note

1. **File-based Routing**: Routes are now defined by the file structure in `src/app/`
2. **Server Components**: By default, components are Server Components (rendered on server)
3. **Client Components**: Use `"use client"` directive for components that need browser APIs
4. **Static Assets**: Place in `public/` directory, reference with `/` prefix
5. **Metadata**: Use `metadata` export in page components for SEO

## Troubleshooting

- If you see hydration errors, check for client-only code in Server Components
- For components using browser APIs (localStorage, window, etc.), add `"use client"` directive
- Ensure all imports use the correct file extensions (.tsx instead of .js)
