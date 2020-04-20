import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";

// acciones
import { addHeadline, addSubstitute } from "../../redux/coach/coach.actions";

const Players = ({ players, addHeadline, addSubstitute }) => {
  const gridPlayers = createRef();

  useEffect(() => {
    setScrollContainer();
    document.addEventListener("click", setScrollContainer);
  }, []);

  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridPlayers.current;
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName("player");
        let itemsLength = items.length;
        let bp = window.matchMedia("(min-width: 640px)").matches
          ? window.matchMedia("(min-width: 1024px)").matches
            ? 4
            : 2
          : 1;

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0);
          return (itemsLength / n) * 100;
        };
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `;
      };
      let styles =
        !desktop && window.matchMedia("(min-width: 1024px)").matches
          ? `display: grid; grid-row-gap: 1rem;`
          : generatedGrid();
      container.setAttribute("style", styles);
    }
  };

  console.log(players);
  return (
    <section>
      <h2>Jugadores</h2>
      <div className="container-players">
        <div ref={gridPlayers} onClick={() => setScrollContainer.bind(this)}>
          {players.map((player) => (
            <article key={player.id} className="player">
              <img src={player.photo} alt={player.name} />
              <h3>{player.name}</h3>
              <div>
                <button onClick={() => addHeadline(player)}>Titular</button>
                <button onClick={() => addSubstitute(player)}>Suplente</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// recibe el estado y retorna un objeto y puedo recibirla por propiedades
const mapStateToProps = (state) => ({
  players: state.coach.players,
});

/*Este tipo de funciones son las encargadas de llevar las acciones que van a ser leidas por el reducer para ser cambiadas por el estado */
const mapDispatchToProps = (dispatch) => ({
  addHeadline: (player) => dispatch(addHeadline(player)),
  addSubstitute: (player) => dispatch(addSubstitute(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
