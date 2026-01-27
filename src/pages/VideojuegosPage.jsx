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
            const URL = "https://script.google.com/macros/s/AKfycbxMZbg2ZTtWjfgmRVP25A2Kt6i02_SDLcu1asfc9CKNXDxLISrTxqaoK5pdgBrjmc1Ijw/exec"
            const response = await fetch(URL)

            if (!response.ok) {
                console.error("Error de peticion" + response.status)
                return
            }
            const data = await response.json()
            setListaVideojuegos(data)
        }
        obtenerVideojuegosHTTP()
    }, [])

    useEffect(function () {
        async function obtenerCategoriasHTTP() {
            const URL = "https://script.google.com/macros/s/AKfycbxMZbg2ZTtWjfgmRVP25A2Kt6i02_SDLcu1asfc9CKNXDxLISrTxqaoK5pdgBrjmc1Ijw/exec?tipo=categorias"
            const response = await fetch(URL)

            if (!response.ok) {
                console.error("Error de peticion: " + response.status)
                return
            }

            const data = await response.json()
            setCategorias(data)
        }
        obtenerCategoriasHTTP()
    }, [])

    async function filtrar(categoria) {
        const URL = "https://script.google.com/macros/s/AKfycbxMZbg2ZTtWjfgmRVP25A2Kt6i02_SDLcu1asfc9CKNXDxLISrTxqaoK5pdgBrjmc1Ijw/exec"
        let response
        if (categoria == "-1") {
            response = await fetch(URL)
        }
        else {
            response = await fetch(`${URL}?categoria=${categoria}`)
        }
        if(!response.ok) {
            console.error("Error de peticion" + response.status)
            return
        }

        const data = await response.json()
        setListaVideojuegos(data)
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