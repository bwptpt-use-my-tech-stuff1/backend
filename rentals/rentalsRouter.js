const router = require('express').Router();
const Rentals = require('./rentalsModel');

// /api/protected/rentals
router.get('/', (req, res) => {
    Rentals.getRentals()
        .then(rentals => {
            res.status(200).json(rentals);
        })
        .catch(err => res.status(500).json({message: `A server error occurred getting rentals: ${err}`}));
})

router.post('/', (req, res) => {
    let userId = req.decoded.subject;
    let {title, description, category_id, price_hour, price_day, location} = req.body;

    if(!userId || !title || !description || !category_id || !price_hour || !price_day || !location) {
        res.status(400).json({message: 'Please make sure all required fields are submitted.'})
    } else {
        const newRental = {
            user_id: userId,
            title: title,
            description: description,
            category_id: category_id,
            checked_out: false,
            image: 'placeholder',
            price_hour: price_hour,
            price_day: price_day,
            location: location
        }

        Rentals.addRental(newRental)
            .then(rental => {
                [rental] = rental;
                res.status(201).json(rental);
            })
            .catch(err => res.status(500).json({message: `A server error occurred adding your rental: ${err}`}));
    }
})

module.exports = router;