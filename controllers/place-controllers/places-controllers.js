const handleNotFoundError = require('../errors/not-found');
const { v4: uuidv4 } = require('uuid');


const DUMMY_PLACES = [
    {
       id: 'p1',
       title: 'Statue of Unity',
       description: 'Tallest Statue',
       imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/65/2a/08/world-s-tallest-statue.jpg?w=1200&h=-1&s=1',
        address: 'Sardar Sarovar Dam, Statue of Unity Rd, Kevadia, Gujarat 393155',
        location: {lat: 21.8380234 , lng: 73.7164979},
        creator: 'u1'
    },

    {
       id: 'p2',
       title: 'Vivekananda Rock Memorial',
       description: 'Rock Statue of Swami Vivekananda',
       imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipORvpqm0sdJZYfvmVzJYKMDhimwUM7snItkH96y=w408-h302-k-no',
        address: 'Kanyakumari, Tamil Nadu',
        location: {lat: 8.0780669 , lng: 77.5528242},
        creator: 'u2'
    }
];


const getPlaceByPlaceId = (req, res) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p =>  p.id === placeId)

    if (!place) {
        return handleNotFoundError(res, "Place does not exist");
    }

    // res.json({place: place});
    res.json({place}); // if key and value names are same so we can use {place} on behalf of {place: place}
}

const getPlaceByCreatorId = (req, res) => {
    const creatorId = req.params.cid;
    const creator = DUMMY_PLACES.filter(c => c.creator === creatorId);

    if(!creator || creator.length === 0){
        return handleNotFoundError(res, "Creator does not exist");
    }
    res.json({creator});
}

const createPlace = (req,res) => {
    const {title, description, address, lat, lng, creator} = req.body;
    const createdPlace = {
        id: uuidv4(),
        title,
        description,
        address,
        "location": {
            lat,
            lng
        },
        creator
    };
    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place: createdPlace});
};

exports.getPlaceByPlaceId = getPlaceByPlaceId;
exports.getPlaceByCreatorId = getPlaceByCreatorId;
exports.createPlace = createPlace;