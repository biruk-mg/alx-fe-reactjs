// src/components/ProtectedRoute.jsx
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import your useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use the hook to get authentication status

  if (!isAuthenticated) {
    // Redirect to login or home page if not authenticated
    return <Navigate to="/login" />;
  }

  return children; // Render children if authenticated
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
