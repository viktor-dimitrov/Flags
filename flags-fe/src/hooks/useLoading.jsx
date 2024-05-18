import { useState } from "react";



export const useLoading = () => {

    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = (bool) => {
        setIsLoading(bool); 
    };

    return {
        isLoading,
        handleLoad
    }

}