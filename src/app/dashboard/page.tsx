import Navbar from "../(components)/Header";
import Sidebar from "../(components)/Sidebar";

export default function Page() {
    return (
        <main className="flex h-screen w-screen">
            <Sidebar/>
            <section className="w-full">
                <Navbar/>
                <main>
                    Dashboard Page
                </main>
            </section>
        </main>
    );
}