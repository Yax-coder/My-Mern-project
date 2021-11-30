
import React, { Fragment } from 'react';
import spinner from './Spinner.gif';


/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
const Spinner = () => (
     <Fragment>
          <img
               src={spinner}
               style={{ width: '200px', margin: 'auto', display: 'block' }}
               alt='Loading...'
          />
     </Fragment>
);

export default Spinner;