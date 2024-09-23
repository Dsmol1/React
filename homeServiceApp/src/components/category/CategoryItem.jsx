import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useLocalStorage } from 'usehooks-ts';
import styles from './CategoryList.module.scss';

const CategoryItem = ({ name, icon }) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const isFavorited = favorites.includes(name);

    const toggleFavorite = () => {
        if (isFavorited) {
            setFavorites(favorites.filter(fav => fav !== name));
        } else {
            setFavorites([...favorites, name]);
        }
    };

    return (
        <Link to={`/search/${name}`} className={styles.categoryItem}>
            <div
                className={`${styles.categoryItemFav} ${isFavorited ? styles.categoryItemFavActive : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite();
                }}
            >
                <FaHeart />
            </div>
            <div className={styles.categoryItemIcon}>
                {icon}
            </div>
            <h3 className={styles.categoryItemName}>{name}</h3>
        </Link>
    );
};

export default CategoryItem;
