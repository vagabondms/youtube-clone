import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import Sidebar from '@components/Sidebar/Sidebar';
import SidebarMini from '@components/SidebarMini/SidebarMini';
import Chips from '@components/Chips/Chips';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Content>
        <Header />
        <Chips />
      </Content>
      <Sidebar />
      <SidebarMini />
    </div>
  );
}

export default App;
