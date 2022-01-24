import Spacer from '@components/Sidebar/Spacer';
import Menu from '@components/SidebarMini/Menu';
import style from './sidebarMini.module.scss';

const SidebarMini = () => (
  <aside className={style.sidebarMini}>
    <Spacer height={56} />
    <Menu />
  </aside>
);

export default SidebarMini;
