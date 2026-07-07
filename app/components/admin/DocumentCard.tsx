"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Trash2, Calendar, FileType } from "lucide-react";
import { Document } from "@/types/document";
import ConfirmDialog from "../common/ConfirmDialog";
import { useDeleteDocument } from "@/hooks/useDeleteDocument";

interface Props {
    document: Document;
}

export default function DocumentCard({ document }: Props) {
    const deleteMutation = useDeleteDocument();

    const formattedDate = new Date(document.uploaded_at).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
    });

    return (
        <Card className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 hover:border-zinc-350 dark:hover:border-zinc-700/60 transition-all duration-200 shadow-xs">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <FileText className="h-5.5 w-5.5" />
                    </div>

                    <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 truncate pr-2" title={document.filename}>
                            {document.filename}
                        </h3>

                        <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-1">
                                <FileType className="h-3.5 w-3.5" />
                                PDF Document
                            </span>
                        </div>
                    </div>
                </div>

                <ConfirmDialog
                    title="Delete Document"
                    description="Are you sure you want to permanently delete this document from the knowledge base? This action cannot be undone."
                    onConfirm={() => deleteMutation.mutate(document.id)}
                    trigger={
                        <Button
                            variant="ghost"
                            size="icon"
                            disabled={deleteMutation.isPending}
                            className="h-8.5 w-8.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20 transition-all shrink-0 cursor-pointer"
                        >
                            <Trash2 className="h-4.5 w-4.5" />
                        </Button>
                    }
                />
            </div>
        </Card>
    );
}