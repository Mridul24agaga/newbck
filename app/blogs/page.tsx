import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "@/app/components/footer";

// Define interface for API blog data
interface APIBlog {
  blog_post: string;
  user_id: string;
}

// Define interface for blog post (used for both static and dynamic posts)
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  blog_post?: string; // Optional for dynamic posts
  user_id?: string; // Optional for dynamic posts
}

export const metadata: Metadata = {
  title: "GetMoreBacklinks Blog - Guides and Tips for SaaS Growth",
  description:
    "Discover guides, tutorials, and actionable tips to grow your SaaS business. Learn about directory submissions, SEO strategies, and more.",
  openGraph: {
    title: "GetMoreBacklinks Blog - SaaS Growth Strategies",
    description:
      "Explore our blog for in-depth guides on SaaS growth, SEO tactics, and directory submission strategies.",
    images: [
      {
        url: "https://www.getmorebacklinks.org/3.png",
        width: 1200,
        height: 630,
        alt: "GetMoreBacklinks",
      },
    ],
    url: "https://www.getmorebacklinks.org/blogs",
    siteName: "GetMoreBacklinks",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetMoreBacklinks SAAS Growth Insights",
    description: "Get the latest insights on SaaS growth, SEO strategies, and directory submissions.",
    images: ["https://www.getmorebacklinks.org/3.png"],
    creator: "@GetMoreBacklinks",
  },
  alternates: {
    canonical: "https://www.getmorebacklinks.org/blogs",
    languages: {
      "en-US": "https://www.getmorebacklinks.org/blogs",
    },
  },
};

// This would typically come from a database or CMS
const staticBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Software Listing Websites for New Startups in 2025",
    excerpt:
      "Discover the most effective platforms to showcase your startup and automate your directory submissions...",
    date: "December 15, 2024",
    slug: "top-10-software-listing-websites-2025",
    image: "/brain.png",
  },
  {
    id: 2,
    title: "Automatic Directory Submission: How AI is Changing the Game",
    excerpt:
      "Learn how artificial intelligence is revolutionizing the way startups build their online presence through automated directory submissions...",
    date: "December 14, 2024",
    slug: "automatic-directory-submission-ai-revolution",
    image: "/aig.jpg",
  },
  {
    id: 3,
    title: "What Are PBN Links and Their Role in SEO? A Comprehensive Guide",
    excerpt:
      "Learn about Private Blog Networks (PBNs), their impact on SEO, associated risks, and better alternatives for building quality backlinks.",
    date: "December 10, 2024",
    slug: "what-are-pbn-links-and-their-role-in-seo",
    image: "/private.png",
  },
  {
    id: 4,
    title: "How to Analyze Competitors Backlinks for SEO Success: Complete Guide",
    excerpt:
      "Learn how to effectively analyze your competitors backlinks, uncover valuable link building opportunities, and strengthen your SEO strategy with our comprehensive guide.",
    date: "December 9, 2024",
    slug: "how-to-analyze-competitors-backlinks-for-seo-success",
    image: "/analyze.png",
  },
  {
    id: 5,
    title: "How to Create an Effective SEO Client Report Using GetMoreBacklinks",
    excerpt:
      "Learn how to create comprehensive and impactful SEO client reports using GetMoreBacklinks. Discover best practices, key components, and the role of AI in directory submissions.",
    date: "December 8, 2024",
    slug: "how-to-create-an-effective-seo-client-report-using-getmorebacklinks",
    image: "/getmorebacklinkss.webp",
  },
  {
    id: 6,
    title: "SEO Reporting for Agencies: How GetMoreBacklinks Can Help You Streamline Your SEO Efforts",
    excerpt:
      "Discover how GetMoreBacklinks can help agencies streamline SEO reporting, automate backlink management, and enhance overall SEO strategies.",
    date: "December 7, 2024",
    slug: "seo-reporting-for-agencies-how-getmorebacklinks-can-streamline-your-efforts",
    image: "/backlink-checker.webp",
  },
  {
    id: 7,
    title: "Step-by-Step: How to Build Quality Backlinks with AI-Powered Tools",
    excerpt:
      "Learn how to leverage AI-powered tools for building high-quality backlinks. Discover automated directory submissions, personalized outreach, and advanced analytics for better SEO results.",
    date: "December 6, 2024",
    slug: "step-by-step-how-to-build-quality-backlinks-with-ai-powered-tools",
    image: "/backlinks.webp",
  },
  {
    id: 8,
    title: "The Future of Directory Submissions: AI and Automation in SEO",
    excerpt:
      "Explore how AI and automation are revolutionizing directory submissions and SEO strategies for startups and small businesses.",
    date: "December 5, 2024",
    slug: "the-future-directory-submission-ai-and-automation-in-seo",
    image: "/ai-seo-future.webp",
  },
  {
    id: 9,
    title: "The Ultimate Guide to Automated Directory Submission: Save Time and Boost Your SEO",
    excerpt:
      "Learn how automated directory submission can streamline your SEO strategy. Discover step-by-step implementation, benefits, and best practices for startups and SaaS founders.",
    date: "December 3, 2024",
    slug: "ultimate-guide-to-automated-directory-submission",
    image: "/directory.png",
  },
  {
    id: 10,
    title: "The Ultimate Guide to Listing Bots: Automate Your Startups Online Presence",
    excerpt:
      "Learn how to automate your directory submissions and boost your startups online visibility with listing bots. Comprehensive guide including tools, strategies, and best practices.",
    date: "December 3, 2024",
    slug: "ultimate-guide-to-listing-bots",
    image: "/content.png",
  },
  {
    id: 11,
    title: "Why SaaS Founders Cant Ignore Directory Listings in Their Marketing Strategy",
    excerpt:
      "Learn how directory listings can bolster visibility, SEO performance, and long-term growth for SaaS companies. Discover key benefits and implementation strategies.",
    date: "December 3, 2024",
    slug: "why-saas-founders-cant-ignore-directory-listings-in-their-marketing-strategy",
    image: "/saas-marketing.webp",
  },
  {
    id: 12,
    title: "The Smart Startup's Guide: How Affiliate Programs and SEO Create Sustainable SaaS Growth",
    excerpt:
      "Learn how directory listings can bolster visibility, SEO performance, and long-term growth for SaaS companies. Discover key benefits and implementation strategies.",
    date: "January 9, 2025",
    slug: "the-smart-startup-guide-how-affilate-programs-and-seo-create-sustainable-saas-growth",
    image: "/blog1png.png",
  },
  {
    id: 13,
    title: "Stop Chasing Trends: Build a Real Growth Game Plan",
    excerpt:
      "Discover sustainable business growth strategies that create long-term success instead of short-lived wins.",
    date: "March 10th, 2025",
    slug: "link-building-on-a-budget-get-results-without-breaking-the-rank",
    image: "/123.png",
  },
];

