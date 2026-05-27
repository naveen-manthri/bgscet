import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import MainHeader from '../components/header/MainHeader';
import MainNavbar from '../components/header/MainNavbar';
import TopAnnouncementBar from '../components/header/TopAnnouncementBar';
import useScrollToTop from '../hooks/useScrollToTop';

function MainLayout() {
  useScrollToTop();

  return (
    <div className="app-shell">
      <TopAnnouncementBar />
      <MainHeader />
      <MainNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
