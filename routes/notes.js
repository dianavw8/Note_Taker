const notes = require('express').Router();
//const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  //readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});



// DELETE Route for a specific tip
notes.delete('/:notes_id', (req, res) => {
  // const tipId = req.params.tip_id;
  // readFromFile('./db/tips.json')
  //   .then((data) => JSON.parse(data))
  //   .then((json) => {
  //     // Make a new array of all tips except the one with the ID provided in the URL
  //     const result = json.filter((tip) => tip.tip_id !== tipId);

  //     // Save that array to the filesystem
  //     writeToFile('./db/tips.json', result);

  //     // Respond to the DELETE request
  //     res.json(`Item ${tipId} has been deleted 🗑️`);
  //   });
});

// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.log(req.body);

  // const { username, topic, tip } = req.body;

  // if (req.body) {
  //   const newTip = {
  //     username,
  //     tip,
  //     topic,
  //     tip_id: uuidv4(),
  //   };

  //   readAndAppend(newTip, './db/tips.json');
  //   res.json(`Tip added successfully 🚀`);
  // } else {
  //   res.error('Error in adding tip');
  // }
});

module.exports = notes;
