import React from 'react';
import db from './db';

export default class JournalEntry extends React.Component {
    onEditClick = (e) => {
        const { entry } = this.props;
        const { name } = entry.data();
        const updatedEntry = prompt('Edit entry', name);
        
        if (updatedEntry) {
            db.collection('journalEntries')
                .doc(entry.id)
                .update({ name: updatedEntry });
        }
    }

    onDeleteClick = (e) => {
        const { entry } = this.props;
        const shouldDelete = window.confirm('Are you sure?');

        if (shouldDelete) {
            db.collection('journalEntries')
                .doc(entry.id)
                .delete();
        }
    }

    render() {
        const { entry } = this.props;

        return (
            <li>
                <button onClick={this.onEditClick}>Edit</button>
                <button onClick={this.onDeleteClick}>Delete</button>
                <span>{entry.data().name}</span>
            </li>
        )
    }
}
