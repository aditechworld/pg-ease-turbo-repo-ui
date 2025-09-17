
interface Tab{
    label: string;
    icon: React.ReactNode;
    href: string;
    active?: boolean;
}

interface SidebarProps{
    tabs: Tab[];
}
export default function Sidebar({tabs}: SidebarProps){
    return <h1>Sidebar</h1>
}