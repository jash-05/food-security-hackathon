import React from "react";

const Dnd = () => {
  const options = [
    { id: 1, name: "Graph1" },
    { id: 2, name: "Graph2" },
    { id: 3, name: "Graph3" },
    { id: 4, name: "Graph4" },
  ];
  return (
    <div>
      {options.map((option) => {
        return <div style={{ border: "1px solid black" }}>{option.id}</div>;
      })}
    </div>
  );
};

export default Dnd;
