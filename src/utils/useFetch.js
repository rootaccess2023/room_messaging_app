import { useState } from "react";

export const useFetch = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const getData = async (URL, options = {}) => {

        try {
            const response = await fetch(URL, options);
            if (!response.ok) {
                throw new Error('Error fetching. Response not okay.');
            }
            const receivedResponse = await response.json();
            setData(receivedResponse);

        } catch (error) {
            setError(error)
        }
    };

    return { data, error, getData }
}