import { RecommendedTour } from "./RecommendedTour";
import { StoryblokBlok, StoryblokStory } from "@/lib/types";

export const RecommendedTours = ({ blok }: { blok: StoryblokBlok }) => {
    return (
        <section className=" bg-white br-2 py-16 mx-auto  px-4">
           <h2 className="text-gray-600 text-3xl md:text-4xl font-bold text-center">{blok.headline}</h2>

           <div className="grid md:grid-cols-2 gap-8 m-16">
            {Array.isArray(blok.tours) && blok.tours.map((tour: StoryblokStory, index: number) => (
              <RecommendedTour
                story={tour}
                key={tour?.content?._uid ?? tour?.uuid ?? tour?.id ?? tour?._uid ?? index}
              />
            ))}
           </div>
           
        </section>
    );
};