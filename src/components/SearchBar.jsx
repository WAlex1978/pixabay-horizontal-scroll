import React, { Component } from 'react';
import Search from './Search';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: '',
        images: [],
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.setState({images: await Search(this.state.value)});
        this.props.return(this.state.value, this.state.images);
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