"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "@/services/document.service";
import { toast } from "sonner";

interface UseDeleteDocumentOptions {
    onSuccess?: () => void;
}

export function useDeleteDocument(options?: UseDeleteDocumentOptions) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: deleteDocument,

        onSuccess: () => {

            toast.success(
                "Document deleted successfully."
            );

            queryClient.invalidateQueries({

                queryKey: ["documents"]

            });

            options?.onSuccess?.();

        },

        onError: () => {

            toast.error(
                "Failed to delete document."
            );

        },

    });

}