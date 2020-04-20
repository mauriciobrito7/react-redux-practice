import React from "react";
import { connect } from "react-redux";

import { removeSubstitute } from "../../redux/coach/coach.actions";

const Substitutes = ({ substitutes, removeSubstitute }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="field">
        {substitutes.map((player) => (
          <article key={player.id} className="substitutes">
            <div>
              <img src={player.photo} alt={player.name} />
              <button onClick={() => removeSubstitute(player)}>X</button>
            </div>
            <p>{player.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
// recibe el estado y retorna un objeto y puedo recibirla por propiedades
const mapStateToProps = (state) => ({
  substitutes: state.coach.substitutes,
});

const mapDispatchToProps = (dispatch) => ({
  removeSubstitute: (player) => dispatch(removeSubstitute(player)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Substitutes);
