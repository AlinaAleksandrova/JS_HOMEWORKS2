import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div>
                    <h1>Manage Contacts</h1>
                    <ContactForm />
                    <ContactList />
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
