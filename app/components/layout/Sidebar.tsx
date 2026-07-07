"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getDocuments } from "@/services/document.service";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Database, FileText, Sun, Moon, Sparkles, Terminal, LogOut, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { data: documents, isLoading } = useQuery({
        queryKey: ["documents"],
        queryFn: getDocuments,
    });

    const handleLogout = () => {
        sessionStorage.removeItem("admin_auth");
        toast.info("Logged out successfully.");
        router.push("/admin/login");
    };

    return (
        <aside className="w-72 border-r bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 h-full flex flex-col justify-between shrink-0 select-none">
            {/* Header */}
            <div className="flex flex-col">
                <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800">
                    <Link href="/admin" className="flex items-center gap-2 group">
                        <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-all duration-200">
                            <Sparkles className="h-5 w-5 animate-pulse" />
                        </div>
                        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            Admin.AI
                        </span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="px-4 py-6 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-4 block mb-2">
                        Control Board
                    </span>
                    
                    <Link
                        href="/admin"
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                            pathname === "/admin"
                                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/60 hover:text-zinc-950 dark:hover:text-zinc-200"
                        }`}
                    >
                        <Database className="h-4.5 w-4.5 group-hover:scale-105 transition-transform" />
                        <span>Manage Base</span>
                    </Link>

                    <Link
                        href="/chat"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/60 hover:text-zinc-950 dark:hover:text-zinc-200"
                    >
                        <ArrowLeft className="h-4.5 w-4.5 group-hover:-translate-x-0.5 transition-transform" />
                        <span>Exit to Chat</span>
                    </Link>
                </nav>

                {/* Document index preview */}
                <div className="px-6 py-2 border-t border-zinc-200/60 dark:border-zinc-900">
                    <div className="flex items-center justify-between mb-3 mt-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                            Knowledge Index
                        </span>
                        {documents && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                                {documents.length}
                            </span>
                        )}
                    </div>

                    <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
                        {isLoading ? (
                            <div className="space-y-2 py-2">
                                <div className="h-7 w-full bg-zinc-200 dark:bg-zinc-900 animate-pulse rounded-lg" />
                                <div className="h-7 w-5/6 bg-zinc-200 dark:bg-zinc-900 animate-pulse rounded-lg" />
                            </div>
                        ) : documents && documents.length > 0 ? (
                            documents.slice(0, 5).map((doc) => (
                                <div
                                    key={doc.id}
                                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100/50 dark:bg-zinc-900/40 border border-zinc-200/30 dark:border-zinc-800/30 truncate"
                                    title={doc.filename}
                                >
                                    <FileText className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                                    <span className="truncate">{doc.filename}</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-xs text-zinc-400 dark:text-zinc-500 italic py-2">
                                No files uploaded yet.
                            </p>
                        )}

                        {documents && documents.length > 5 && (
                            <Link
                                href="/admin"
                                className="block text-[11px] text-center text-blue-500 hover:underline pt-2 font-medium"
                            >
                                + {documents.length - 5} more files
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer options */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-500/5 transition-colors cursor-pointer border border-transparent hover:border-red-500/10"
                >
                    <span className="flex items-center gap-3">
                        <LogOut className="h-4.5 w-4.5 shrink-0" />
                        <span>Sign Out</span>
                    </span>
                </button>

                {/* System Status */}
                <div className="p-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-3.5 w-3.5 text-zinc-500" />
                        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                            Service Status
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] text-zinc-500">Ready</span>
                    </div>
                </div>

                {/* Theme toggle & Profile */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-500/10">
                            AD
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                Administrator
                            </span>
                            <span className="text-[10px] text-zinc-400">Owner</span>
                        </div>
                    </div>

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-lg bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </aside>
    );
}