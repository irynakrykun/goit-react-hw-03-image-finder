import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
const KEY= '31580624-e5f87d112d57e9afad49661fb'

export default class App extends Component {
  state = {
    tagName: '',
  };

  handelFormSubmit = tagName => {
    this.setState({ tagName });
  };
  componentDidMount(){
    fetch(`https://pixabay.com/api/?q={this.state.tagName}&key=${KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`)
      .then(response => response.json())
    .then(console.log())
}
 

  render() {
    return (
      <div>
            
        <Searchbar onSubmit={this.handelFormSubmit} />
        {/* <ImageGalleryItem tagName={this.setState.tagName} /> */}
      </div>
    );
  }
}
