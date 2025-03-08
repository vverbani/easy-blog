# 🚀 Blog for everybody

## 📌 Description
Astro Blog is an **out-of-the-box (OOTB)**, easy-to-use, and lightweight blogging platform built for **speed and SEO**. This blog is:

- **Optimized for performance** to rank well on search engines
- **Responsive** – looks great on **desktops, tablets, and mobile**
- **Easy to customize** – modify content, layout, and styles with minimal effort
- **Docker-ready** – simple deployment with **Docker Compose**

### **Includes:**
✔ **Homepage** – Showcase your blog content
✔ **Category Pages** – Organize posts by topics
✔ **Blog Post Pages** – Readable markdown-based posts
✔ **Mobile-Friendly** – Responsive layout

---

## 🛠️ Tech Stack

| Technology        | Why We Use It |
|------------------|--------------|
| **Astro** 🪐 | Lightning-fast static site generator optimized for SEO. |
| **Tailwind CSS** 🎨 | Utility-first CSS framework for rapid styling and responsiveness. |
| **Markdown** ✍️ | Simple, database-free blogging format. |
| **Docker Compose** 🐳 | Easily containerize and run the project in any environment. |

---

## 🚀 How to Run the Blog Locally

Follow these steps to get started:

1️⃣ **Clone the Repository:**
```bash
Close this project
cd <project-name>
```

2️⃣ **Run the Blog with Docker Compose:**
```bash
docker-compose up --build

** For mailing newsletter to work - you must have a mailchimp account and have your .env filled out with the API key and Audience ID.
```

3️⃣ **Access the Blog:**
- Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 📂 File Structure

```
my-astro-blog/
├── public/               # Static assets (images, icons, etc.)
│   └── images/
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, Sidebar)
│   ├── layouts/          # Page layouts (Main, Blog)
│   ├── pages/            # Pages (index, category, blog posts)
│   ├── styles/           # CSS files (global.css, home.css, etc.)
├── Dockerfile            # Docker setup
├── docker-compose.yml    # Docker Compose configuration
├── package.json          # Project dependencies & scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── astro.config.mjs      # Astro config
└── README.md             # Project documentation
```

---

## 🔧 Preparing for Production

Right now, the blog is in **development mode**. To deploy it in production, follow these key steps:

### Update `docker-compose.yml`**
Modify the `command` in `docker-compose.yml`:
```yaml
services:
  astro:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    command: npm run build && npm run start
```
### Optimize SEO & Meta Tags**
Update **SEO metadata** in `src/pages/index.astro`:
```html
<head>
  <title>My Awesome Blog 🚀</title>
  <meta name="description" content="A fast, SEO-optimized blog about Tech, Cars & Fishing!">
</head>
```

### Customize Content & Styles**
- **Change colors & fonts** → `src/styles/global.css`
- **Update hero images** → `public/images/`
- **Modify layout structure** → `src/layouts/`
- **Add new blog posts** → `src/pages/blog/*.md`