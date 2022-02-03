import Menu from '@components/Sidebar/Menu';
import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <Menu />
  </aside>
);

export default Sidebar;
