import MenuItem from '@components/SidebarMini/MenuItem';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faArchive,
  faBox,
  faCompass,
  faDownload,
  faHome,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';

const Menu = () => (
  <menu>
    <MenuItem icon={faHome} text="홈" />
    <MenuItem icon={faCompass} text="탐색" />
    <MenuItem icon={faArchive} text="구독" />
    <MenuItem icon={faYoutube} text="Originals" />
    <MenuItem icon={faMusic} text="Youtube Music" />
    <MenuItem icon={faBox} text="보관함" />
    <MenuItem icon={faDownload} text="오프라인 저장 동영상" />
  </menu>
);

export default Menu;
