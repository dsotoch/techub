import React from "react";
import { Header } from "./header";
import { Body } from "./body";
const View = () => {
    return (
        <div className="container mx-auto">
            <div><Header /></div>
            <div><Body/></div>
        </div>
    );
}

export default View;