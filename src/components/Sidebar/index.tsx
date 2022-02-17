import Sidebar from './SidebarLarge';
import SidebarMini from './SidebarMini/SidebarMini';

type SidebarProps = {
  onClose(): void;
  isOpened: boolean;
  persistent: boolean;
};

const index = ({ onClose, isOpened, persistent }: SidebarProps) => (
  <>
    <Sidebar onClose={onClose} isOpened={isOpened} persistent={persistent} />
    {persistent && <SidebarMini />}
  </>
);

export default index;

/*
    persistent가 붙어 있으면 
    min도 떼버리기
*/
