import { Component } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from '../Searchbar/Searchbar';
import fetchImage from '../API';
import ImageGallery from '../ImageGallery/ImageGallery';
import ButtonClick from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

export default class App extends Component {
  state = {
    searchQuery: '',
    items: [],
    page: 1,
    per_page: 12,
    isLoading: false,
    error: null,
    modalUrl: '',
    showButton: false,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page,per_page } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery 
    
    )
      try {
        this.setState({ isLoading: true, error: null });
        const items = await fetchImage({
          page,
          searchQuery,
          per_page,
        });
        this.setState(prevState => ({
          items: [...prevState.items, ...items]
        }));

        if (page >= this.state.items.length) {
          this.setState({ showButton: true });
        }
        
        //   } else {
        //     this.setState({ showButton: false });
        // }
        if (items.length === 0) {
          this.setState({
            error: 'Not found. Try another value',
          });
        }
      } catch (error) {
        this.setState({ error: 'Error. Please reload page' });
      } finally {
        this.setState({ isLoading: false });
      }
  }

  toggleModal = largeImageUrl => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalUrl: largeImageUrl,
    }));
  };

  handelFormSubmit = tagName => {
    this.setState({
      items: [],
      per_page: 12,
      searchQuery: tagName,
    });
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
     
  }

  render() {
    const { searchQuery, showModal, isLoading, showButton, error, modalUrl } =
      this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handelFormSubmit} />
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        <ImageGallery items={this.state.items} onClick={this.toggleModal} />
        {showButton && <ButtonClick onClick={this.loadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalUrl} alt={searchQuery} width="600" />
          </Modal>
        )}
      </AppContainer>
    );
  }
}
