import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        
        const title = this.props.volumeInfo.title;
        const subtitle = this.props.volumeInfo.subtitle ? ": " + this.props.volumeInfo.subtitle : '';
        const bookTitle = title + subtitle;
        const bookDescription = this.props.volumeInfo.description;
        const bookImage = this.props.volumeInfo.imageLinks.smallThumbnail;
        const bookPrice = this.props.saleInfo.retailPrice.amount;  

        const bookAuthors = this.props.volumeInfo.authors.join(" ");
        return (
            <div className="ListItem">
                <h2>{bookTitle}</h2>
                
                <div className="image-container">
                    <img src={bookImage} alt="picture of book"/>
                </div>
                <div className="book-details">
                    <p>Author: {bookAuthors}</p>
                    <p>Price: ${bookPrice}</p>
                    <p>{bookDescription}</p>
                </div>
            </div>
        );
    }
}

export default ListItem;