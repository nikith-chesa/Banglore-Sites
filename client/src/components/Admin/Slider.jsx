import React, { useState } from "react";
import {
    Menu,
    X,
    PlusSquare,
    ListOrdered,
    Users,
    BarChart2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ListForm from "./ListForm";

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`${isOpen ? "w-64" : "w-16"
                    } bg-white shadow-md transition-all duration-300 ease-in-out flex flex-col`}
            >
                {/* Toggle Button */}
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <button onClick={toggleSidebar} className="text-gray-600">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    {isOpen && <span className="text-lg font-bold">Admin</span>}
                </div>

                {/* Nav Items */}
                <nav className="flex-1 px-2 py-4 space-y-4">
                    <Link
                        to="/admin/add-land"
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                        <PlusSquare size={20} />
                        {isOpen && <span>Add Lands</span>}
                    </Link>

                    <Link
                        to="/admin/land-list"
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                        <ListOrdered size={20} />
                        {isOpen && <span>Land Lists</span>}
                    </Link>

                    <Link
                        to="/admin/user-details"
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                        <Users size={20} />
                        {isOpen && <span>User Details</span>}
                    </Link>

                    <Link
                        to="/admin/analytics"
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                        <BarChart2 size={20} />
                        {isOpen && <span>Analytics</span>}
                    </Link>
                </nav>
            </div>

            {/* Content Area Placeholder */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold">Admin Dashboard Content</h1>
                <ListForm />
            </div>
        </div>
    );
};

export default AdminSidebar;
