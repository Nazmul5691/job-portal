import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function MainLayout() {
    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}