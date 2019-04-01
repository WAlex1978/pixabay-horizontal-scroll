import React, { Component } from 'react';
import Search from './Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: '',
        images: [],
    }

    async componentDidMount () {
        this.setState({images: await Search(this.state.value)});
        this.props.return(this.state.value, this.state.images);
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
            <div className='header'>
                <form onSubmit={this.handleSubmit}>
                    <Paper className='paper' elevation={1}>
                        <SearchIcon className='icon' />
                        <InputBase className='input' placeholder="Image Search" value={this.state.value} onChange={this.handleChange} />
                    </Paper>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;