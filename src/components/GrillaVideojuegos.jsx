import CardVideojuego from "./CardVideojuego"

function GrillaVideojuegos({listaVideojuegos}) {

    return <div className="grid grid-cols-3 gap-2">
        {
            listaVideojuegos.map(function (videojuego) {
                return <CardVideojuego
                    key={videojuego.nombre}
                    videojuego={videojuego} />
            }
            )
        }

    </div>
}

export default GrillaVideojuegos