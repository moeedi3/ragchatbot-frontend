import Link from "next/link";
import { Sparkles, ArrowRight, Activity } from "lucide-react";

export default function Navbar() {
    return (
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md flex items-center justify-between px-6 shrink-0 select-none">
            <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                    RAG.AI
                </span>
                <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-400 font-semibold tracking-wider uppercase">
                    v1.0
                </span>
            </div>

            <div className="flex items-center gap-4">
                {/* Connection status */}
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Activity className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                        Online
                    </span>
                </div>

                <Link
                    href="/admin"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 cursor-pointer"
                >
                    Admin Console
                    <ArrowRight className="h-3 w-3" />
                </Link>
            </div>
        </header>
    );
}