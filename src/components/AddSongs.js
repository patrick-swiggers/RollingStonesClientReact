import React, { Component } from 'react';

export default class AddSongs extends Component {
    submitSong(event) {
        event.preventDefault();

        let contact = {
            single: this.refs.single.value,
            year: this.refs.year.value,
        }

        fetch("http://localhost:8080/api/songs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contact),
        })
            .then(response => response.json());

        window.location.reload();
    }


    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitSong.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" ref="single" type="text" className="validate" />
                            <label htmlFor="single">Single</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref="year" type="text" className="validate" />
                            <label htmlFor="year">Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row col s12">
                            <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}