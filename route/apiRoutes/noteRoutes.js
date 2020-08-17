const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then(notes => res.json(notes))
        .cath(err => res.status(500).json(err))
});

module.exports = router;