import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const naviget = useNavigate();
    const { Component } = props;
    useEffect(() => {
        let login = localStorage.getItem("login");
        if(!login){
            localStorage.setItem("loginStatus", "Please login to view dashboard!");
            naviget("/", {replace: true});
        }
    }, []);

    return(
        <Component />
    );
}

export default Protected;