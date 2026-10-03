import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AdminLayout from '../layouts/AdminLayout'
import ProtectedRoute from './ProtectedRoute'

import Home from '../pages/Home'
import Services from '../pages/Services'
import ServiceDetail from '../pages/ServiceDetail'
import About from '../pages/About'
import ServiceAreas from '../pages/ServiceAreas'
import News from '../pages/News'
import NewsDetail from '../pages/NewsDetail'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

import Login from '../pages/admin/Login'
import Dashboard from '../pages/admin/Dashboard'
import ServicesAdmin from '../pages/admin/ServicesAdmin'
import NewsAdmin from '../pages/admin/NewsAdmin'
import GalleryAdmin from '../pages/admin/GalleryAdmin'
import PromosAdmin from '../pages/admin/PromosAdmin'
import TestimonialsAdmin from '../pages/admin/TestimonialsAdmin'
import SettingsAdmin from '../pages/admin/SettingsAdmin'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/layanan', element: <Services /> },
      { path: '/layanan/:slug', element: <ServiceDetail /> },
      { path: '/tentang', element: <About /> },
      { path: '/area-layanan', element: <ServiceAreas /> },
      { path: '/berita', element: <News /> },
      { path: '/berita/:slug', element: <NewsDetail /> },
      { path: '/galeri', element: <Gallery /> },
      { path: '/kontak', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/admin/login',
    element: <Login />,
  },
  {
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/admin', element: <Dashboard /> },
      { path: '/admin/layanan', element: <ServicesAdmin /> },
      { path: '/admin/berita', element: <NewsAdmin /> },
      { path: '/admin/galeri', element: <GalleryAdmin /> },
      { path: '/admin/promo', element: <PromosAdmin /> },
      { path: '/admin/testimoni', element: <TestimonialsAdmin /> },
      { path: '/admin/pengaturan', element: <SettingsAdmin /> },
    ],
  },
])
