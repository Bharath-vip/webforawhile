export type ToolCategory = 'Coding' | 'Writing' | 'Video' | 'Audio' | 'Business' | 'Design' | 'Marketing';
export type PricingModel = 'Free' | 'Freemium' | 'Paid' | 'Open Source';

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: ToolCategory;
  pricing: PricingModel;
  priceDetails?: string;
  url: string;
  features: string[];
  pros: string[];
  cons: string[];
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
}

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'cursor',
    name: 'Cursor',
    description: 'The AI Code Editor built to make you extraordinarily productive.',
    longDescription: 'Cursor is a fork of VS Code with AI native features. It allows you to chat with your codebase, auto-write code, and easily find bugs using Claude 3.5 Sonnet and GPT-4o.',
    category: 'Coding',
    pricing: 'Freemium',
    priceDetails: 'Free tier with basic features. Pro at $20/month.',
    url: 'https://cursor.com',
    features: ['Codebase indexing', 'Cmd-K Generation', 'AI Chat', 'Terminal debugging'],
    pros: ['Extremely fast generation', 'Familiar VS Code interface', 'Excellent context awareness'],
    cons: ['Can be resource-heavy', 'Requires internet connection for AI'],
    rating: 4.9,
    reviewsCount: 1250,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer that suggests code and entire functions in real-time.',
    longDescription: 'Powered by OpenAI, GitHub Copilot integrates into your editor to suggest code, generate unit tests, and translate natural language to code.',
    category: 'Coding',
    pricing: 'Paid',
    priceDetails: '$10/month for individuals. $19/user/month for business.',
    url: 'https://github.com/features/copilot',
    features: ['Inline suggestions', 'Copilot Chat', 'Security vulnerability filtering'],
    pros: ['Deep GitHub integration', 'Supports dozens of languages', 'Enterprise security'],
    cons: ['No true free tier', 'Sometimes hallucinates complex logic'],
    rating: 4.8,
    reviewsCount: 8500,
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'jasper',
    name: 'Jasper',
    description: 'AI copilot for enterprise marketing teams.',
    longDescription: 'Jasper helps marketers create brand-aligned content, from blog posts to ad copy, in minutes.',
    category: 'Marketing',
    pricing: 'Paid',
    priceDetails: 'Starts at $39/month/creator.',
    url: 'https://jasper.ai',
    features: ['Brand voice learning', 'SEO optimization', 'Browser extension'],
    pros: ['Great for marketing copy', 'Brand voice consistency', 'Team collaboration'],
    cons: ['Expensive for solo users', 'Steep learning curve'],
    rating: 4.6,
    reviewsCount: 3200,
  },
  {
    id: '4',
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'Generates stunning AI art and photorealistic images from text prompts.',
    longDescription: 'An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species through AI image generation.',
    category: 'Design',
    pricing: 'Paid',
    priceDetails: 'Starts at $10/month.',
    url: 'https://midjourney.com',
    features: ['High-res generation', 'Style tuning', 'Inpainting'],
    pros: ['Best-in-class artistic quality', 'Photorealism', 'Constant model updates'],
    cons: ['Requires Discord (for now)', 'Complex prompt engineering'],
    rating: 4.9,
    reviewsCount: 15400,
    isFeatured: true,
  },
  {
    id: '5',
    slug: 'notion-ai',
    name: 'Notion AI',
    description: 'Access the limitless power of AI, right inside Notion.',
    longDescription: 'Notion AI helps you write better, think bigger, and work faster. It can summarize notes, write drafts, and analyze tables directly in your workspace.',
    category: 'Business',
    pricing: 'Paid',
    priceDetails: '$8-$10/member/month add-on.',
    url: 'https://notion.so/product/ai',
    features: ['Q&A across workspace', 'Draft generation', 'Translation', 'Summarization'],
    pros: ['Seamless integration in Notion', 'Excellent UI', 'Time saver for meetings'],
    cons: ['Add-on cost on top of base plan', 'Not a standalone tool'],
    rating: 4.7,
    reviewsCount: 2100,
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}
