import styles from "../css/reusableCard.module.scss";

const ReusableCard = ({children}) => {
    return <div className={styles.reuseCard}>
        {children}
        </div>;
};

export default ReusableCard;