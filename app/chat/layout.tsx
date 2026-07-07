import Navbar from "@/app/components/layout/Navbar";

export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-background">
            <Navbar />
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {children}
            </main>
        </div>
    );
}
