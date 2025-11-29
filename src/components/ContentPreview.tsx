import { cn, formatDate, readingTime } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">;
  detailed?: boolean;
  pill?: boolean;
  class?: string;
};

export default function ContentPreview({
  entry,
  detailed = false,
  pill = false,
  class: className,
}: Props) {
  const { slug, data, body } = entry;
  const readTime = readingTime(body);

  return (
    <li
      class={cn(
        "post-preview group/card relative flex flex-col rounded-3xl border border-black/15 px-5 py-2.5 transition-colors duration-300 ease-in-out hover:bg-black/5 dark:border-white/20 hover:dark:bg-white/10",
        detailed && "max-sm:px-4 sm:py-5",
        className,
      )}
    >
      <a
        class={cn(
          "flex w-full flex-col transition-all",
          !detailed && "sm:flex-row sm:items-center",
        )}
        href={`/${entry.collection}/${slug}`}
        data-astro-prefetch
      >
        <div class="blend flex items-center gap-2 py-1 sm:mr-4">
          {pill && (
            <div class="rounded-full border border-black/15 px-2 py-0.5 text-sm capitalize dark:border-white/25">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          )}
          <div class="min-w-[95px] text-sm uppercase">{formatDate(data.date)}</div>
        </div>

        <div class="blend z-10 flex-grow group-hover/card:text-black group-hover/card:dark:text-white">
          <div class="flex items-center justify-between">
            <div class={cn("font-semibold text-black dark:text-white", detailed && "text-lg")}>
              {data.draft && <span class="text-red-500">(Draft) </span>}
              {data.title}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-current group-hover/card:stroke-black group-hover/card:dark:stroke-white"
            >
              <line
                x1="5"
                y1="12"
                x2="19"
                y2="12"
                class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover/card:translate-x-1 group-hover/card:scale-x-100"
              ></line>
              <polyline
                points="12 5 19 12 12 19"
                class="translate-x-0 transition-all duration-300 ease-in-out group-hover/card:translate-x-1"
              ></polyline>
            </svg>
          </div>
          {detailed && (
            <>
              <p class="line-clamp-2 pt-1 text-sm sm:line-clamp-3">{data.summary}</p>
              <div class="flex items-center gap-2 py-1.5 text-sm italic leading-4 sm:py-3">
                <svg class="size-4 stroke-current">
                  <use href="/ui.svg#book-open"></use>
                </svg>
                <span>{readTime}</span>
              </div>
            </>
          )}
        </div>
      </a>
      {detailed && data.tags && data.tags.length > 0 && (
        <ul class="tag-list mt-1 flex flex-wrap gap-2">
          {data.tags.map((tag: string) => (
            <li>
              <a
                href={`/tags/${tag}`}
                class="rounded-full border border-black/15 px-3 py-1 text-xs capitalize transition-colors hover:bg-black/5 dark:border-white/25 hover:dark:bg-white/10"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
