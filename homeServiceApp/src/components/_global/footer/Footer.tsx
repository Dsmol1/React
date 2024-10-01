import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={`${styles.footer} tac`}>
            <div className={styles.footerCopyright}>Copyright @2024</div>
        </footer>
    );
}
