import Image from "next/image";
import { renderRichText, SbBlokData, storyblokEditable, type StoryblokRichTextNode } from "@storyblok/react/rsc";
import { StoryblokBlok } from "@/lib/types";

export const Tour = ({ blok }: { blok: StoryblokBlok }) => {
    const title = (blok?.name ?? "Untitled") as string;
    const imageSrc = (blok?.image?.filename || blok?.image || "") as string;
    const intro = (blok?.introduction ?? "") as string;

    return (
        <main {...storyblokEditable(blok as unknown as SbBlokData)} className="w-full pt-24 md:pt-28 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-zinc-900">{title}</h1>
                {imageSrc ? (
                    <Image className="mt-8 rounded-xl object-cover w-full" src={imageSrc} alt={title} width={1200} height={700} />
                ) : null}
                {intro && (
                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-700">{intro}</p>
                )}

                <div className="mt-10">
                    <div
                        className="prose prose-zinc md:prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: renderRichText(blok?.body as StoryblokRichTextNode<string | TrustedHTML>) ?? "" }}
                    />
                </div>
            </div>
        </main>
    );
};