import { useState } from "react";

export function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };

    const [authToken, setAuthToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setAuthToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token: authToken
    };
}