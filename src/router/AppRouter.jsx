import { Route, Routes } from "react-router-dom"
// import { DcPage, MarvelPage } from "../heroes/pages"
import { LoginPage } from "../auth/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
