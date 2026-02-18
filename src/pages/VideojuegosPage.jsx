import GrillaVideojuegos from "../components/GrillaVideojuegos"
import Titulo from "../components/Titulo"
import Filtro from "../components/Filtro"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function VideojuegosPage() {
    const navigate = useNavigate()

    const [listaVideojuegos, setListaVideojuegos] = useState([])
    const [categorias, setCategorias] = useState([])

    useEffect(function () {
        async function obtenerVideojuegosHTTP() {
            const URL = "http://127.0.0.1:8000/videojuegos/"
            const response = await fetch(URL,
                {
                    headers: {
                        "x-token": localStorage.getItem("TOKEN")
                    }
                }
            )

            if (!response.ok) {
                console.error("Error de peticion" + response.status)
                return
            }
            const data = await response.json()
            setListaVideojuegos(data.data)
        }
        obtenerVideojuegosHTTP()
    }, [])

    useEffect(function () {
        async function obtenerCategoriasHTTP() {
            const URL = "http://127.0.0.1:8000/categorias/"
            const response = await fetch(URL,
                {
                    headers: {
                        "x-token": localStorage.getItem("TOKEN")
                    }
                }
            )
            if (!response.ok) {
                console.error("Error de peticion: " + response.status)
                return
            }

            const data = await response.json()
            setCategorias(data.data)
        }
        obtenerCategoriasHTTP()
    }, [])

    async function filtrar(categoria) {
        const URL = "http://127.0.0.1:8000/videojuegos/"
        let response
    
        if (categoria == "-1") {
            response = await fetch(URL, {
                headers: {
                    "x-token": localStorage.getItem("TOKEN")
                }
            })
        } else {
            response = await fetch(`${URL}?categoria=${categoria}`, {
                headers: {
                    "x-token": localStorage.getItem("TOKEN")
                }
            })
        }
    
        if (!response.ok) {
            console.error("Error de peticion " + response.status)
            return
        }
    
        const data = await response.json()
        setListaVideojuegos(data.data)
    }    

    function logout() {
        localStorage.clear()
        navigate("/")
    }

    return <div className="px-4">
        <Titulo onLogout={logout} />
        <Filtro categorias={categorias} onFiltro={filtrar} />
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos={listaVideojuegos} />
    </div>
}

export default VideojuegosPage