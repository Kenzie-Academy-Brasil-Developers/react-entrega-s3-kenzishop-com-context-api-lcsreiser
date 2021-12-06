import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Quebra galho",
      price: 99.0,
      img: "https://cdn.autopapo.com.br/box/uploads/2017/02/06135027/shutterstock_69361339.jpg",
    },
    {
      id: 2,
      name: "Sem seguro",
      price: 499.0,
      img: "http://3.bp.blogspot.com/-GV6bUHFBIxQ/Tlflte2LP3I/AAAAAAAACK0/T6k7GUPoyW4/s1600/Ezio_Corcel-II_capital_SP-450x281.jpg",
    },
    {
      id: 3,
      name: "Napolitano",
      price: 500.0,
      img: "https://static5.depositphotos.com/1055810/516/i/600/depositphotos_5164943-stock-photo-old-rusty-car.jpg",
    },
    {
      id: 4,
      name: "Rebaixado",
      price: 299.9,
      img: "https://www.diariochapadense.com.br/wp-content/uploads/2016/01/f-1453380041.jpg",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
