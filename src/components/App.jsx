import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Searchbar from './Searchbar/Searchbar';
// import fetchImage from './API';

export default class App extends Component {
  state = {
    tagName: '',
  };

  handelFormSubmit = tagName => {
    this.setState({ tagName });
  };

  componentDidMount() {
    
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '31580624-e5f87d112d57e9afad49661fb';
 
    fetch(
      `${BASE_URL}?q=city&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
       .then(console.log())
  };
     
      

  

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ImageGalleryItem tagName={this.setState.tagName} />
      </div>
    );
  }
}
