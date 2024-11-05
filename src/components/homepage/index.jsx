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
            <article>
                <p>
                    Torneio das lendas foi criado seguindo a política
                    do “Lenga-Lenga Jurídico” da Riot Games com recursos pertencentes
                    à Riot Games. A Riot Games não endossa ou patrocina este projeto.
                </p>
            </article>
            <section>
                <Homepage_interface />
            </section>
        </div>
    ) 
}

export default Homepage;