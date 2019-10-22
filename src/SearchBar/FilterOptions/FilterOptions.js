import React, {Component} from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {

    render() {
        return (
            <div className="FilterOptions">
                <form className="PrintType">
                    <label>Print Type:</label>
                    <select 
                        id="printType"
                        name="printType"
                        onChange={e => this.props.handlePrintType(e.target.value)}
                    >
                    <option value="all">All</option>
                    <option value="book">Books</option>
                    <option value="magazines">Magazines</option>
                    </select>
                </form>
                <form className="BookType">
                    <label>Book Type:</label>
                    <select 
                        id="bookType"
                        name="bookType"
                        onChange={e => this.props.handleBookType(e.target.value)}
                    >
                    <option value="ebooks">no filter</option>
                    <option value="free-ebooks">Free</option>
                    <option value="paid-ebooks">Paid</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default FilterOptions;