"use client";

import { useState } from "react";
import { askQuestion } from "@/services/chat.service";
import { ChatMessage } from "@/types/chat";

export function useChat() {

    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function sendMessage(question: string) {

        if (!question.trim()) return;

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: question,
        };

        const loadingMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "",
            loading: true,
        };

        // Show user message immediately
        setMessages((prev) => [...prev, userMessage, loadingMessage]);

        setIsLoading(true);

        try {

            const response = await askQuestion(question);

            setMessages((prev) =>
                prev.map((message) =>
                    message.id === loadingMessage.id
                        ? {
                            ...message,
                            content: response.answer,
                            sources: response.sources,
                            loading: false,
                        }
                        : message
                )
            );

        } catch {

            setMessages((prev) =>
                prev.map((message) =>
                    message.id === loadingMessage.id
                        ? {
                            ...message,
                            content:
                                "Something went wrong while contacting the server.",
                            loading: false,
                        }
                        : message
                )
            );

        } finally {

            setIsLoading(false);

        }

    }

    return {

        messages,

        sendMessage,

        isLoading,

    };

}