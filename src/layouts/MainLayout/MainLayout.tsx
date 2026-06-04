import React from 'react';
import { Outlet } from 'react-router-dom';

import './MainLayout.style.css';
import Navbar from '../../components/organisms/Navbar/Navbar';
import Footer from '../../components/organisms/Footer/Footer';
import { useActiveSection } from '../../hooks/useActiveSection';

const MainLayout: React.FC = () => {
  useActiveSection();

  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
