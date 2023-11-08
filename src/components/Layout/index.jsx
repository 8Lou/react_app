import React from "react";
import Card from "../Card";
import "./index.css";

const Layout = ({ }) => {
    const className = "layout"
    return <div className={className}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
}

export default Layout;