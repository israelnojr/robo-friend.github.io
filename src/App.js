import React, { Component } from 'react';
import { Robots } from './Robots';
import CardList from './CardList';
import SearchBox from './SearchBox';


class App extends Component {
    constructor(){
        super()
        this.state = {
            Robots: Robots,
            searchField: ''
        }
    }

        onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.Robots.filter(Robots =>{
            return Robots.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
        return (
            <div className='tc'>
                <h1>MY ROBO-FRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Robots={this.state.Robots}/>
            </div>
    );
    }
};

export default App;