import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: 'Flowers',
      bookType: 'ebooks',
      printType: 'all'
    };
  }

  formateQueryParameter(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
  }

  componentDidMount() {
    const params = {
      q: this.state.searchTerm,
      filter: this.state.bookType,
      printType: this.state.printType,
      key: 'AIzaSyAgDe5oiKv5jrPwwbzw5ocC6OPHHldpDDc'
    };
    const searchURL = 'https://www.googleapis.com/books/v1/volumes?';
    const queryString = this.formateQueryParameter(params);
    const url = searchURL + queryString;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res.json();
      })
      .then(data => {
        //console.log(data.items);
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  updateBooks() {
    const params = {
      q: this.state.searchTerm,
      filter: 'ebooks',
      printType: 'all',
      key: 'AIzaSyAgDe5oiKv5jrPwwbzw5ocC6OPHHldpDDc'
    };
    const searchURL = 'https://www.googleapis.com/books/v1/volumes?';
    const queryString = this.formateQueryParameter(params);
    const url = searchURL + queryString;
    console.log("update books url" + url);
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res.json();
      })
      .then(data => {
        //console.log(data.items);
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  updateSearchTerm(term) {
    //console.log("term: " + term);
    this.setState({
      searchTerm: term
    });
    //console.log("new term: " + this.state.searchTerm);
    this.updateBooks();
  }

  updateBookType(type) {
    //console.log("book type: " + type);
    this.setState({
      bookType: type
    });
    //console.log("new type: " + this.state.bookType);
  }

  updatePrintType(type) {
    this.setState({
      printType: type
    });
  }

  render() {
    const error = this.state.error
      ? <div className="error">{this.state.error}</div>
      : "";
      //console.log("new term: " + this.state.searchTerm);
      //console.log("new books: " + JSON.stringify(this.state.books));
    
      return (
        <div className="App">
          {error}
          
          <SearchBar
            handleSearch={term => this.updateSearchTerm(term)}
            handleBookType={type => this.updateBookType(type)}
            handlePrintType={type => this.updatePrintType(type)}
          />
          <FilterableList 
            books={this.state.books}
            searchTerm={this.state.searchTerm}
            bookType={this.state.bookType}
            printType={this.state.printType}
          />
        </div>
      );
  }
}

export default App;
