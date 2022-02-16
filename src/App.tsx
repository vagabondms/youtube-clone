import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import Sidebar from '@components/Sidebar/Sidebar';
import SidebarMini from '@components/SidebarMini/SidebarMini';
import Chips from '@components/Chips/Chips';

import { useEffect, useState } from 'react';
import Videos from '@components/Videos';
import style from './App.module.scss';

function App() {
  const [appClass, setAppClass] = useState<string>('');
  const [appClassLarge, setAppClassLarge] = useState<string>('sidebar-visible');
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1320) {
      setAppClass('sidebar-visible');
    } else if (windowWidth <= 1320 && windowWidth > 810) {
      setAppClass('sidebar-mini-visible');
    } else {
      setAppClass('');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1320) {
        if (appClass !== appClassLarge) {
          setAppClass(appClassLarge);
        }
        setSidebarOpened(false);
      } else if (windowWidth <= 1320 && windowWidth > 810) {
        setAppClass('sidebar-mini-visible');
      } else if (windowWidth < 810) {
        setAppClass('');
      }
    });
  }, [appClassLarge]);

  const handleAppClass = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1320) {
      const currentAppClass =
        appClass === 'sidebar-visible'
          ? 'sidebar-mini-visible'
          : 'sidebar-visible';
      setAppClass(currentAppClass);
      setAppClassLarge(currentAppClass);
    } else {
      setSidebarOpened((prev) => {
        if (!prev) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'scroll';
        }
        return !prev;
      });
    }
  };

  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  return (
    <div id="App" className={`${style.app} ${appClass}`}>
      <Content>
        <Header handleAppClass={handleAppClass} />
        <Chips />
        <Videos />
      </Content>
      <Sidebar
        style={
          sidebarOpened
            ? {
                transform: 'translateX(0px)',
                marginTop: '0px',
              }
            : {}
        }
        onClose={closeSidebar}
        isOpened={sidebarOpened}
      />
      <SidebarMini />
    </div>
  );
}

export default App;
