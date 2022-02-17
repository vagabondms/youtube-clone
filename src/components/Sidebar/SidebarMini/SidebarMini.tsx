import Menu from '@components/Sidebar/SidebarMini/Menu';
import style from './SidebarMini.module.scss';

const SidebarMini = () => (
  <aside className={style.sidebarMini}>
    <Menu />
  </aside>
);

export default SidebarMini;
