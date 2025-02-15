import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddService from './components/AddService';
import ServiceRequests from './components/ServiceRequests';
import UserManagement from './components/UserManagement';
import Layout from './components/Layout';
import PendingRequests from './components/PendingRequests';
import ServiceUsers from './components/ServiceUsers';
import BulkServiceAdd from './components/BulkServiceAdd';
import BulkUserAdd from './components/BulkUserAdd';
import './App.css';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <Layout>{children}</Layout>;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/services/add"
                    element={
                        <PrivateRoute>
                            <AddService />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/service-requests"
                    element={
                        <PrivateRoute>
                            <ServiceRequests />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users"
                    element={
                        <PrivateRoute>
                            <UserManagement />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/pending-requests"
                    element={
                        <PrivateRoute>
                            <PendingRequests />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/service-users"
                    element={
                        <PrivateRoute>
                            <ServiceUsers />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/services/bulk-add"
                    element={
                        <PrivateRoute>
                            <BulkServiceAdd />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users/bulk-add"
                    element={
                        <PrivateRoute>
                            <BulkUserAdd />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App; 