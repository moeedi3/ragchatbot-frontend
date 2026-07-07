"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDocument } from "@/services/document.service";
import { toast } from "sonner";

export function useDeleteDocument() {

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

        },

        onError: () => {

            toast.error(
                "Failed to delete document."
            );

        },

    });

}