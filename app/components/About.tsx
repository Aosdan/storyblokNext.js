import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { renderRichText } from "@storyblok/react/rsc";

export const About = ({ blok }: { blok: StoryblokBlok }) => {
    return (
        <section {...storyblokEditable(blok as unknown as SbBlokData)} className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-10 sm:px-6 lg:px-8 p-10 text-gray-800 bg-white rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                {blok.headline && (
                    <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900">{blok.headline}</h3>
                )}
                {typeof blok.content === 'string' ? (
                    <p className="mt-4 text-zinc-700">{blok.content}</p>
                ) : (
                    <div
                        className="prose prose-zinc md:prose-lg mt-4 max-w-none"
                        dangerouslySetInnerHTML={{ __html: renderRichText(blok.content as any) ?? "" }}
                    />
                )}
            </div>
        </section>
    );
};