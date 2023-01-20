// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '31580624-e5f87d112d57e9afad49661fb';
// function fetchImage(name = 'cat') {
//   return fetch(
//     `https://pixabay.com/api/?q=city&page=1&key=31580624-e5f87d112d57e9afad49661fb&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then(response => {
//      console.log(response);

//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
      
//     })
//     .then(data => {console.log(data);
//       ;
//     })
//     .catch(error => {
//       // Error handling
//     });
// }
// export default{fetchImage}

 
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '31580624-e5f87d112d57e9afad49661fb';
function fetchImage(name = cat) {
  return fetch(
    `https://pixabay.com/api/?q=city&page=1&key=31580624-e5f87d112d57e9afad49661fb&image_type=photo&orientation=horizontal&per_page=12`
  )
      .then(response => {
        console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
fetchImage()