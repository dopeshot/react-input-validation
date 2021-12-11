import React from 'react';
import { FormWithFormik } from './components/FormWithFormik';
import { FormWithFormikYup } from './components/FormWithFormikYup';
import { FormWithOutLibs } from './components/FormWithOutLibs';

function App() {
  return (<>
    <div style={{ backgroundColor: "rgb(165 243 252)" }}>
      <h3>FormWithFormikYup</h3>
      <FormWithFormikYup />
    </div>
    <div style={{ backgroundColor: "rgb(167 243 208)" }}>
      <h3>FormWithFormik</h3>
      <FormWithFormik />
    </div>
    <div style={{ backgroundColor: "rgb(245 208 254)" }}>
      <h3>FormWithOutLibs</h3>
      <FormWithOutLibs />
    </div>
  </>
  );
}

export default App;
