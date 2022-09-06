# repobook

**A simple static blogging website written in HTML, CSS and JavaScript that displays your markdown files.**

This project is a work in progress - For the moment, I have only made it function with a single page per instance. You can modify these settings in `config.js` in `/exports/`.

Note: Markdown content is displayed inside an `iframe`, **not** in the main tab.

## Customize, build and deploy

### 1. Clone the repository

```git clone https://github.com/ribcatcher/repobook```

***

### 2. Install, then run the tailwind CLI build process

```npm i```

```npx tailwindcss -i ./tailwind-src/style.css -o ./export/style.css --watch```

***

### 3. Work on your project

The bulk of code is located in index.html, **but modifying this file isn't necessary** to actually achieve a working site with your own content.

Instead, in the `/export/book/` directory, there's a `config.js` file that is used to define the `ROOT` and `INDEX`

> The ROOT defines where your app will look for pages.
> The index is used to register pages (Inside the root directory) and add them to the table of contents. **(This will be displayed and animated soon)**

You can also change the `pagestyle.css` which is used to define styles for the content inside the `iframe` -> This is currently setup so that it loads a font from google and also contains the styles used by [highlight.js](https://highlightjs.org/) that provides syntax highlighting for code.

*TODO: Add multiple language support using highlight.js*

***

### 4. Deployment

The files in the `/export/` directory are needed to deploy your site, nothing else is. For a basic deployment, just copy the contents of the directory into the root fof your website/github page. Enjoy ;)
