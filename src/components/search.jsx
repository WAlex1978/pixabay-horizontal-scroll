import React, { Component } from 'react';
import Gallery from './gallery';
import Axios from 'axios';

class Search extends Component {
    state = {
        value: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '12027914-00b10473d10ee790f2812000c',
        images: [],
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        Axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.value}&image_type=photo&per_page=5`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err))

        this.setState({value: ''});
        console.log("asdf")
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                </form>
                {this.state.images.length > 0 ? (<Gallery images={this.state.images} />): null}
            </div>
        );
    }
}
 
export default Search;