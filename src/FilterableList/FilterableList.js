import React, {Component} from 'react';
import ListItem from './ListItem/ListItem';

class FilterableList extends Component {

    

    render() {
        const books = this.props.books.map((book, i) => <ListItem key={i} {...book}/>);
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