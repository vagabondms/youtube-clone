import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import Sidebar from '@components/Sidebar/Sidebar';
import SidebarMini from '@components/SidebarMini/SidebarMini';
import Chips from '@components/Chips/Chips';

import { useEffect, useState } from 'react';
import style from './App.module.scss';

function App() {
  const [appClass, setAppClass] = useState<string>('');
  const [showSidebar, setSidebar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      if (width >= 1320) {
        setAppClass('sidebar');
        setSidebar(false);
      } else if (width < 1320 && width >= 810) {
        setAppClass('sidebar-mini');
      } else {
        setAppClass('');
      }
    });
  }, []);

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1320) {
      setAppClass('sidebar');
    } else if (width < 1320 && width >= 810) {
      setAppClass('sidebar-mini');
    } else {
      setAppClass('');
    }
  }, []);

  const handleAppClass = () => {
    const width = window.innerWidth;
    if (width >= 1320) {
      setAppClass((prev) => (prev === 'sidebar' ? 'sidebar-mini' : 'sidebar'));
    } else if (width < 1320) {
      setSidebar((prev) => !prev);
    }
  };

  return (
    <div id="App" className={`${style.app} ${appClass}`}>
      <Content>
        <Header handleAppClass={handleAppClass} />
        <Chips />
      </Content>
      <Sidebar
        style={
          showSidebar
            ? { transform: 'translate(0,0)', visibility: 'visible' }
            : {}
        }
      />
      <SidebarMini />
    </div>
  );
}

export default App;
