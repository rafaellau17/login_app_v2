import { useState } from "react"
import Cabecera from "../components/Cabecera"
import Formulario from "../components/Formulario"
import Mensaje from "../components/Mensaje"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
    const [msjVisible, setMsjVisible] = useState(false)
    
    const navigate = useNavigate()

    function Login(correo, password) {
        if (correo == "PW" && password == "123") {
            console.log("Login correcto")
            navigate("/main")
            setMsjVisible(false)
        }
        else {
            console.log("Login correcto")
            setMsjVisible(true)
        }
    }  

    return <div className="flex justify-center">
        <div className="border-2 rounded-lg border-gray-300 shadow-md p-4">
            <Cabecera />
            <Formulario onLogin={ Login } />
            <Mensaje msg={"Login error"} visible={msjVisible}/>
            <Link to={"/main"} className="mt-4 bg-orange-600 rounded-md text-white">Accede sin login</Link>
        </div>
    </div>
}

export default LoginPage
