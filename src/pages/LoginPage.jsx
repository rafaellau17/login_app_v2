import { useEffect, useState } from "react"
import Cabecera from "../components/Cabecera"
import Formulario from "../components/Formulario"
import Mensaje from "../components/Mensaje"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
    const [msjVisible, setMsjVisible] = useState(false)
    
    const navigate = useNavigate()

    useEffect(function() {
        const datosLogin = localStorage.getItem("DATOS_LOGIN")
        if (datosLogin != null) {
            const login = JSON.parse(datosLogin)
            if (login.ingreso == true) {
                navigate("/main")
                return
            }
        }
    }, [])

    function Login(correo, password) {
        if (correo == "PW" && password == "123") {
            navigate("/main")
            setMsjVisible(false)

            const datosLogin = {
                ingreso: true,
                correo: correo,
                cantidadIntentos: 0
            }
            localStorage.setItem("DATOS_LOGIN", JSON.stringify(datosLogin))

        }
        else {
            setMsjVisible(true)

            const datosLogin = localStorage.getItem("DATOS_LOGIN")
            if (datosLogin == null) {
                const login = {
                    ingreso: false,
                    cantidadIntentos: 1
                }
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            }
            else {
                const login = JSON.parse(datosLogin)
                login.cantidadIntentos++
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            }
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
