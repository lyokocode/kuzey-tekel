import { Outlet } from "react-router-dom"
import { Navbar, BottomBar } from "../components"
import "../styles/index.scss"
import { useSelector } from "react-redux";


export const Layout = () => {

    const isDarkTheme = useSelector(state => state.theme);
    console.log(isDarkTheme)

    return (
        <main className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
            <Navbar />
            <section className=" appContainer  overflow-auto">
                <Outlet />
            </section>
            <BottomBar />
        </main>
    )

}