import React, { createContext, useReducer } from "react";
import UserReducer from "../context/UserReducer";
const InitialState = {
  user: [],
  token: "",
  isLoggedIn: false,
  error: [],
  lots: [],
  booking: [],
  unbooked:[],
};

export const GlobalContext = createContext(InitialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, InitialState);
  const checkLoggedin = async () => {
    const token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    }
    const response = await fetch(
      "https://parkit-tanvir.herokuapp.com/users/isTokenValid",
      {
        method: "POST",
        headers: { "x-auth-token": token },
        body: null,
      }
    );
    const data = await response.json();
    console.log(data);
    dispatch({
      type: "isLoggedin",
      payload: data,
    });
  };
  const register = async (newUser) => {
    const response = await fetch(
      "https://parkit-tanvir.herokuapp.com/users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      dispatch({
        type: "REGISTER",
        payload: data,
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: data,
      });
    }
  };
  const login = async (loginUser) => {
    const response = await fetch(
      "https://parkit-tanvir.herokuapp.com/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginUser),
      }
    );
    const data = await response.json();
    localStorage.setItem("auth-token", data.token);
    if (response.status === 200) {
      dispatch({
        type: "LOGIN",
        payload: data.user,
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: data,
      });
    }
  };
  const logout = (e) => {
    localStorage.setItem("auth-token", "");
    dispatch({
      type: "LOGOUT",
    });
  };

  const getUser = async () => {
    const token = localStorage.getItem("auth-token");
    const response = await fetch("https://parkit-tanvir.herokuapp.com/users/", {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
      body: null,
    });
    const data = await response.json();
    dispatch({
      type: "GETUSER",
      payload: data,
    });
  };
  const getLots = async () => {
    const response = await fetch(
      "https://parkit-tanvir.herokuapp.com/parking/all"
    );
    const data = await response.json();
    dispatch({
      type: "LOTS",
      payload: data,
    });
  };
  const book = async (Newbooking) => {
    const token = localStorage.getItem("auth-token");
    const response = await fetch(
      "https://parkit-tanvir.herokuapp.com/parking/book",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-auth-token": token },
        body: JSON.stringify(Newbooking),
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      dispatch({
        type: "BOOKING",
        payload: data,
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: data,
      });
    }
  };
  const unbook = async (Lotnumber) => {
    const token = localStorage.getItem("auth-token");
    const response = await fetch(
      "https://parkit-tanvir.herokuapp.com/parking/unbook",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "x-auth-token": token },
        body: Lotnumber,
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      dispatch({
        type: "UNBOOKING",
        payload: data,
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: data,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        lots: state.lots,
        booking: state.booking,
        unbooked:state.unbooked,
        register,
        login,
        logout,
        checkLoggedin,
        getUser,
        getLots,
        book,
        unbook,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
