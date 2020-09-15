const db = require('../database/models');

const {
  Events,
  Actions,  
} = db;

// Events.create({
//   number: 111,
//   actionsCount: 12,
//   date: '21-02-2020',
// })
// .then(() => {
//   console.log('Event was created');
//   process.exit(0);
// })
// .catch(err => console.log(err));

Actions.create({
  fighterA: '',
  fighterB: 'dsa',
  rounds: 5,
  mainEvent: false,
  eventId: 1,
})
.then(() => {
  console.log('Event was created');
  process.exit(0);
})
.catch(err => {
  console.log(err);
  process.exit(1);
});