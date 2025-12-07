import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
  process.env.REACT_APP_AIRTABLE_API_BASE
);

export const submitPaws = (pawsList) => {
  pawsList.forEach((paw) => {
    // console.log(paw);
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

export const getMembers = () => {
  return new Promise((resolve, reject) => {
    const memberList = [];

    base('Actives')
      .select({
        view: 'Grid view'
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record) {
            memberList.push({
              name: record.get('Name'),
              team: record.get('Team')
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(memberList);
          }
        }
      );
  });
}

export const getTeams = () => {
  return new Promise((resolve, reject) => {
    const teams = [];

    base('Teams')
      .select({
        view: 'Grid view'
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record) {
            teams.push(record.get('Name'));
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(teams);
          }
        }
      );
  });
}

export const getLeaderboardEntries = (() => {
  return new Promise((resolve, reject) => {
    const entries = [];

    base('Leaderboard')
      .select({
        view: 'Grid view'
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function (record) {
            entries.push({
              name: record.get('Member'),
              total: record.get('Total Paws Count'),
              mf: record.get('Mission First Count'),
              pg: record.get('Perpetual Growth Count'),
              ce: record.get('Cherish Each Other Count'),
              ai: record.get('Always Innovate Count'),
              bh: record.get('Be Humble Count'),
              nv: record.get('No Value Count')
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(entries);
          }
        }
      );
  });
})