import { Bot, Sparkles } from "lucide-react";

export default function ChatHeader() {
    return (
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 shrink-0">
            <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <Bot className="h-4.5 w-4.5" />
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                        Enterprise Chat Assistant
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                            <Sparkles className="h-2.5 w-2.5" />
                            GPT RAG Engine
                        </span>
                    </h2>
                    <p className="text-xs text-zinc-500">
                        Knowledge-grounded answers with verified document citations
                    </p>
                </div>
            </div>
        </div>
    );
}