import React from 'react';
import db from './db';

export default class AddJournalEntry extends React.Component {
    state = { entry: '' };

    onEntryChange = (e) => {
        this.setState({ entry: e.target.value });
    }

    addNewEntry = (e) => {
        e.preventDefault();
        db.collection('journalEntries').add({
            name: this.state.entry,
            createdAt: new Date()
        }).then(() => {
            this.setState({ entry: '' });
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewEntry}>
                    <textarea
                        value={this.state.entry}
                        onChange={this.onEntryChange}
                    />
                    <button type="submit">Add New Entry</button>
                </form>
            </div>
        )
    }
}
