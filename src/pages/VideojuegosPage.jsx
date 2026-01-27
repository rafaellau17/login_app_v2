import GrillaVideojuegos from "../components/GrillaVideojuegos"
import Titulo from "../components/Titulo"
import Filtro from "../components/Filtro"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function VideojuegosPage() {
    const categorias = [
        "FPS", "RPG", "Estrategia"
    ]

    const navigate = useNavigate()

    function obtenerVideojuegosHTTP() {
        const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiLtCG2QO9ojxUcwqiSou_YnRe3yyq3zvGrhqw80lxUiRfBl-LxTV6Q6d_2lm_LFf5rD7u9xxqswpEuZmshZMn87TPsnQRAssUqglCgkxdHxEdYPufwoVCoIHEKOHczAbZacinsCm2Tgv2l0FxSij4RCt_cevSXUWcrRY5_d4KVr5WmYVK77ng2D5JS_ao68-6_QOnjcM97bsMZW0GaW2pvQMUOHHJYrV054blJHpB0T-DNGhWUKtB0iZrqpiwn4auxIXNZyxzNHliuu0S-lZt7xODbp-O33hdCqLDa&lib=MwotjRmUun0RLlzJNoicmGhJptMVnD4LO"
        const response = await fetch(URL)
    }

    const lista = [{
        nombre: "CSGO",
        imagen: "/imagenes/csgo.jpg",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.",
        categoria: "FPS"
    }, {
        nombre: "Honkai Star Rail",
        imagen: "https://lutris.net/media/games/screenshots/fef9f3e2275119630707c14817fd4db7_438971071424613688.png",
        descripcion: "Un videojuego de rol de fantasía espacial donde los jugadores viajan por la galaxia en el Expreso Astral, similar a Genshin Impact pero por turnos y enfocado en la exploración cósmica y la resolución de misterios estelares.",
        categoria: "RPG"
    }]

    const [listaVideojuegos, setListaVideojuegos] = useState(lista)

    function filtrar(categoria) {
        if (categoria == "-1") {
            setListaVideojuegos(lista)
        }
        else {
            const listaVideojuegosModificada = listaVideojuegos.filter(function (vj) {
                return vj.categoria == categoria
            })
            setListaVideojuegos(listaVideojuegosModificada)
        }
    }

    function logout() {
        localStorage.clear()
        navigate("/")
    }

    return <div className="px-4">
        <Titulo onLogout={logout}/>
        <Filtro categorias={categorias} onFiltro={filtrar} />
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos={listaVideojuegos} />
    </div>
}

export default VideojuegosPage