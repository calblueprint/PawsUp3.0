import Airtable from 'airtable';

console.log(process.env);
console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
  process.env.REACT_APP_AIRTABLE_API_BASE
);

export const submitPaws = (pawsList) => {
  pawsList.forEach((paw) => {
    console.log(paw);
    base('Paws').create(
      {
        Name: paw.name,
        Reason: paw.purpose,
        Value: paw.value
      },
      function (err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  });
};
