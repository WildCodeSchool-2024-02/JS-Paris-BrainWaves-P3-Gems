import PropTypes from "prop-types";
import { useAuth } from "../../contexts/AuthContext";

function AdminRoute({ children }) {
  const { auth } = useAuth();

  if (!auth || !auth.user.is_admin) {
    return null;
  }

  return children;
}

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;

