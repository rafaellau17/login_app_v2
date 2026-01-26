function Titulo({ onLogout }) {
    return <h1 className="text-4xl">
        Grilla de Videojuegos
        <button type="button" className="ml-5 bg-orange-600 py-1 text-sm px-2 rounded-md text-white hover:bg-orange-200 hover:text-gray-700"
        onClick = {function() {onLogout()} }>
            Logout
        </button>
    </h1>
}

export default Titulo