import { ChatMessage } from "@/types/chat";
import MessageBubble from "./MessageBubble";

interface MessageListProps {

    messages: ChatMessage[];

}

export default function MessageList({

    messages,

}: MessageListProps) {

    return (

        <div className="space-y-6">

            {messages.map((message) => (

                <MessageBubble

                    key={message.id}

                    message={message}

                />

            ))}

        </div>

    );

}