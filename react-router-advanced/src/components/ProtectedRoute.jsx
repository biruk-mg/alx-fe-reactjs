// src/components/ProtectedRoute.jsx
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Simulate authentication status

  if (!isAuthenticated) {
    // Redirect to login or home page
    return <Navigate to="/" />;
  }

  return children;
}

// Define PropTypes for the component
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Expect children to be a React node
};

export default ProtectedRoute;
