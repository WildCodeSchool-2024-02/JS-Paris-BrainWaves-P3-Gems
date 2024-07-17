import PropTypes from "prop-types";
import { useAuth } from "../../contexts/AuthContext";

function AdminRoute({ children }) {
  const { auth } = useAuth();

  if (!auth || !auth.user.is_admin) {
    return <div>Accès refusé. Vous n'avez pas les droits nécessaires pour accéder à cette page.</div>;
}
  return children;
}

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;

