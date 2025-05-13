import { IconKey, IconLogout, IconUser, IconPlus } from "@tabler/icons-react";

export default function Users_Page() {
    const users = [
        {
            name: "Rahmat Saudi Al Fathir As",
            email: "rahmatsaudi@universitasmulia.ac.id",
            roles: ["Admin", "Employee"],
            status: "Aktif",
        },
        {
            name: "Lintang",
            email: "lintang@universitasmulia.ac.id",
            roles: ["Employee"],
            status: "Aktif",
        },
        {
            name: "Shafira",
            email: "shafira@universitasmulia.ac.id",
            roles: ["Employee"],
            status: "Aktif",
        },
        {
            name: "Lebah Ganteng",
            email: "lebahganteng@universitasmulia.ac.id",
            roles: ["Employee"],
            status: "Suspended",
        },
    ];

    return (
        <div id="container" className="flex h-screen bg-white font-sans text-black">
            <aside className="w-[220px] bg-white border-r border-gray-600 py-4 p-8 gap-6 flex flex-col">
                <h1 className="text-3xl font-bold text-center">Connect</h1>
                <div className="flex flex-col gap-2 mt-4">
                    <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded bg-black text-white">
                        <IconUser size={20} /> Users
                    </button>
                    <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
                        <IconKey size={20} /> Hak Akses
                    </button>
                    <button className="flex gap-2 items-center px-2 py-1 hover:bg-gray-100 rounded text-black">
                        <IconLogout size={20} /> Logout
                    </button>
                </div>
            </aside>

            <section id="content" className="flex-1 p-6 relative text-black">
                <input 
                    type="text" 
                    placeholder="Cari Users" 
                    className="w-full border px-4 py-2 rounded mb-6 placeholder-gray-600 text-black"
                />
                <div id="list-users" className="flex flex-col gap-4"> 
                    {users.map((user, index) => (
                        <div key={index} className="border rounded p-4 flex justify-between">
                            <div>
                                <p className="font-bold">{user.name}</p>
                                <p className="text-sm">{user.email}</p>
                                <div className="flex gap-2 mt-2">
                                    {user.roles.map((role, i) => (
                                        <span 
                                            key={i} 
                                            className="text-xs bg-black text-white px-2 py-0.5 rounded"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center font-semibold ml-auto">
                                <p className={user.status === "Aktif" ? "text-black" : "text-black"}>
                                    {user.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="absolute bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded shadow text-black">
                    <IconPlus size={20} />
                </button>
            </section>
        </div>
    );
}
