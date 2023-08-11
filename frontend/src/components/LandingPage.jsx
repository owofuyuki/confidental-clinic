import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <NavigationBar currentPage="landing"/>
        </div>
    );
}

export default LandingPage;