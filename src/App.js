import React from 'react';
import Airtable from 'airtable';

console.log(process.env);
console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

function App() {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
    process.env.REACT_APP_AIRTABLE_API_BASE
  );

  const sayHello = () => {
    console.log('asjdfklgajwepofkp');
  };

  const addPaws = () => {
    console.log('AYO');
    base('Paws').create({
      fields: {
        UID: '1',
        Name: 'ace',
        Reason: 'good',
        Value: 'Mission First'
      },
      function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getID());
      }
    });
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
        <input type="radio" id="missionfirst" name="Value" value="Mission First" />
        <label htmlFor="missionfirst">Mission First</label> <br />
        <input type="radio" id="perpetualgrowth" name="Value" value="Perpetual Growth" />
        <label htmlFor="perpetualgrowth">Perpetual Growth</label> <br />
        <input type="radio" id="cherisheachother" name="Value" value="Cherish Each Other" />
        <label htmlFor="cherisheachother">Cherish Each Other</label> <br />
        <input type="radio" id="alwaysinnovate" name="Value" value="Always Innovate" />
        <label htmlFor="alwaysinnovate">Always Innovate</label> <br />
        <input type="radio" id="behumble" name="Value" value="Be Humble" />
        <label htmlFor="behumble">Be Humble</label> <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
