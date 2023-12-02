
import { fetchRandomCatImage } from './cat_fetch';

async function displayRandomCatImage() {
    try {
        const catData = await fetchRandomCatImage();
        const catImageContainer = document.getElementById('catImageContainer');

        if (catData._id) {
            const catImage = document.createElement('img');
            catImage.src = `https://cataas.com/cat/${catData._id}`;
            catImage.alt = 'Random Cat';
            catImageContainer.appendChild(catImage);
        }
    } catch (error) {
        console.error('Error displaying cat image:', error);
    }
}


displayRandomCatImage();
