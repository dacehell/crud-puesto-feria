import React, { useContext, useState } from "react";
import FeriaContext from "../../contextos/FeriaContext";

const Formulario = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<any>(0);
  const { handlerOnAdd } = useContext(FeriaContext);

  const handlerOnSubmit = (e: any) => {
    e.preventDefault();
    handlerOnAdd({ id: new Date().getTime(), name: name, price: 1000 });
  };
  return (
    <form onSubmit={(e) => handlerOnSubmit(e)}>
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        type="text"
        value={name}
        className="form-control"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="price">Precio </label>
      <input
        id="price"
        type="number"
        value={price}
        className="form-control"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="submit" className="btn btn-primary mt-3" />
    </form>
  );
};

export default Formulario;
