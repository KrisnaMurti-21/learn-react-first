import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useContext, useEffect, useState } from "react"
import { DarkMode } from "../../context/DarkMode"

const Navbar = () => {
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce ((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
    
    return(
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {username}
            <div className="flex items-center bg-gray-800 p-2 rounded-md mx-5">{totalCart}</div>
            <Button className="bg-black px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light" : "Dark"}
            </Button>
            <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Navbar