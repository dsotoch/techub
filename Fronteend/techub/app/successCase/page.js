import React from "react";
import { Header } from "./header";
import { Body } from "./body";

const View = () => {
    return (
        <div className="container mx-auto grid">
            <div className="flex justify-center">
                <Header/>
            </div>
            <div className="flex justify-center">
                <Body/>
            </div>
        </div>
    );
}
export default View;