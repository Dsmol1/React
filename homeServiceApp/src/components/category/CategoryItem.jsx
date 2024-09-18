import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryList.module.scss';

const CategoryItem = ({ name, icon }) => {
    return (
        <Link to={`/search/${name}`} className={styles.categoryItem}>
            <div className={styles.categoryItemIcon}>
                {icon}
            </div>
            <h3 className={styles.categoryItemName}>{name}</h3>
        </Link>
    );
};

export default CategoryItem;
