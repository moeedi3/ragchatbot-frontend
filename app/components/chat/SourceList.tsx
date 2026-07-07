import { Source } from "@/types/chat";
import { FileText } from "lucide-react";

interface SourceListProps {
    sources?: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
    if (!sources?.length) return null;

    return (
        <div className="mt-3.5 pt-2.5 border-t border-zinc-200/40 dark:border-zinc-850">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2">
                Sources & Citations
            </span>
            <div className="flex flex-wrap gap-2">
                {sources.map((source, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-850 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 cursor-default select-none max-w-[220px]"
                        title={`${source.filename} (Page ${source.page})`}
                    >
                        <FileText className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                        <span className="text-xs text-zinc-600 dark:text-zinc-300 truncate font-medium">
                            {source.filename}
                        </span>
                        <span className="text-[10px] font-bold px-1 py-0.5 rounded-md bg-zinc-300/40 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-400 shrink-0">
                            p.{source.page}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}