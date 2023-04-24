import { logo } from "../assets"


function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="Logo" className="w-28 object-contain" />

            <button type="button"
            onClick={()=> window.open('https://github.com/GrossoLuis')}
            className="black_btn"
            >
                Github
            </button>

        </nav>

        <h1 className="head_text">
            Resume Articulos con <br className="max-md:hidden" />
            <span className="orange_gradient">GTP-4</span>
        </h1>
        <h2 className="desc">
        ¡Atrévete a ahorrar tiempo y leer de forma más eficiente con Recapp! Nuestra innovadora herramienta utiliza la
         tecnología GPT-4 para resumir tus artículos favoritos en cuestión de segundos. Di adiós a las lecturas interminables
          y disfruta de la información esencial de forma rápida y fácil.
        </h2>
    </header>
  )
}

export default Hero