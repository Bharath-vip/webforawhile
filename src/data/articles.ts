export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'guide-ai-coding-assistants',
    title: 'The Ultimate Guide to AI Coding Assistants in 2026',
    category: 'Development',
    author: 'Sarah Chen',
    date: 'June 24, 2026',
    readTime: '8 min read',
    excerpt: 'Discover how modern AI tools are reshaping software engineering, from auto-complete to autonomous agents.',
    content: `
      <p>The landscape of software engineering is undergoing a tectonic shift. What began as simple autocomplete suggestions has evolved into full-fledged autonomous coding agents. In this guide, we'll break down the top tools you should be using to stay competitive.</p>
      
      <h2>1. Context-Aware Code Completion</h2>
      <p>Modern tools like Cursor and GitHub Copilot have moved beyond simple line completion. They now index your entire codebase, understand the relationships between different microservices, and can generate entire boilerplate structures with a single prompt.</p>

      <blockquote>"The engineers who adopt these tools are seeing a 40% increase in feature velocity, while those who resist are being left behind." - Silicon Valley Tech Report</blockquote>

      <h2>2. Automated Testing & Refactoring</h2>
      <p>Writing unit tests is no longer a chore. The latest generation of AI assistants can analyze your business logic and generate comprehensive test suites covering edge cases you might have missed.</p>

      <h2>3. The Future: Multi-Agent Systems</h2>
      <p>Looking ahead, we're seeing the emergence of multi-agent systems where different AI "personas" collaborate. One agent writes the code, another reviews it for security vulnerabilities, and a third writes the documentation.</p>
    `
  },
  {
    id: '2',
    slug: 'ai-marketing-workflows',
    title: 'Automating Your Marketing Workflows with AI',
    category: 'Marketing',
    author: 'Marcus Johnson',
    date: 'June 20, 2026',
    readTime: '5 min read',
    excerpt: 'Learn how to generate blog posts, ad copy, and social media schedules using Jasper and Notion AI.',
    content: `
      <p>Marketing teams are expected to do more with less. AI is the ultimate leverage. Here is how top startups are using AI to scale content.</p>
      <h2>Brand Voice at Scale</h2>
      <p>By training LLMs on your historical successful content, you can generate new copy that sounds exactly like your brand, without the manual effort.</p>
    `
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}
