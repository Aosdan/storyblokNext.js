import { notFound } from "next/navigation";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { RenderStory } from "@/app/components/RenderStory";
import { draftMode } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories.map((story) => ({slug: story.slug}));
};
const fetchTourPage = async (slug: string) => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  try {
    const response = await client.get(`cdn/stories/tours/${slug}`, {
      version: (process.env.NODE_ENV === "development" || isEnabled) ? "draft" : "published",
    });
    return response.data.story;
  } catch (error: unknown) {
    const errorObj = error as { response?: { status?: number } };
    if (errorObj?.response?.status === 404) {
      return null;
    }
    if (errorObj?.response?.status === 401) {
      const region = process.env.STORYBLOK_REGION || 'eu';
      const token = process.env.STORYBLOK_ACCESS_TOKEN ? 'set' : 'missing';
      const version = process.env.STORYBLOK_VERSION || 'draft';
      console.error(
        `Storyblok 401 Unauthorized. Checks: token=${token}, region=${region}, version=${version}. ` +
        `If using a preview token, version must be 'draft'. Ensure token belongs to the ${region.toUpperCase()} space.`
      );
    }
    throw error;
  }
};

const TourPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const story = await fetchTourPage(slug);
  if (!story) {
    notFound();
  }
  return <RenderStory content={story.content} />;
};

export default TourPage;

