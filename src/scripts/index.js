const dbModels = require('../../database/models');

const eventData = require('../../input/event.json');

const {
  Actions,
  Events,
  // Fighter,
} = dbModels;

const {
  // eventInProgress,
  actionsCount,
  number,
  date,
  actions,
} = eventData;

const insertActionInDb = async (action, cardType, eventId) => {
  const mainEvent = cardType === 'prelims' ? false : true;
  const {
    fighterA,
    fighterB,
    rounds,
    mainFight = false,
  } = action;
  try {
    const data = await Actions.create({
      fighterA,
      fighterB,
      rounds,
      mainEvent,
      mainFight,
      eventId,
    });
    console.log(data.id);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

(async () => {
  try {
    const eventData = await Events.create({
      number,
      actionsCount,
      date,
    });

    const eventId = eventData.id || 1;

    for(const cardType in actions) {
      for(const action of actions[cardType]) {
        await insertActionInDb(action, cardType, eventId);
      }
    }

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
