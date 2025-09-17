export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
            <nav>
                <ul>
                    <li className="mb-2"><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                    <li className="mb-2"><a href="/profile" className="hover:underline">Profile</a></li>
                    <li className="mb-2"><a href="/settings" className="hover:underline">Settings</a></li>
                    <li className="mb-2"><a href="/logout" className="hover:underline">Logout</a></li>
                </ul>
            </nav>
        </aside>
    );
}