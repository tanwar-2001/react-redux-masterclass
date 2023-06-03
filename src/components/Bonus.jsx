import React from "react";
import { increaseBonus } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Bonus = () => {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>{`Total Bonus: ${points}`}</h3>
        <button onClick={() => dispatch(increaseBonus())}>Increment +</button>
      </div>
    </div>
  );
};

export default Bonus;
