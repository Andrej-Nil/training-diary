import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';
import App from './App.jsx'
import Service from "./Service.js";
const service = new Service()
export const ServiceContext = createContext(service);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ServiceContext.Provider value={service}>
      <App />
    </ServiceContext.Provider>

  // </React.StrictMode>,
)
