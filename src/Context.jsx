import { createContext, useReducer } from "react";

// Boshlang'ich qiymat, statelarimiz
const initialState = {
  count: 5,
  products: null,
};

export const Context = createContext();

// Reducer statega o'zgartirish kiritish uchun kerak
const reducer = (state = initialState, actions) => {
  // Actionda type va payload keladi, type da ko'pincha funksiya nomi bo'ladi va uni switch case orqali tanib olamiz. payload da har qanday malumot kelishi mumkin(masalan object, array, number, null)
  const { type, payload } = actions;
  switch (type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };

    case "DECREASE":
      return { ...state, count: state.count - 1 };

    case "UPTOMY":
        return {...state, count: state.count + payload}

    case "setProducts":
        return {...state, products: payload}

    default:
      return { state };
  }
};

// Provider bizning loyihamizni o'rab turuvchi karobka ramka desak ham bo'ladi.
function MyProvider({ children }) {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    // Biz hohlagan componentimizdan valuega murojat qilishimiz mumkin, useContext orqali
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}

export default MyProvider;
