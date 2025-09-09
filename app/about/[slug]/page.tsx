import { notFound } from "next/navigation";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { RenderStory } from "@/app/components/RenderStory";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "about",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories.map((s: any) => ({ slug: s.slug }));
}

async function fetchAbout(slug: string) {
  const client = getStoryblokApi();
  try {
    const { data } = await client.get(`cdn/stories/about/${slug}`, {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return data.story;
  } catch (e) {
    return null;
  }
}

export default async function AboutSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await fetchAbout(slug);
  if (!story) {
    notFound();
  }
  return <RenderStory content={story.content} />;
}


