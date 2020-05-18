import React from 'react';
import JournalEntries from './JournalEntries';
import AddJournalEntry from './AddJournalEntry';

export default class Journal extends React.Component {
    render() {
        return (
            <div>
                <h1>Journal</h1>
                <AddJournalEntry />
                <JournalEntries />
            </div>
        )
    }
}