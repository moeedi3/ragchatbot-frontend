import { Badge } from "@/components/ui/badge";
import { Database } from "lucide-react";

export default function AdminHeader() {
    return (
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 shrink-0">
            <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <Database className="h-4.5 w-4.5" />
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        Knowledge Base Control Center
                    </h2>
                    <p className="text-xs text-zinc-500">
                        Upload, index, and manage document corpora
                    </p>
                </div>
            </div>
            <Badge
                variant="outline"
                className="bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-[10px] font-semibold flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Database Connected
            </Badge>
        </div>
    );
}