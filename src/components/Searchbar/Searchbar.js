import { Component } from 'react';
import { CiSearch } from 'react-icons/ci';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

 class Searchbar extends Component {
  state = {
    tagName: '',
  };
  handelTagNameChange = e => {
    this.setState({ tagName: e.currentTarget.value.toLowerCase() });
  };
  handelSubmit = e => {
    e.preventDefault();
    if (this.state.tagName.trim() === '') {
      alert('Enter a value');
      return;
    }
    this.props.onSubmit(this.state.tagName);
    this.setState({ tagName: '' });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormButton type="submit">
            <CiSearch />
          </SearchFormButton>

          <SearchFormInput
            onChange={this.handelTagNameChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="tagName"
            value={this.state.tagName}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
export default Searchbar;