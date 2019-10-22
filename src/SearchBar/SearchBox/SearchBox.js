import React, {Component} from 'react';

class SearchBox extends Component {

    onSubmitForm(e) {
        e.preventDefault();
        this.props.handleSearch(e.target.search.value);
    }

    render() {
        return (
            <div className="SearchBox">
                <form onSubmit={this.onSubmitForm}>
                    <label htmlFor="search">Search:</label>
                    <input
                        id="search"
                        name="search"
                        type="text"
                    />
                    <button type="button">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;