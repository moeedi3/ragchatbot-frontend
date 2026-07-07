"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KeyRound, ShieldAlert, Sparkles, User } from "lucide-react";
import { toast } from "sonner";

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate network call
        setTimeout(() => {
            if (username === "admin" && password === "admin123") {
                sessionStorage.setItem("admin_auth", "true");
                toast.success("Welcome back! Redirecting to control center.");
                router.push("/admin");
            } else {
                setError("Invalid username or password. Please try again.");
                toast.error("Authentication failed.");
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 relative select-none">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl" />

            <div className="w-full max-w-md p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/80 shadow-xl shadow-zinc-250/20 dark:shadow-none backdrop-blur-md relative z-10">
                {/* Brand Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-3.5">
                        <Sparkles className="h-5 w-5 animate-pulse" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Admin Portal Access
                    </h2>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1.5 text-center max-w-[280px]">
                        Enter your control center credentials to manage document indexes.
                    </p>
                </div>

                {/* Error Banner */}
                {error && (
                    <div className="mb-5 p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 flex items-start gap-2.5">
                        <ShieldAlert className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-red-600 dark:text-red-400 leading-normal">
                            {error}
                        </span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Input */}
                    <div>
                        <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
                            Username
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-400">
                                <User className="h-4 w-4" />
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                disabled={isLoading}
                                placeholder="Enter username (admin)"
                                className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-50 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/5 dark:focus:ring-blue-500/10 outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-400">
                                <KeyRound className="h-4 w-4" />
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                placeholder="Enter password (admin123)"
                                className="w-full text-sm pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-zinc-50 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/5 dark:focus:ring-blue-500/10 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md shadow-blue-500/15 disabled:opacity-50 hover:scale-[1.005] active:scale-[0.995] transition-all flex items-center justify-center cursor-pointer mt-6"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '300ms' }} />
                            </span>
                        ) : (
                            "Verify Credentials"
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-4 border-t border-zinc-150 dark:border-zinc-800/80 text-center">
                    <button
                        onClick={() => router.push("/chat")}
                        className="text-xs text-zinc-400 hover:text-blue-500 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                        ← Back to Chat Assistant
                    </button>
                </div>
            </div>
        </div>
    );
}
