const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', function(req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// need to fix...
// router.delete('/notes', function(req, res) {
//     store
//         .removeNote(req.body)
//         .then(notes => res.json(notes))
//         // .then(() => res.json({ ok: true }))
//         .catch(err => res.status(500).json(err));
// });

module.exports = router;