// Helper function to extract a title from blog post and remove asterisks
export const extractTitle = (blogPost: string): string => {
  if (!blogPost) return "Untitled Blog";

  // Remove asterisks from the blog post
  const cleanBlogPost = blogPost.replace(/\*/g, "");

  // Extract first sentence or first 50 characters as title
  const firstSentence = cleanBlogPost.split(".")[0];
  return firstSentence.length > 50 ? firstSentence.substring(0, 50) + "..." : firstSentence;
};

// Helper function to extract an excerpt from blog post
export const extractExcerpt = (blogPost: string): string => {
  if (!blogPost) return "No content available";

  // Remove asterisks from the blog post
  const cleanBlogPost = blogPost.replace(/\*/g, "");

  // Get content after the first sentence for the excerpt
  const sentences = cleanBlogPost.split(".");
  if (sentences.length > 1) {
    const excerpt = sentences.slice(1, 3).join("."); // Use 2nd and 3rd sentences for excerpt
    return excerpt.length > 150 ? excerpt.substring(0, 150) + "..." : excerpt;
  }

  // If there's only one sentence, use part of it
  return cleanBlogPost.length > 150 ? cleanBlogPost.substring(0, 150) + "..." : cleanBlogPost;
};

// Helper function to create a URL-friendly slug from a title
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .trim(); // Trim whitespace
};

// Helper function to extract the first URL from a blog post
export const extractImageUrl = (blogPost: string): string | null => {
  if (!blogPost) return null;

  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/i;
  const match = blogPost.match(urlRegex);

  if (match && match[0]) {
    return match[0];
  }

  // If no image URL found, try to find any URL
  const generalUrlRegex = /(https?:\/\/[^\s]+)/i;
  const generalMatch = blogPost.match(generalUrlRegex);

  if (generalMatch && generalMatch[0]) {
    return generalMatch[0];
  }

  return null;
};

