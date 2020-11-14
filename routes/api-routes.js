const Workout = require('../models/workout.js');

module.exports = function(app) {

app.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        if(res.status !== 200) {
            res.json(err)
        }
      });
});

app.put('/api/workouts/:id', (req, res) => {
    console.log(req.params.id)
    Workout.updateOne({
        _id: req.params.id
    },
    {
        $push: {exercises: req.body}
    })
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        if(res.status !== 200) {
            res.json(err)
        }
      });
});

app.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        if(res.status !== 200) {
            res.json(err)
        }
      });
});

app.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        if(res.status !== 200) {
            res.json(err)
        }
      });
})

}