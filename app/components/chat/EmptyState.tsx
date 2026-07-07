import { Bot, DollarSign, Calendar, ShieldCheck, BookOpen } from "lucide-react";

interface EmptyStateProps {
    onPromptSelect?: (prompt: string) => void;
}

export default function EmptyState({ onPromptSelect }: EmptyStateProps) {
    const suggestions = [
        {
            icon: DollarSign,
            title: "Travel & Expense Policy",
            desc: "What are the rules and limits for company travel expenses?",
            prompt: "What is the company policy regarding travel and business expenses?",
            color: "text-amber-500 bg-amber-500/10",
        },
        {
            icon: Calendar,
            title: "HR & Paid Time Off",
            desc: "How do I request vacation or sick days?",
            prompt: "How can I request paid time off (PTO) and what is the allowance?",
            color: "text-emerald-500 bg-emerald-500/10",
        },
        {
            icon: ShieldCheck,
            title: "Safety Guidelines",
            desc: "Explain the office safety protocols and procedures.",
            prompt: "Can you summarize the primary office safety handbook guidelines?",
            color: "text-blue-500 bg-blue-500/10",
        },
        {
            icon: BookOpen,
            title: "SOPs & Documentation",
            desc: "Where are standard operating procedures listed?",
            prompt: "What are the standard operating procedures (SOPs) for this project?",
            color: "text-indigo-500 bg-indigo-500/10",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[450px] text-center max-w-3xl mx-auto px-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mb-6">
                <Bot className="w-8 h-8 animate-bounce" />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                How can I help you today?
            </h2>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-md">
                Ask questions about company policies, technical specifications, standard operating procedures, or any uploaded files.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-10">
                {suggestions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={idx}
                            onClick={() => onPromptSelect?.(item.prompt)}
                            className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-left hover:border-blue-500/50 hover:bg-blue-500/5 dark:hover:bg-blue-500/5 transition-all duration-200 group flex items-start gap-3 w-full"
                        >
                            <div className={`p-2 rounded-lg shrink-0 ${item.color}`}>
                                <Icon className="h-4.5 w-4.5" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5 truncate">
                                    {item.desc}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}