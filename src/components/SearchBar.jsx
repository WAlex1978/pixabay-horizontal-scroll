import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.props.search(this.state.value);
        this.setState({value: ''});
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}
 
export default SearchBar;