// This function fetches blogs from the API
async function fetchBlogsFromAPI(): Promise<BlogPost[]> {
  // API key - in production, this should be stored in environment variables
  const API_KEY = "351f7b8a-f756-47cb-a44d-b37420d54516"; // Replace with your actual API key

  try {
    // Fetch blogs from the API endpoint
    const response = await fetch("https://getmoreseo.org/api/fetch-blogs", {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("API response not OK:", response.status, response.statusText);
      return [];
    }

    // Parse the response as text first to inspect it
    const responseText = await response.text();

    try {
      // Try to parse the response as JSON
      const result = JSON.parse(responseText);
      let fetchedBlogs: APIBlog[] = [];

      // Check if the result contains an error about multiple rows
      if (result.error && typeof result.error === "string" && result.error.includes("multiple (or no) rows returned")) {
        // If the error contains blogs data, use it
        if (result.blogs && Array.isArray(result.blogs)) {
          fetchedBlogs = result.blogs;
        }
      } else {
        // Handle different response formats
        if (Array.isArray(result)) {
          fetchedBlogs = result;
        } else if (result.blogs && Array.isArray(result.blogs)) {
          fetchedBlogs = result.blogs;
        } else if (typeof result === "object" && result.blog_post) {
          fetchedBlogs = [result];
        }
      }

      // Convert the fetched blogs to the format expected by the main blogs page
      return fetchedBlogs.map((blog: APIBlog, index: number): BlogPost => {
        const title = extractTitle(blog.blog_post);
        const excerpt = extractExcerpt(blog.blog_post);
        const imageUrl = extractImageUrl(blog.blog_post);
        const slug = createSlug(title);

        return {
          id: 14 + index, // Start IDs after the static blogs (which end at ID 13)
          title,
          excerpt,
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          slug,
          image: imageUrl || "/diverse-blog-community.png",
          blog_post: blog.blog_post, // Keep the original content
          user_id: blog.user_id, // Keep the original user_id
        };
      });
    } catch (parseError) {
      console.error("Failed to parse API response:", parseError);
      return [];
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

export default async function BlogPage() {
  // Get dynamic blog posts and combine with static ones
  const dynamicPosts: BlogPost[] = await fetchBlogsFromAPI();

  // Log for debugging
  console.log(`Fetched ${dynamicPosts.length} dynamic blog posts`);

  // Filter out any dynamic posts with IDs 1-13 (those are already in staticBlogPosts)
  const filteredDynamicPosts = dynamicPosts.filter((post) => post.id > 13);

  // Combine static and dynamic posts
  const blogPosts: BlogPost[] = [...staticBlogPosts, ...filteredDynamicPosts];

  // Sort by ID to maintain order
  blogPosts.sort((a, b) => a.id - b.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "GetMoreBacklinks Blog",
    description: "Guides, tutorials, and actionable tips to grow your SaaS business",
    url: "https://www.getmorebacklinks.org/blogs",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "GetMoreBacklinks",
      logo: {
        "@type": "ImageObject",
        url: "https://www.getmorebacklinks.org/logo.png",
      },
    },
    blogPost: blogPosts.map((post: BlogPost) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://www.getmorebacklinks.org/blogs/${post.slug}`,
      image: post.image.startsWith("http") ? post.image : `https://www.getmorebacklinks.org${post.image}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Header */}
      <header className="border-b border-gray-200 relative bg-white z-10">
        <div className="container mx-auto px-4">
          <div className="h-16 sm:h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/getmorepacklinks.png"
                alt="getmorebacklinks"
                width={100}
                height={32}
                className="h-6 sm:h-8 w-auto"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/blogs"
                className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/auth-form"
                className="text-xs sm:text-sm font-medium text-white bg-[#F36516] hover:bg-[#E55505] transition-colors px-4 py-2 rounded-full"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">GetMoreBacklinks Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            You can find guides, tutorials and actionable tips to grow your SaaS here.
          </p>

          {/* Display total count of blogs */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {blogPosts.length} blog posts ({staticBlogPosts.length} static, {filteredDynamicPosts.length}{" "}
              dynamic)
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post: BlogPost) => (
              <div key={post.id} className="group">
                <article className="flex flex-col h-full space-y-3 border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md">
                  <Link href={`/blogs/${post.slug}`} className="block flex-grow">
                    <div className="aspect-[3/2] relative overflow-hidden rounded-t-lg bg-gray-100">
                      <Image
                        src={post.image || "/placeholder.svg?height=400&width=600&query=blog"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 space-y-2 flex-grow">
                      <time className="text-sm text-gray-500" dateTime={post.date}>
                        {post.date}
                      </time>
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                  <div className="px-4 pb-4">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}