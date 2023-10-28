import React from 'react';
import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
    const { title } = category;
    return (
        <div className="category-container">
            <div
                className="background-image-container"
                style={{ backgroundColor: 'black' }}
            />
            <div className="category-body-container">
                <h2 className="category-title">{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
