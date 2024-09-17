import React from 'react';
import CategoryItem from './CategoryItem';
import { FaTools, FaCoffee, FaAppleAlt, FaCar, FaHome, FaShoppingCart } from 'react-icons/fa';
import styles from "./CategoryList.module.scss";

const categories = [
    { id: 1, name: 'Shifting', icon: <FaTools /> },
    { id: 2, name: 'Repair', icon: <FaCoffee /> },
    { id: 3, name: 'Plumbing', icon: <FaAppleAlt /> },
    { id: 4, name: 'Cleaning', icon: <FaCar /> },
    { id: 5, name: 'Painting', icon: <FaHome /> },
    { id: 6, name: 'Electric', icon: <FaShoppingCart /> }
];


const CategoryList = () => {
    return (
        <div className={styles.categoryList}>
            {categories.map(category => (
                <CategoryItem
                    key={category.id}
                    name={category.name}
                    icon={category.icon}
                />
            ))}
        </div>
    );
};

export default CategoryList;
