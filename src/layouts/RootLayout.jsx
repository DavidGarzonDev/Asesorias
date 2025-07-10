import { Outlet } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"



export const RootLayout = () => {
    
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Navbar />
                

                <main className="container my-8 flex-1 mx-auto">
                    <Outlet />
                </main>

            <Footer />
        </div>
    )
}
