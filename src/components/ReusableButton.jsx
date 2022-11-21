import styles from "../css/reusableButton.module.scss";

const ReusableButton = ({children}) => {
    return <button className={styles.reusebtn}>{children}</button>;
};

export default ReusableButton;