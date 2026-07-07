"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadDocument } from "@/services/document.service";
import { toast } from "sonner";
export function useUploadDocument() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: uploadDocument,

        onSuccess: () => {

            toast.success(

                "Document uploaded successfully."

            );

            queryClient.invalidateQueries({

                queryKey: ["documents"]

            });

        },

        onError: () => {

            toast.error(

                "Upload failed."

            );

        }

    });

}