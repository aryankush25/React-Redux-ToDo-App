import React from "react";
// import ReactDOM from "react-dom";

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'

import "./index.css";
import App from "./components/App";

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

// ReactDOM.render(<App />, document.getElementById("root"));
