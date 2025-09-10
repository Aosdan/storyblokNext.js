import { StoryblokComponent } from "@storyblok/react";
import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
export const Grid = ({ blok }: { blok: StoryblokBlok }) => {
    return (
        <section  {...storyblokEditable(blok as unknown as SbBlokData)}  className="font-sans bg-gray-800 py-16">
            <div className="container mx-auto w-full px-4">
               <h2 className="text-3xl md:text-4xl font-bold">{blok.headline}</h2>
               <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
                {blok.items?.map((childBlok: StoryblokBlok) => (
                <StoryblokComponent blok={childBlok} key={childBlok._uid}/>
                ))} 
               </div>
            
            </div>
            
        </section>
    );
};