import { ChatMessage } from "@/types/chat";
import SourceList from "./SourceList";
import { Bot, User } from "lucide-react";

interface MessageBubbleProps {
    message: ChatMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
    const isUser = message.role === "user";

    return (
        <div className={`flex gap-3.5 my-4 ${isUser ? "justify-end" : "justify-start"}`}>
            {/* Assistant Avatar */}
            {!isUser && (
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                    <Bot className="h-4.5 w-4.5" />
                </div>
            )}

            {/* Bubble */}
            <div
                className={`max-w-[82%] rounded-2xl px-4 py-3 shadow-xs transition-all duration-200 ${
                    isUser
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-tr-none"
                        : "bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/40 text-zinc-900 dark:text-zinc-100 rounded-tl-none"
                }`}
            >
                {message.loading ? (
                    <div className="flex items-center gap-1.5 py-1 px-0.5">
                        <span className="text-xs text-zinc-400 dark:text-zinc-500 mr-1.5 font-medium">Thinking</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 dark:bg-blue-400/85 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 dark:bg-blue-400/85 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 dark:bg-blue-400/85 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                ) : (
                    <>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap font-normal">
                            {message.content}
                        </p>

                        {!isUser && message.sources && message.sources.length > 0 && (
                            <SourceList sources={message.sources} />
                        )}
                    </>
                )}
            </div>

            {/* User Avatar */}
            {isUser && (
                <div className="h-8 w-8 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 shrink-0 mt-0.5 border border-zinc-300/40 dark:border-zinc-700/40">
                    <User className="h-4.5 w-4.5" />
                </div>
            )}
        </div>
    );
}