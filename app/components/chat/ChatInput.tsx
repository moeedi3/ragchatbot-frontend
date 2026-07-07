"use client";

import { useState, useRef, useEffect } from "react";
import { Send, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
    onSend: (question: string) => void;
    isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
    const [question, setQuestion] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    function handleSend() {
        if (!question.trim() || isLoading) return;
        onSend(question);
        setQuestion("");
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Auto-grow textarea height as the user types
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    }, [question]);

    return (
        <div className="pt-2 pb-4 shrink-0">
            <div className="relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-xs focus-within:border-blue-500/50 dark:focus-within:border-blue-400/50 focus-within:ring-2 focus-within:ring-blue-500/5 focus-within:ring-offset-0 transition-all duration-200 p-2">
                <textarea
                    ref={textareaRef}
                    placeholder="Ask a question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    className="w-full resize-none bg-transparent outline-none border-0 py-2.5 px-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 min-h-[40px] max-h-[160px] scrollbar-thin"
                    style={{ border: "none", outline: "none", boxShadow: "none" }}
                />

                <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 pt-2 px-2 pb-0.5">
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                        Press Enter to send, Shift + Enter for new line
                    </span>

                    <Button
                        onClick={handleSend}
                        disabled={isLoading || !question.trim()}
                        className="h-8 w-8 rounded-lg p-0 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md shadow-blue-500/10 transition-all disabled:opacity-50 disabled:shadow-none hover:scale-[1.02] shrink-0"
                    >
                        <ArrowUp className="w-4 h-4 shrink-0" />
                    </Button>
                </div>
            </div>
        </div>
    );
}