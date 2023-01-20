import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Searchbar from './Searchbar/Searchbar';
import fetchImage from './API';

export default class App extends Component {
  state = {
    tagName: '',
  };

  handelFormSubmit = tagName => {
    this.setState({ tagName });
  };

  componentDidMount() {
    fetchImage().then(data => {
      console.log(data);
    });
  }

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
