const Counter = require("./../models/counter.js");

const counterController = {
  get: (req, res) => {
    console.log("Getting counter...");
    Counter.find({}).exec((err, counter) => {
      console.log(`counter: ${counter}`);
      if (counter) res.send(counter[0].count);
      else {
        Counter.create({
          count: 0
        });
      }
    });
  },
  
  add: (req, res) => {}
};

module.exports = counterController;
