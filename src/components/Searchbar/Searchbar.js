import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    tagName: '',
  };
  handelTagNameChange = e => {
    this.setState({ tagName: e.currentTarget.value.toLowerCase() });
  };
  handelSubmit = e => {
      e.preventDefault();
      if (this.state.tagName.trim() === '') {
          alert('Enter a value')
          return;
      }
      this.props.onSubmit(this.state.tagName)
    this.setState({ tagName: '' });
  };
  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handelSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            onChange={this.handelTagNameChange}
            class="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="tagName"
            value={this.state.tagName}
          />
        </form>
      </header>
    );
  }
}
