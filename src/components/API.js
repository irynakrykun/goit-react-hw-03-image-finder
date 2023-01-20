// // import axios from "axios";
// // async function fetchImages(value='cat',page =1) {
// //     const KEY_API = '31580624-e5f87d112d57e9afad49661fb';
// // const BASE_URL = 'https://pixabay.com/api/';
// // const URL = `${BASE_URL}?key=${KEY_API}&image_type=photo&orientation=horizontal&safesearch=true&q=${value}&per_page=40&page=${page}` 

// //          try {
// //     const response = await axios.get(URL);
// //     return (response.data.hits);
// //   } catch (error) {
// //     console.error(error);
// // }
// // } 
// // export { fetchImages } 
   

 

// import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api';
// export const fetchImage = async ({ page = 1, searchQuery = 'cat' }) => {
//   const response = await axiosApi.get('/', {
//     params: {
//       q: searchQuery,
//       page,
//       key: '31580624-e5f87d112d57e9afad49661fb',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//     },
//   });
//   return response.data.hits;
// };

// export default fetchImage;