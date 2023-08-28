import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

export const Layout = () => {

    return (
        <main className=" w-full h-full min-h-screen">
            <Navbar />
            <section className=" h-[calc(100vh-80px)] overflow-auto">
                <Outlet />
            </section>
        </main>
    )

}