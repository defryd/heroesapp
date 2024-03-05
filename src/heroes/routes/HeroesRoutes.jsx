import { Navbar } from "../../ui/components/Navbar"
import { Route, Routes, Navigate } from "react-router-dom"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="dc" element={<DcPage />} />
                    <Route path="marvel" element={<MarvelPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero" element={<HeroPage />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>

        </>
    )
}
