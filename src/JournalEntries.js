import React from 'react';
import firebase from 'firebase';
import JournalEntry from './JournalEntry';
import db from './db';

export default class JournalEntries extends React.Component {
    state = {
        journalEntries: []
    }

    componentDidMount() {
        const uid = firebase.auth().currentUser.uid;

        this.unsubscribe = db
            .collection('users')
            .doc(uid)
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
