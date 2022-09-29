import { Route, Routes } from "react-router-dom"
import { Fav } from './Fav';
import { Home } from './Home';
 
export const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fav" element={<Fav />} />
    </Routes>
  )
}
