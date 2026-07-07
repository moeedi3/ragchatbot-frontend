import api from "./api";

import { Document } from "@/types/document";

export async function getDocuments(): Promise<Document[]> {

    const response = await api.get("/documents");

    return response.data;

}

export async function uploadDocument(file: File) {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/documents/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;

}

export async function deleteDocument(documentId: number) {

    const response = await api.delete(
        `/documents/${documentId}`
    );

    return response.data;

}