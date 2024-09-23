import React from 'react';
import CategoryItem from './CategoryItem';
import { FaTools, FaCoffee, FaAppleAlt, FaCar, FaHome, FaShoppingCart } from 'react-icons/fa';
import styles from "./CategoryList.module.scss";

export const categories = [
    {
        id: 1,
        name: 'Shifting',
        icon: <FaTools />,
        items: [
            { id: 1, title: 'House Shifting', description: 'Professional shifting service.' },
            { id: 2, title: 'Office Shifting', description: 'Reliable office relocation.' }
        ]
    },
    {
        id: 2,
        name: 'Repair',
        icon: <FaCoffee />,
        items: [
            { id: 1, title: 'AC Repair', description: 'Expert AC repair services.' },
            { id: 2, title: 'Fridge Repair', description: 'Fast fridge repair services.' }
        ]
    },
    { id: 3, name: 'Plumbing', icon: <FaAppleAlt />, items: [] },
    { id: 4, name: 'Cleaning', icon: <FaCar />, items: [] },
    { id: 5, name: 'Painting', icon: <FaHome />, items: [] },
    { id: 6, name: 'Electric', icon: <FaShoppingCart />, items: [] }
];



const CategoryList = ({ categories = [] }) => {
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
