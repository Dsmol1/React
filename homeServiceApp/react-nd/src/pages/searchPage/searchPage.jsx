import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryList, { categories } from '../../components/category/CategoryList';

import styles from "./SearchPage.module.scss";

const SearchPage = () => {
    const { categoryName } = useParams();

    const category = categories.find(cat => cat.name === categoryName);

    if (!category) {
        return <p>No category found with the name "{categoryName}".</p>;
    }

    return (
        <div className={styles.searchPage}>
            <h1 className='tac'>Search Results for {categoryName}</h1>
            <br />
            <div className='flex-wrapper'>
                <div className={styles.searchPageCategories}>
                    <CategoryList categories={categories} />
                </div>
                <div className={styles.searchPageCategoriesItems}>
                    {category.items.length > 0 ? (
                        category.items.map(item => (
                            <div key={item.id} className="category-card">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <button>Book now</button>
                            </div>
                        ))
                    ) : (
                        <h2>No items found for this category.</h2>
                    )}
                </div>
            </div>
        </div >
    );
};

export default SearchPage;
