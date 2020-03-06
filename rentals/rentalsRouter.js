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
    let {title, description, category_id, price_per_day, location} = req.body;
    let image = 'https://petapixel.com/assets/uploads/2020/01/eosr_feature-800x421.jpg';

    if(req.body.image) {
        image = req.body.image;
    }

    if(!userId || !title || !description || !category_id || !price_per_day || !location) {
        res.status(400).json({message: 'Please make sure all required fields are submitted.'})
    } else {
        const newRental = {
            user_id: userId,
            title: title,
            description: description,
            category_id: category_id,
            checked_out: false,
            image: image,
            price_hour: price_hour,
            price_per_day: price_per_day,
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

// get categories
router.get('/categories', (req, res) => {
    Rentals.getCategories()
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(err => res.status(500).json({message: 'An error occured retrieving categories. Try again later!'}))
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const renter_id = req.decoded.subject;
    
    Rentals.getRentalBy({id})
        .then(rental => {
            [rental] = rental;
            rental ? res.status(200).json(rental) : res.status(404).json({message: `No rental with id ${id} was found.`})
        })
        .catch(err => res.status(500).json({message: `A server error occured fetching rental with id ${id}.`}))
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Rentals.updateRental(id, changes)
        .then(updatedRental => {
            [updatedRental] = updatedRental;
            res.status(200).json(updatedRental);
        })
        .catch(err => res.status(500).json({message: `A server error occured updating the rental: ${err}`}));
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Rentals.deleteRental(id)
        .then(numDel => {
            numDel === 1 ? res.status(200).json({message: 'Rental deleted successfully'}) : res.status(400).json({message: 'Rental does not exist'});
        })
        .catch(err => res.status(500).json({message: `A server error occured deleting rental: ${err}`}))
})

module.exports = router;