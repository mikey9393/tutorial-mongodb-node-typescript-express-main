import { createRoot } from 'react-dom/client'; // will use react-dom/server *for the server-side.

//Need to split config files: one for server, and one for client.
import axios from 'axios';


import { API_SERVER_URL } from './public-config';
import App from './components/App';

const container = document.querySelector('#app');
const root = createRoot(container);
// root.render(<App/>);

axios.get(`${API_SERVER_URL}/contests`)
  .then(response => {
        console.log(response.data);
      root.render(<App initialData={{contests: response.data.contests}} />)
    });

// delay rendering of the app until I have the data
    // Move root.render() to the promise handler. Because were done with the network call and we have the data. 
    // Next make app component aware of the data.  