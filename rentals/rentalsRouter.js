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
    let image = 'https://petapixel.com/assets/uploads/2020/01/eosr_feature-800x421.jpg';

    if(req.body.image) {
        image = req.body.image;
    }

    if(!userId || !title || !description || !category_id || !price_hour || !price_day || !location) {
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
    console.log(id, renter_id);
})



module.exports = router;