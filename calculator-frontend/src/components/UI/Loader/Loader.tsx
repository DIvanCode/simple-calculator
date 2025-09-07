import styles from './Loader.module.scss';

const Loader = ({ color = '#ffffff' }) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner} style={{ borderColor: color }}></div>
    </div>
  );
};

export default Loader;
