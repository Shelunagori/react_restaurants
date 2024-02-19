import React from "react";
import ReactDoM from "react-dom/client";
import Header  from "./components/HeaderComponent";
import Body from "./components/BodyComponent";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDoM.createRoot(document.getElementById("root"));
root.render(<App />);