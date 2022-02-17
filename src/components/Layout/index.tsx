import Content from '@components/Content/Content';
import Header from '@components/Header/Header';
import Sidebar from '@components/Sidebar';

import { ReactNode, useEffect, useState } from 'react';

type LayoutProps = {
  children: ReactNode;
  sidebarPersistent?: boolean;
};

const Layout = ({ children, sidebarPersistent = false }: LayoutProps) => {
  const [appClass, setAppClass] = useState<string>('');
  const [appClassLarge, setAppClassLarge] = useState<string>('sidebar-visible');
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  useEffect(() => {
    if (sidebarPersistent) {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1320) {
        setAppClass('sidebar-visible');
      } else if (windowWidth <= 1320 && windowWidth > 810) {
        setAppClass('sidebar-mini-visible');
      } else {
        setAppClass('');
      }
    }
  }, [sidebarPersistent]);

  useEffect(() => {
    if (sidebarPersistent) {
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
    }
  }, [appClassLarge, sidebarPersistent]);

  const handleAppClass = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1320 && sidebarPersistent) {
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
    <div className={appClass}>
      <Header handleAppClass={handleAppClass} />
      <Sidebar
        onClose={closeSidebar}
        isOpened={sidebarOpened}
        persistent={sidebarPersistent}
      />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
