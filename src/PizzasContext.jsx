import { createContext, useState, useEffect } from "react";

const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [shoppingCart, setshoppingCart] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  const addToCart = ({ id, price, name, img }) => {
    const foundProductIndex = shoppingCart.findIndex((p) => p.id === id);
    const product = { id, price, name, img, count: 1 };

    if (foundProductIndex >= 0) {
      shoppingCart[foundProductIndex].count++;
      setshoppingCart([...shoppingCart]);
    } else {
      setshoppingCart([...shoppingCart, product]);
    }
  };

  const increment = (i) => {
    shoppingCart[i].count++;
    setshoppingCart([...shoppingCart]);
  };
  const decrement = (i) => {
    const { count } = shoppingCart[i];
    if (count === 1) {
      shoppingCart.splice(i, 1);
    } else {
      shoppingCart[i].count--;
    }
    setshoppingCart([...shoppingCart]);
  };

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        shoppingCart,
        setshoppingCart,
        addToCart,
        increment,
        decrement,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export { PizzasProvider };

export default PizzasContext;
