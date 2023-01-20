const BASE_URL = 'https://pixabay.com/api/';
const KEY = '31580624-e5f87d112d57e9afad49661fb';
function fetchImage(name = 'cat') {
  fetch(
    `${BASE_URL}?q={name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
      .then(response => {
        console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    // .then(data => {console.log(response.data.hits);
    //   ;
    // })
    // .catch(error => {
    //   // Error handling
    // });
}
export default{fetchImage}

   

