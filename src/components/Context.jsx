import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
import apiData from "./apiData";
import homeimg from "../images/hero.svg";
import aboutimg from "../images/about1.svg";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    topSpan: "",
    name: "",
    image: "",
    services: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        topSpan: "Welcome to ",
        name: "ZenAvi",
        image: homeimg,
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        topSpan: "HI THERE, I AM",
        name: "Dunna Avinash",
        image: aboutimg,
      },
    });
  };

  // const getServices = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     dispatch({ type: "GET_SERVICES", payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getServices = (apiData) => {
    dispatch({ type: "GET_SERVICES", payload: apiData });
  };

  useEffect(() => {
    getServices(apiData);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
