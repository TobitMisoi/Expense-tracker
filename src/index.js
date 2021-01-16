import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId="4eee4bb2-7740-4419-bca6-1459765708b7" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'));

