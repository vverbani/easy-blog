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

## 🚀 Getting Started

Follow these steps to get started:

**Clone Repository:**
```bash
Clone this project
```

**Set up Mailchimp account:**

**Set up .env file:**
- Copy `.env-example` into `.env` in the root directory
- Fill contents of `.env`

**Run the Blog with Docker Compose:**
```bash
docker-compose up --build
```

3️⃣ **Access the Blog:**
- Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 📂 File Structure

```
my-astro-blog/
├── public/               # Static assets (images, icons, etc.)
│   └── images/
|       └── category      # Category folder(s)
|         └── article     # Article image(s)
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, Sidebar)
│   ├── layouts/          # Page layouts (Main, Blog)
│   ├── pages/            # Pages (index, category, blog posts)
|       └── category      # Category folder(s)
|         └── article     # Article(s) on parent category
│   ├── styles/           # CSS files (global.css, home.css, etc.)
├── .env                  # Environment Variables (Mailchimp)
├── Dockerfile            # Docker setup
├── docker-compose.yml    # Docker Compose configuration
├── package.json          # Project dependencies & scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── astro.config.mjs      # Astro config
├── robots.txt            # SEO - URLs to crawl, URLs to avoid
├── sitemap.xml           # SEO - See below link. Fill out. Upload to Google
└── README.md             # Project documentation
```

---

## 🔧  Optimize SEO & Meta Tags**

1) Fill out `sitemap` and submit to [Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
2) Fill out `robots.txt` - by default you want to avoid category pages (`noindex`) - they're strictly for the user experience. Why [Robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
3) Ensure Home page has properly defined Meta information
4) Ensure each article has properly defined Meta information
5) Ensure images are compressed (less is more) or via CDN with proper alt tag. View image [SEO best practices].

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