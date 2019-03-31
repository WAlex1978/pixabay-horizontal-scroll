import React, { Component } from 'react';
import Gallery from './gallery';
import Axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '12027914-00b10473d10ee790f2812000c',
        images: this.props,
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    async handleSubmit (event) {
        event.preventDefault();

        var res = await Axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.value}&image_type=photo&per_page=10`)
        this.setState({images: res.data.hits})
        this.setState({value: ''});

        this.props.search(this.state.images);
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
 
export default Search;