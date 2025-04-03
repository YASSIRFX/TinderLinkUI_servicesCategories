import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import FooterComponent from './components/common/Footer';
import UpdateUser from './components/userspage/UpdateUser';
import UserManagementPage from './components/userspage/UserManagementPage';
import ProfilePage from './components/userspage/ProfilePage';

import ServicesListPage from './components/services/ServicesListPage';
import ServicesForm from './components/services/ServicesForm';

import CategoriesListPage from './components/categories/CategoriesListPage';
import CategoryForm from './components/categories/CategoryForm';

import { AuthProvider, AuthContext } from './AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="page-container">
          <HeaderComponent />
          <div className="content">
            <AppRoutes />
          </div>
          {/* Uncomment if using footer */}
          {/* <FooterComponent /> */}
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

function HeaderComponent() {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Sidebar /> : <Navbar />;
}

function AppRoutes() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/profile" /> : <LoginPage />}
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/profile" /> : <LoginPage />}
      />
      <Route
        path="/profile"
        element={isAuthenticated ? <ProfilePage /> : <Navigate to="/" />}
      />

      {/* Admin routes */}
      {isAdmin && (
        <>

          {/* user Management */}
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/admin/user-management" element={<UserManagementPage />} />
          <Route path="/update-user/:userId" element={<UpdateUser />} />
        
          {/* Service Management */}
          <Route path="/admin/services" element={<ServicesListPage />} />
          <Route path="/admin/services/new" element={<ServicesForm />} />
          <Route path="/admin/services/edit/:id" element={<ServicesForm />} />
          <Route path="/services" element={<ServicesListPage />} />


          {/* Category Management */}
        
          <Route path="/admin/categories" element={<CategoriesListPage />} />
          <Route path="/admin/categories/new" element={<CategoryForm />} />
          <Route path="/admin/categories/edit/:id" element={<CategoryForm />} />

        </>
      )}

      {/* Public routes */}
      
      {/* Service Routes */}
      

    
      
      

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;