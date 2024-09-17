import React from 'react';
import styles from './CategoryList.module.scss';

const CategoryItem = ({ name, icon }) => {
    return (
        <div className={styles.categoryItem}>
            <div className={styles.categoryItemIcon}>
                {icon}
            </div>
            <h3 className={styles.categoryItemName}>{name}</h3>
        </div>
    );
};

export default CategoryItem;
