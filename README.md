This is my personal website and blog (2024 edition). This is a (static export) [Next.js](https://nextjs.org/)
project built with [acorn.css](https://github.com/jomurgel/acorn.css) built in a weekend.

## Getting Started
Install your dependencies and then start the development server:

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [acorn.css](https://jomurgel.github.io/acorn.css/) - a classless (opinionated) css framework.

## Phase 1
Phase 1 was a functional and usable website capable of being built over a weekend. The MVP is sparse,
but had the following requirements:
- Needs SEO metadata.
- Needs multiple blogs written in `md` and `mdx` formats.
- Needs to support code syntax formatting.
- Needs to have clear and organized page content.
- Needs to be accessible & pass WC3 standards.

## Phase 2
Phase 2 is TBD, but it will add additional content migrated from past blogs and other repositories.
It will also tackle improving the codebase, consolidating some code duplication, and cleanup the
stylesheets. I'll also add test coverage where it makes sense and any readmes that are helpful
(not accounted for in blogs).

A short list of other things to accomplish in phase 2:
- [ ] Dynamically pull cover images based on post slug.
- [x] ~~Add tag lists for organizing content (tags already in post meta).~~
- [ ] Consolidate shared elements into shared components (partially complete).
- [x] ~~Reduce route complexity for photo, writing, blog, etc.~~
- [ ] Cleanup the stylesheet.
- [ ] Support color-based tagging.
- [ ] Add differing "single post" layout for photos.
