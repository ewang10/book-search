import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    render() {

        const title = this.props.volumeInfo.title;
        const subtitle = this.props.volumeInfo.subtitle ? ": " + this.props.volumeInfo.subtitle : '';
        const bookTitle = title + subtitle;
        const bookDescription = this.props.volumeInfo.description;
        const bookImage = this.props.volumeInfo.imageLinks.thumbnail;
        const bookPrice = this.props.saleInfo.retailPrice ?
            <p>Price: ${this.props.saleInfo.retailPrice.amount}</p>
            : <p>FREE</p>;
        const bookAuthors = this.props.volumeInfo.authors ?
            this.props.volumeInfo.authors.join(" ") : '';
        //console.log(this.props.saleInfo);
        //console.log(this.props);
        return (
            <div className="ListItem">
                <h2>{bookTitle}</h2>
                <div className="content">
                    <div className="image-container">
                        <img src={bookImage} alt="picture of book" />
                    </div>
                    <div className="book-details">
                        <p>Author: {bookAuthors}</p>
                        {bookPrice}
                        <p>{bookDescription}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;