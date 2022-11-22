import styles from "../css/reusableCard.module.scss";

const ReusableCard = ({children, showInfo, ev}) => {

    const show = (ev) => {
        showInfo(ev);
    }

    return <div onClick={(e) => {show(ev)}} className={styles.reuseCard}>
        {children}
        </div>;
};

export default ReusableCard;