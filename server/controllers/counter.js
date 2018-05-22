const Counter = require("./../models/counter.js");

const counterController = {
  get: (req, res) => {
    // console.log("Getting counter...");
    Counter.find({}).exec((err, counter) => {
      // console.log(`Counter: ${counter}`);
      if (counter) res.json(counter[0].count);
      else {
        Counter.create({
          count: 0
        });
      }
    });
  },

  add: (req, res) => {
    // console.log("attempting to add to counter");
    // Counter.update({ _id: '5b0239c4deff9389be518772'}, {$inc: {count : 1}});
    Counter.find({}, (err, counter) => {
      if (err) return err;
      counter[0].count += 1;
      counter[0].save();
      res.send(true);
    });
  }
};

module.exports = counterController;
