import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";


function ProtectedRoute ({children}) {
  const {isLoading, auth} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoading) {
      if(!auth) navigate("/login");
    }
  },[auth, isLoading, navigate])
  if (!isLoading && auth) return children;
  return "...loading";
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
