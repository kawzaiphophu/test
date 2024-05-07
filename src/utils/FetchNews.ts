import axios from 'axios';

export const FetchNews = async () => {
    try {
        const response = await axios.get(`https://harnkan-api.depwhite.com/api/news?page=1&pageLimit=10`);
        return response.data;
    } catch (err) {
        console.log("Error fetching products:", err);
        throw err; 
    }
};