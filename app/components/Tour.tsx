import Image from "next/image";
import { renderRichText, SbBlokData, storyblokEditable, type StoryblokRichTextNode } from "@storyblok/react/rsc";
import { StoryblokBlok } from "@/lib/types";

export const Tour = ({ blok }: { blok: StoryblokBlok }) => {
    const title = (blok?.name ?? "Untitled") as string;
    const imageSrc = (blok?.image?.filename || blok?.image || "") as string;
    const intro = (blok?.introduction ?? "") as string;

    return (
        <main {...storyblokEditable(blok as unknown as SbBlokData)} className="w-full pt-20 md:pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <article className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                    {imageSrc ? (
                        <Image
                            className="w-full object-cover aspect-[16/9]"
                            src={imageSrc}
                            alt={title}
                            width={1600}
                            height={900}
                            priority={false}
                        />
                    ) : null}
                    <div className="p-6 sm:p-8">
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-zinc-900">{title}</h1>
                        {intro && (
                            <p className="mt-4 text-zinc-700 text-lg md:text-xl leading-relaxed">{intro}</p>
                        )}
                        <div className="mt-8">
                            <div
                                className="text-gray-800 prose prose-zinc md:prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: renderRichText(blok?.body as StoryblokRichTextNode<string | TrustedHTML>) ?? "" }}
                            />
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
};