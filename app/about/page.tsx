import { getStoryblokApi } from "@storyblok/react/rsc";
import { RenderStory } from "@/app/components/RenderStory";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AboutPage() {
  const client = getStoryblokApi();
  try {
    const { data } = await client.get("cdn/stories/about", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    if (!data?.story?.content) {
      return <div className="container mx-auto px-4 py-8">404 - Page not found</div>;
    }
    return <RenderStory content={data.story.content} />;
  } catch {
    return <div className="container mx-auto px-4 py-8">404 - Page not found</div>;
  }
}


