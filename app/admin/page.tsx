import AdminHeader from "../components/admin/AdminHeader";
import DocumentList from "../components/admin/DocumentList";
import UploadSection from "../components/admin/UploadSection";

export default function AdminPage() {

    return (

        <main className="flex-1 flex flex-col h-full overflow-hidden w-full max-w-5xl mx-auto px-6 py-5">

            <AdminHeader />

            <div className="flex-1 overflow-y-auto my-4 pr-1 space-y-6 scrollbar-thin">

                <UploadSection />

                <DocumentList />

            </div>

        </main>

    );

}