import React from "react";

function Step3(props) {
  return (
    <div>
      <p>Tetto: {props.state.si}</p>
      <p>Name: {props.state.name}</p>
      <p>Surname: {props.state.surname}</p>
      <p>Email: {props.state.email}</p>
      <p>Phone: {props.state.phone}</p>
    </div>
  );
}

export default Step3;
