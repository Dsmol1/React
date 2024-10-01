import styles from "./Services.module.scss";
import CategoryList, { categories } from '../../components/category/CategoryList';

export default function Services() {
    return (
        <section className={`${styles.services} tac`}>
            <h1>Services</h1>
            <CategoryList categories={categories} />
        </section>
    );
};