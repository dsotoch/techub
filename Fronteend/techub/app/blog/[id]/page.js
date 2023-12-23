import React from "react";
import { Header } from "./header";
import { Body } from "./body";

const View = ({params}) => {
    return (
        <div className="container mx-auto">
            <div><Header /></div>
            <div><Body id={params.id}/></div>
        </div>
    );
}
export default View;

