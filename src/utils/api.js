import Airtable from 'airtable';

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

export const getPaws = () => {
  return new Promise((resolve, reject) => {
    const pawsList = [];

    base('Paws')
      .select({
        filterByFormula: '{Read} = 0',
        view: 'Grid view'
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record) {
            pawsList.push({
              name: record.get('Name'),
              purpose: record.get('Reason'),
              value: record.get('Value')
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(pawsList);
          }
        }
      );
    // console.log('airtable', pawsList[0]);
    // return pawsList;
  });
};

export const updatePaws = () => {
  base('Paws')
    .select({
      filterByFormula: '{Read} = 0',
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function (record) {
          base('Paws').update(record.id, { Read: true });
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
