import Link from "next/link";
import Image from "next/image";


import { StoryblokStory } from "@/lib/types";

export const RecommendedTour = ({ story }: { story: StoryblokStory }) => {
    const title = (story?.content?.name ?? story?.name ?? "Untitled") as string;
    const slug = story?.full_slug ?? story?.slug ?? "#";
    
    // Debug: Log the story structure to understand the data
    console.log("Story data:", JSON.stringify(story, null, 2));
    
    // Try multiple possible image paths
    let imageUrl = story?.content?.main_image?.filename || 
                   story?.content?.image?.filename ||
                   story?.content?.main_image ||
                   story?.content?.image;
    
    // If we have an image URL but it doesn't start with https, prepend Storyblok CDN
    if (imageUrl && typeof imageUrl === 'string' && !imageUrl.startsWith('http')) {
        imageUrl = `https://a.storyblok.com${imageUrl}`;
    }
    
    // Ensure imageUrl is a string for the Image component
    const finalImageUrl = typeof imageUrl === 'string' ? imageUrl : '';
    
    console.log("Final imageUrl:", finalImageUrl);
    return (
        <div className="font-mono shadow-lg rounded-md p-3  ">
            {finalImageUrl ? (
            
                <Image
                 
                    src={finalImageUrl} 
                    alt={title}
                    width={300}
                    height={200}
                    className="aspect-video object-cover w-full h-90  rounded-lg"       
                            
                />
            ) : (
                <div className=" w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                </div>
            )}
            <Link className="p-8" href={`/${slug}`}>
                <div className="text-shadow-sm text-gray-600 flex gap-4 justify-between text-lg font-bold">
                <h3 className="text-gray-600">{title}</h3>
                {story?.content?.price ? Number(story.content.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "TWD",
                    minimumFractionDigits: 0,
                }) : "Price not available"}</div>
            </Link>
            <p className="text-gray-300 uppercase font-bold mt-2 text-sm tracking-wide">{story?.content?.nestedContent?.location ? `${story.content.nestedContent.location}, Taiwan` : "Taiwan"}</p>
            <Link className="font-bold text-base mt-8 block underline" href={`/${slug}`}>View Tour</Link>
            
        </div>
        
        
    );
};