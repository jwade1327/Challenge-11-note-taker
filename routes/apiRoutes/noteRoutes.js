const router = require('express').Router();
const store = require('../../db/store');

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json(err))
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then(notes => res.json(notes))
        .cath(err => res.status(400).json(err))
});

router.delete('/notes/:id', function (req, res) {
    store
        .deleteNotes(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(400).json(err))
});

module.exports = router;