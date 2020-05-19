import React from 'react';
import JournalEntries from './JournalEntries';
import AddJournalEntry from './AddJournalEntry';
import firebase from 'firebase';

export default class Journal extends React.Component {
    state = {
        isSignedIn: false
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            user => {
                this.setState({ isSignedIn: !!user });

                if (!user) {
                    this.props.history.push('/');
                }
            }
        );
        // user = { displayName: 'Brian' }
        // !user => false
        // !!user => true

        // user = null
        // !user => true
        // !!user => false
    }

    componentWillUnmount() {
        if (this.unregisterAuthObserver) {
            this.unregisterAuthObserver();
        }
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    render() {
        console.log(firebase.auth().currentUser);
        const { isSignedIn } = this.state;

        return (
            <div>
                <h1>Journal</h1>
                {isSignedIn && <button onClick={this.signOut}>Sign out</button>}
                <hr />
                {!isSignedIn && <p>Signing in...</p>}
                {isSignedIn && <AddJournalEntry />}
                {isSignedIn && <JournalEntries />}
            </div>
        )
    }
}