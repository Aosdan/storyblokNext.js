import { RecommendedTour } from "./RecommendedTour";
import { StoryblokBlok, StoryblokStory } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
export const RecommendedTours = ({ blok }: { blok: StoryblokBlok }) => {
    return (
        <section {...storyblokEditable(blok as unknown as SbBlokData)} className="py-14 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-center text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-zinc-900">{blok.headline}</h2>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {Array.isArray(blok.tours) && blok.tours.map((tour: StoryblokStory, index: number) => (
              <RecommendedTour
                story={tour}
                key={tour?.content?._uid ?? tour?.uuid ?? tour?.id ?? tour?._uid ?? index}
              />
            ))}
           </div>
           </div>
        </section>
    );
};