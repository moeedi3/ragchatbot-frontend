import api from "./api";
import { Source } from "@/types/chat";

export interface ChatResponse {

    answer: string;

    sources: Source[];

}

export async function askQuestion(question: string) {

    const response = await api.post<ChatResponse>(
        "/chat",
        {
            question,
        }
    );

    return response.data;

}