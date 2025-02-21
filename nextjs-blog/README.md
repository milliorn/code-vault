# Next.js Blog

Next.js blog that serves as a platform for sharing content. It is built using Next.js, a powerful React framework for server-side rendering and static site generation. The project includes features such as automatic optimization and loading of custom Google Fonts with next/font, integration of Tailwind CSS for styling and typography using @tailwindcss/typography, and the use of popular React icons from the react-icons package. It also leverages gray-matter for parsing front matter in Markdown files and remark and remark-html for processing and converting Markdown to HTML. With this repository, you can create, edit, and deploy your blog easily and efficiently.

## Getting Started

To start the development server, run the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 in your browser to see the blog.

You can edit the pages by modifying the files in the pages directory. The changes will be automatically updated in the browser.

API routes can be accessed at http://localhost:3000/api/hello. You can edit this endpoint in the pages/api/hello.ts file. Files in the pages/api directory are treated as API routes instead of React pages.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, you can refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): Interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js/): Contribute and provide feedback to the Next.js project.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform, created by the Next.js creators. Check out the Next.js deployment documentation for more details.

## Resources

Here are some resources that were used in the development of this project:

- [Create Next App](https://nextjs.org/docs/api-reference/create-next-app): Documentation on creating a Next.js app.
- [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs): Guide on integrating Tailwind CSS with Next.js.
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin): Tailwind CSS plugin for typography styles.
- [react-icons](https://www.npmjs.com/package/react-icons): NPM package for popular icons in React.
- [gray-matter](https://www.npmjs.com/package/gray-matter): NPM package for parsing front matter in Markdown files.
- [remark](https://www.npmjs.com/package/remark): NPM package for processing Markdown.
- [remark-html](https://www.npmjs.com/package/remark-html): NPM package for converting Markdown to HTML.

## License

This project is licensed under the MIT License.
