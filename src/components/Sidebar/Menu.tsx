import MenuItem from '@components/Sidebar/MenuItem';
import Title from '@components/Sidebar/Title';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faArchive,
  faArrowDown,
  faBox,
  faCog,
  faCompass,
  faDownload,
  faExclamationCircle,
  faFilm,
  faFlag,
  faGamepad,
  faHeadset,
  faHistory,
  faHome,
  faLightbulb,
  faMusic,
  faPlayCircle,
  faQuestionCircle,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import Spacer from './Spacer';
import styles from './menu.module.scss';

const Menu = () => (
  <menu className={styles.menu}>
    <MenuItem icon={faHome} text="홈" />
    <MenuItem icon={faCompass} text="탐색" />
    <MenuItem icon={faArchive} text="구독" />
    <MenuItem icon={faYoutube} text="Originals" />
    <MenuItem icon={faMusic} text="Youtube Music" />
    <Spacer height={40} line />
    <MenuItem icon={faBox} text="보관함" />
    <MenuItem icon={faHistory} text="시청 기록" />
    <MenuItem icon={faPlayCircle} text="내 동영상" />
    <MenuItem icon={faFilm} text="내 영화" />
    <MenuItem icon={faYoutube} text="나중에 볼 동영상" />
    <MenuItem icon={faDownload} text="오프라인 저장 동영상" />
    <MenuItem icon={faArrowDown} text="더보기" />
    <Spacer height={40} line />
    <Title text="구독" />
    <MenuItem icon={faFilm} text="영화" />
    <MenuItem icon={faFilm} text="영화" />
    <MenuItem icon={faFilm} text="영화" />
    <Spacer height={40} line />
    <Title text="YOUTUBE 더보기" />
    <MenuItem icon={faFilm} text="영화" />
    <MenuItem icon={faGamepad} text="게임" />
    <MenuItem icon={faHeadset} text="실시간" />
    <MenuItem icon={faLightbulb} text="학습" />
    <MenuItem icon={faTrophy} text="스포츠" />
    <Spacer height={40} line />
    <MenuItem icon={faCog} text="설정" />
    <MenuItem icon={faFlag} text="신고 기록" />
    <MenuItem icon={faQuestionCircle} text="고객센터" />
    <MenuItem icon={faExclamationCircle} text="의견 보내기" />
    <Spacer height={40} line />
  </menu>
);

export default Menu;
