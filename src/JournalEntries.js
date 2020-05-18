import React from 'react';
import JournalEntry from './JournalEntry';
import db from './db';

export default class JournalEntries extends React.Component {
    state = {
        journalEntries: []
    }

    componentDidMount() {
        this.unsubscribe = db
            .collection('journalEntries')
            .orderBy('createdAt', 'asc')
            .onSnapshot(snapshot => {
                this.setState({ journalEntries: snapshot.docs });
            });
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        const listItems = this.state.journalEntries
            .map(entry => <JournalEntry key={entry.id} entry={entry} />);

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}
