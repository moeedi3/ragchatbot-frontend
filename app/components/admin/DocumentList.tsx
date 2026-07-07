"use client";

import { useQuery } from "@tanstack/react-query";
import { getDocuments } from "@/services/document.service";
import DocumentCard from "./DocumentCard";
import { AlertCircle, FileSpreadsheet, Loader2 } from "lucide-react";

export default function DocumentList() {
    const {
        data: documents,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["documents"],
        queryFn: getDocuments,
    });

    if (isLoading) {
        return (
            <div className="space-y-3 py-6">
                <div className="flex items-center gap-2 mb-1">
                    <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        Loading catalog files...
                    </span>
                </div>
                {[1, 2, 3].map((n) => (
                    <div
                        key={n}
                        className="h-20 w-full bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800 animate-pulse rounded-2xl"
                    />
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5 flex items-start gap-3 mt-4">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">
                        Failed to load document catalog
                    </h4>
                    <p className="text-xs text-red-500/80 mt-1">
                        There was an issue communicating with the database. Please try reloading the dashboard.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Uploaded Corpora
                </span>
                {documents && documents.length > 0 && (
                    <span className="text-xs font-medium text-zinc-500">
                        {documents.length} {documents.length === 1 ? "document" : "documents"} indexed
                    </span>
                )}
            </div>

            {!documents?.length ? (
                <div className="border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                    <FileSpreadsheet className="h-8 w-8 text-zinc-400 mb-3" />
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        No documents uploaded
                    </span>
                    <p className="text-xs text-zinc-500 mt-1 max-w-xs leading-relaxed">
                        Your knowledge base is currently empty. Use the upload zone above to import PDF files.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-3">
                    {documents.map((document) => (
                        <DocumentCard key={document.id} document={document} />
                    ))}
                </div>
            )}
        </div>
    );
}