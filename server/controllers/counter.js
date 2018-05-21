const Counter = require("./../models/counter.js");

const counterController = {
  get: (req, res) => {
    // console.log("Getting counter...");
    Counter.find({}).exec((err, counter) => {
    //   console.log(`Counter: ${counter}`);
      if (counter) res.json(counter[0].count);
      else {
        Counter.create({
          count: 0
        });
      }
    });
  },

  add: (req, res) => {
    // updatedCounter = 0;
    // console.log("attempting to add to counter");
    // Counter.find({}).exec((err, counter) => {
    //   updatedCount = counter[0].count + 1;
    //   console.log(`Updated count: ${updatedCount}`);
    //   Counter.update(counter[0], {$inc: {"counter[0].data": counter[0].data}})
    //   res.json(counter[0].data);
    // });
    // Counter.update({ _id: '5b0239c4deff9389be518772'}, {$inc: {count : 1}});
    Counter.find({}, (err, counter) => {
        if (err) return err;
        counter[0].count += 1;
        counter[0].save((error) => {
          if (error) return (error);
        });
        res.status(200).send(true);
      });
  }
};

module.exports = counterController;
