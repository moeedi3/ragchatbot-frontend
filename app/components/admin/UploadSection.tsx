"use client";

import { useRef, useState } from "react";
import { UploadCloud, Loader2 } from "lucide-react";
import { useUploadDocument } from "@/hooks/useUploadDocument";

export default function UploadSection() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const upload = useUploadDocument();

    function chooseFile() {
        inputRef.current?.click();
    }

    async function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        upload.mutate(file);
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.type === "application/pdf") {
            upload.mutate(file);
        }
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={chooseFile}
            className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 select-none ${
                isDragging
                    ? "border-blue-500 bg-blue-500/5 dark:bg-blue-500/10 scale-[1.002]"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/20"
            } ${upload.isPending ? "pointer-events-none opacity-80" : ""}`}
        >
            <input
                ref={inputRef}
                type="file"
                accept=".pdf"
                hidden
                onChange={onFileChange}
            />

            {upload.isPending ? (
                <div className="flex flex-col items-center py-2">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4 animate-spin">
                        <Loader2 className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        Indexing Document...
                    </span>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 max-w-xs leading-relaxed">
                        Extracting pages, generating embeddings, and storing vectors in the database.
                    </p>
                    <div className="w-48 bg-zinc-200 dark:bg-zinc-800 rounded-full h-1 mt-4 overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full animate-pulse w-full" />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center py-2">
                    <div className={`p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 mb-4 transition-colors duration-200 ${isDragging ? "bg-blue-500/10 text-blue-500" : ""}`}>
                        <UploadCloud className="h-7 w-7" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                        Upload Knowledge File
                    </span>
                    <p className="text-xs text-zinc-500 mt-1 max-w-xs leading-relaxed">
                        Drag and drop a PDF file here, or click to browse.
                    </p>
                    <span className="text-[10px] text-zinc-400 mt-4 font-medium px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800">
                        PDF Format (Max 10MB)
                    </span>
                </div>
            )}
        </div>
    );
}