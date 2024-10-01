import SearchBar from '../../components/search/Search';
import CategoryList, { categories } from '../../components/category/CategoryList';
import styles from "./Search.module.scss";


export default function Home() {
    return (
        <section className={`${styles.home} tac`}>
            <h1>Find Home Service/Repair<br /> Near You</h1>
            <br />
            <h2>Explore Best Home Service & Repair near you</h2>
            <br />
            <SearchBar />
            <CategoryList categories={categories} />
        </section>
    );
};