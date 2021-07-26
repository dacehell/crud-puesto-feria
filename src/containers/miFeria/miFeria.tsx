import React, { useState } from "react";
import Formulario from "../../components/formulario/Formulario";
import Producto from "../../components/producto/Producto";
import FeriaContext from "../../contextos/FeriaContext";

const products = [
  {
    id: 1,
    name: "Papaya",
    price: 100,
  },
  {
    id: 2,
    name: "Pera",
    price: 50,
  },
  {
    id: 3,
    name: "Manzana",
    price: 350,
  },
];

const MiFeria = () => {
  const [productos, setProductos] = useState(products);

  const handlerOnAdd = (newProducto: any) => {
    setProductos([...products, newProducto]);
  };

  return (
    <div className="px-5 container">
      <FeriaContext.Provider value={{ handlerOnAdd }}>
        <Formulario />
      </FeriaContext.Provider>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <Producto
              id={producto.id}
              name={producto.name}
              price={producto.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiFeria;
