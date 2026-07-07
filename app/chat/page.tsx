"use client";

import { useChat } from "@/services/useChat";
import ChatHeader from "../components/chat/ChatHeader";
import ChatInput from "../components/chat/ChatInput";
import EmptyState from "../components/chat/EmptyState";
import MessageList from "../components/chat/MessageList";



export default function ChatPage() {

    const {

        messages,

        sendMessage,

        isLoading,

    } = useChat();

    return (

        <main className="flex-1 flex flex-col h-full overflow-hidden w-full max-w-4xl mx-auto px-6 py-5">

            <ChatHeader />

            <div className="flex-1 overflow-y-auto my-4 pr-1 scrollbar-thin">

                {messages.length === 0 ? (

                    <EmptyState onPromptSelect={sendMessage} />

                ) : (

                    <MessageList messages={messages} />

                )}

            </div>

            <ChatInput

                onSend={sendMessage}

                isLoading={isLoading}

            />

        </main>

    );

}