import React, { Fragment } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import "./styles/app.css";


render(
        <Fragment>
            <App/>
        </Fragment>,
 document.getElementById('app'));