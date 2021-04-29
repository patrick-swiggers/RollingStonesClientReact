import React, { Component } from 'react';
import SingleSong from './SingleSong';
import AddSongs from './AddSongs';

export default class Songs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/songs')
            .then(response => response.json())
            .then(data => this.setState({ songs: data }))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <table class="striped">
                        <thead>
                            <tr>
                                <th>Single Name</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.songs.map((item) => (
                                <SingleSong key={item.id} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <AddSongs />
                </div>
            </div>
        )
    }
}
