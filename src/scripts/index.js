const dbModels = require('../../database/models');

const Logger = require('../Logger');
const eventData = require('../../input/event.json');
const csvParser = require('./helpers');

// will get the filename from config file in the future; the filename will be connected to the event through event number or event date
const filePath = `../../input/fighters_stats.csv`;

const {
  Actions,
  Events,
  Fighters,
} = dbModels;

const {
  // eventInProgress,
  actionsCount,
  number,
  date,
  actions,
} = eventData;

/*
  CSV-stats columns structure
    0 - name
    1 - nick
    3 - age
    4 - height
    5 - weight
    6 - wins
    7 - losses
*/

const parseLine = (line) => {
  const rawData = line.split(",");
  if(rawData.includes('Name')) {
    return;
  }
  
  return {
    name: rawData[0],
    nickName: rawData[1],
    age: +rawData[2],
    height: +rawData[3],
    weight: +rawData[4],
    wins: +rawData[5],
    losses: +rawData[6],
  };
}

const insertActionInDb = async (action, cardType, eventId) => {
  const mainEvent = cardType === 'prelims' ? false : true;
  const {
    fighterA,
    fighterB,
    rounds,
    mainFight = false,
  } = action;

  try {
    await Actions.create({
      fighterA,
      fighterB,
      rounds,
      mainEvent,
      mainFight,
      eventId,
    });
  } catch (error) {
    Logger.log(error);
    process.exit(1);
  }
}

(async () => {
  try {
    Logger.log('Parsing csv and updating stats table...');
    const lines = csvParser(filePath);
    const promises = [];

    for await(const line of lines) {
      const fighterData = parseLine(line);
      if(fighterData) {
        promises.push(Fighters.create(fighterData));
      }
    }
    Promise.all(promises);

    Logger.log('Creating event...')
    const eventData = await Events.create({
      number,
      actionsCount,
      date,
    });

    const eventId = eventData.id || 1;

    Logger.log('Updating actions table...');
    for(const cardType in actions) {
      for(const action of actions[cardType]) {
        await insertActionInDb(action, cardType, eventId);
      }
    }

    Logger.log('Done');
    process.exit(0);
  } catch (error) {
    Logger.log(error);
    process.exit(1);
  }
})();
