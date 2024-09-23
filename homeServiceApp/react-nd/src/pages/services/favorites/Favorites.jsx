import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import CategoryList from '../../../components/category/CategoryList';
import { categories } from '../../../components/category/CategoryList';
import styles from "../Services.module.scss";



export default function Favorites() {
    const [favorites] = useLocalStorage('favorites', []);

    const favoriteCategories = categories.filter(category => favorites.includes(category.name));

    return (
        <section className={`${styles.services} tac`}>
            <h1>Favoritai</h1>
            {favoriteCategories.length === 0 ? (
                <p>Nera favoritu</p>
            ) : (
                <CategoryList categories={favoriteCategories} />
            )}
        </section>
    );
};