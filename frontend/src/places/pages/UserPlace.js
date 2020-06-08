import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'KLCC',
        description: 'One of the most famous sky scraper in the world',
        imageUrl: 'https://www.suriaklcc.com.my/wp-content/uploads/2017/06/klcc-outdoor.jpg',
        address: 'Kuala Lumpur, Federal Territory of Kuala Lumpur',
        location: {
            lat: 3.2204177,
            lng: 101.6691793
        },
        creator: 'u1'

    },
    {
        id: 'p1',
        title: 'KLCC',
        description: 'One of the most famous sky scraper in the world',
        imageUrl: 'https://www.suriaklcc.com.my/wp-content/uploads/2017/06/klcc-outdoor.jpg',
        address: 'Kuala Lumpur, Federal Territory of Kuala Lumpur',
        location: {
            lat: 3.2204177,
            lng: 101.6691793
        },
        creator: 'u2'

    }

]
const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES}/>
}

export default UserPlaces;