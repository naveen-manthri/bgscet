import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const DepartmentsPage = lazy(() => import('../pages/DepartmentsPage'));
const DepartmentDetailPage = lazy(() => import('../pages/DepartmentDetailPage'));
const AdmissionsPage = lazy(() => import('../pages/AdmissionsPage'));
const PlacementsPage = lazy(() => import('../pages/PlacementsPage'));
const FacilitiesPage = lazy(() => import('../pages/FacilitiesPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="route-loader">Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="departments/:slug" element={<DepartmentDetailPage />} />
          <Route path="ug-programs" element={<DepartmentsPage />} />
          <Route path="ug-programs/:slug" element={<DepartmentDetailPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="placements" element={<PlacementsPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
