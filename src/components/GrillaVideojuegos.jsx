import CardVideojuego from "./CardVideojuego"

function GrillaVideojuegos({ listaVideojuegos }) {

    return <div className="grid grid-cols-3 gap-2">
        {
            (function () {
                if (listaVideojuegos.length == 0) {
                    return <div>Cargando...</div>
                }
                else {
                    return listaVideojuegos.map(function (videojuego) {
                        return <CardVideojuego
                            key={videojuego.nombre}
                            videojuego={videojuego} />
                    })
                }
            })()
        }
    </div>
}

export default GrillaVideojuegos