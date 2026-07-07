export interface Source {
    filename: string;
    page: number;
}

export interface ChatMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    sources?: Source[];

    // Used while waiting for the backend
    loading?: boolean;
}