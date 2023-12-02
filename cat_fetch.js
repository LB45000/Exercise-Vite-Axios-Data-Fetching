import axios from 'axios';

export function fetchRandomCatImage() {
    const apiUrl = 'https://cataas.com/cat?json=true';

    return axios.get(apiUrl)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching cat image:', error);
            throw error; 
        });
}
