import Axios from 'axios';

async function Search(props) {
    var value = props;
    var apiUrl = 'https://pixabay.com/api';
    var apiKey = '';
    var images = [];

    var res = await Axios.get(`${apiUrl}/?key=${apiKey}&q=${value}&image_type=photo%order=latest&per_page=198`);
    images = res.data.hits;

    console.log(images)
    return images;
}
 
export default Search;