import React, {Component} from 'react';
import ListItem from './ListItem/ListItem';
import './FilterableList.css';

class FilterableList extends Component {

    

    render() {
        const {searchTerm, bookType, printType} = this.props;
        const books = this.props.books
            .filter(book => book.volumeInfo.title.includes(searchTerm) && 
                (printType === "all" || book.volumeInfo.printType === printType.toUpperCase())
                && (bookType === 'ebooks' || 
                ((bookType === 'free-ebooks') && (book.saleInfo.saleability === "FREE"))
                || ((bookType === 'paid-ebooks') && (book.saleInfo.saleability !== "FREE"))))
            .map((book, i) => <ListItem key={i} {...book}/>);
        //console.log(books.length + " books")
        //console.log(this.props.books[0].volumeInfo.title.includes(searchTerm));
        return (
            <div className="FilterableList">
                {books}
            </div>
        );
    }
}

FilterableList.defaultProps = {
    books: []
};

export default FilterableList;