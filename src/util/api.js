import axios from 'axios';

export let getResponse = async (url) => {
    await axios.get(url).then(({ data }) => {
        const themes = data.results;
        return themes;
    });
};
