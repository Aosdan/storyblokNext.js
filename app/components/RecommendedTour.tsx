import Link from "next/link";
import Image from "next/image";


import { StoryblokStory } from "@/lib/types";

export const RecommendedTour = ({ story }: { story: StoryblokStory }) => {
    const title = (story?.content?.name ?? story?.name ?? "Untitled") as string;
    const slug = story?.full_slug ?? story?.slug ?? "#";
    
    
    console.log("Story data:", JSON.stringify(story, null, 2));
    
    
    let imageUrl = story?.content?.main_image?.filename || 
                   story?.content?.image?.filename ||
                   story?.content?.main_image ||
                   story?.content?.image;
    
    if (imageUrl && typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
        imageUrl = `https://a.storyblok.com${imageUrl}`;
    }
    
    const finalImageUrl = typeof imageUrl === 'string' ? imageUrl : '';
    
    console.log("Final imageUrl:", finalImageUrl);
    return (
        <div className=" rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            {finalImageUrl ? (
                <Image
                    src={finalImageUrl}
                    alt={title}
                    width={800}
                    height={600}
                    className="aspect-video w-full object-cover rounded-t-xl"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
            ) : (
                <div className="w-full h-48 bg-zinc-100 rounded-t-xl flex items-center justify-center">
                    <span className="text-zinc-500">No image available</span>
                </div>
            )}
            <div className="p-5 sm:p-6">
                <Link href={`/${slug}`} className="block">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-zinc-900 font-semibold text-lg leading-snug line-clamp-2">{title}</h3>
                        <div className="shrink-0 text-zinc-700 font-semibold">
                            {story?.content?.price ? Number(story.content.price).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'TWD',
                                minimumFractionDigits: 0,
                            }) : '—'}
                        </div>
                    </div>
                </Link>
                <p className="text-zinc-500 uppercase font-semibold mt-2 text-xs tracking-wide">
                    {story?.content?.nestedContent?.location ? `${story.content.nestedContent.location}, Taiwan` : 'Taiwan'}
                </p>
                <Link className="mt-5 inline-flex items-center text-emerald-700 font-medium hover:underline" href={`/${slug}`}>
                    View Tour
                </Link>
            </div>
        </div>
    );
};