import React from 'react';
import Directory from '../../components/Directory/Directory';

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Climbing Shoes',
            imageUrl: 'Climbing Shoes Image',
        },
        {
            id: 2,
            title: 'Chalk',
            imageUrl: 'Chalk Image',
        },
        {
            id: 3,
            title: 'Apparel',
            imageUrl: 'Climbing Apparel',
        },
        {
            id: 4,
            title: 'Harnesses',
            imageUrl: 'Climbing Harnesses Image',
        },
        {
            id: 5,
            title: 'Accessories',
            imageUrl: 'Climbing Accessories Image',
        },
    ];

    return <Directory categories={categories} />;
};

export default Home;
