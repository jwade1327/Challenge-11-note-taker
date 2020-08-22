const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then(notes => res.json(notes))
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then(notes => res.json(notes))
});

module.exports = router;