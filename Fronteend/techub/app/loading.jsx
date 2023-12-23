import { CircularProgress } from "@mui/material";
import React from "react";
const LoadingComponent = () => {
    return (
        <div className="w-full mx-auto my-auto text-center h-full">
            <CircularProgress></CircularProgress>
        </div>
    );
};

export default LoadingComponent;