import React from "react";
import { useHistory } from "react-router-dom";
const Dog = (props) => {
  const history = useHistory();
  console.log(history);
  console.log(props);
  return (
    <div
      onClick={() => {
        history.push("/cat");
      }}
    >
      DOG
    </div>
  );
};

export default Dog;
