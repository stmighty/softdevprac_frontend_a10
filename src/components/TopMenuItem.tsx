import Link from "next/link";
import styles from './topmenu.module.css';

interface MenuProps {
    title: string;
    pageRef: string;
}

export default function TopMenuItem({title, pageRef}: MenuProps) {
    return (
        <Link className={styles.itemcontainer} href={pageRef}>
            {title}
        </Link>
    )
}