import "./style.css";
import Homepage_interface from "./interface/index.jsx";

const Homepage = () => {
    return (
        <div id="Homepage">
            <menu>
                <img src={`http://localhost:3000/torneios/TL.png`} alt="logotipo"/>
                <div id="Homepage_block">
                    <h3>Torneio das lendas</h3>
                    <p>Aqui começa sua história no rift</p>
                </div>
            </menu>
            <section>
                <Homepage_interface />
            </section>
        </div>
    ) 
}

export default Homepage;