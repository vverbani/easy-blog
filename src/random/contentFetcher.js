import fs from 'fs';
import path from 'path';

export async function fetchContent(directory) {
  const files = fs.readdirSync(path.resolve(directory));
  const blogs = [];

  for (const file of files) {
    if (file.endsWith('.astro')) {
      const { frontmatter } = await import(`${directory}/${file}`);
      blogs.push({
        title: frontmatter.title,
        date: frontmatter.date,
        image: frontmatter.image,
        excerpt: frontmatter.excerpt,
        url: `/tech-ai/${file.replace('.astro', '')}`
      });
    }
  }

  return blogs;
}
