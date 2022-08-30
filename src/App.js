/* eslint-disable no-undef */
import React from 'react';
import Airtable from 'airtable';

console.log(process.env);
console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

var values = [
  'Mission First',
  'Perpetual Growth',
  'Cherish Each Other',
  'Always Innovate',
  'Be Humble',
  'No Value'
];

function App() {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
    process.env.REACT_APP_AIRTABLE_API_BASE
  );

  const sayHello = () => {
    console.log('asjdfklgajwepofkp');
  };

  const addPaws = () => {
    console.log(document.getElementById('value'));
    base('Paws').create(
      {
        Name: document.getElementById('name').value,
        Reason: document.getElementById('reason').value,
        Value: values[document.getElementById('value').value]
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPaws();
  };

  return (
    <div>
      <h1>hello react</h1>
      <button onClick={sayHello}>heyyyy</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" /> <br />
        <label htmlFor="reason">Reason</label> <br />
        <input type="text" id="reason" name="reason" /> <br />
        <label htmlFor="Value">Value</label> <br />
        <select name="value" id="value">
          <option value="0">Mission First</option>
          <option value="1">Perpetual Growth</option>
          <option value="2">Cherish Each Other</option>
          <option value="3">Always Innovate</option>
          <option value="4">Be Humble</option>
        </select>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
