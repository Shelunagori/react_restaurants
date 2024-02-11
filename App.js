import React from "react";
import ReactDoM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="log-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const styleCard = {
    backgroundColor : "#f0f0f0"
}

const RestroCards = () => {
    return (
        <div className="restro-card" style= {styleCard}>
            <h3>Meghana Foods</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <p>Search</p>
            </div>
            <div className="restro-container">
                <RestroCards />
            </div>
        </div>
    );
};

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