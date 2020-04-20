import React from "react";
import { connect } from "react-redux";
import field from "../../field.svg";

// acciones
import { removeHeadline } from "../../redux/coach/coach.actions";

const Headlines = ({ headlines, removeHeadline }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="field">
        {headlines.map((player) => (
          <article key={player.id} className="headline">
            <div>
              <img src={player.photo} alt={player.name} />
              <button onClick={() => removeHeadline(player)}>X</button>
            </div>
            <p>{player.name}</p>
          </article>
        ))}
        <img src={field} alt="Field of soccer" />
      </div>
    </section>
  );
};
// recibe el estado y retorna un objeto y puedo recibirla por propiedades
const mapStateToProps = (state) => ({
  headlines: state.coach.headlines,
});

const mapDispatchToProps = (dispatch) => ({
  removeHeadline: (player) => dispatch(removeHeadline(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Headlines);
