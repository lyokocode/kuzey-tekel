import { Outlet } from "react-router-dom"
import { Navbar, BottomBar } from "../components"
import "../styles/index.scss"

export const Layout = () => {

    return (
        <main className=" app ">
            <Navbar />
            <section className=" appContainer  overflow-auto">
                <Outlet />
            </section>
            <BottomBar />
        </main>
    )

}