import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { FaShoppingBag, FaUserAltSlash, FaHeart } from "react-icons/fa";
import { IoClose, IoHeartDislikeSharp } from "react-icons/io5";
import "./GemsToast.css";

const ToastTypes = {
  success: { icon: <FaCircleCheck /> },
  error: { icon: <MdError /> },
  warning: { icon: <IoIosWarning /> },
  basket: { icon: <FaShoppingBag /> },
  like: { icon: <FaHeart /> },
  unlike: { icon: <IoHeartDislikeSharp /> },
  disconnected: { icon: <FaUserAltSlash /> },
};

function GemsToast({
  id,
  type,
  message,
  timer,
  bg,
  col,
  logoColor,
  removeToast,
}) {
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    setIsClosed(false);
    const timeout = setTimeout(() => {
      setIsClosed(true);
      removeToast(id);
    }, timer);

    return () => clearTimeout(timeout);
  }, [id, timer, removeToast]);

  const { icon } = ToastTypes[type];
  const background = bg || "black";
  const color = col || "white";
  const logoCol = logoColor || col;

  if (isClosed) return null;

  return (
    <div id="gemsToast" className={type} style={{ background, color }}>
      <div className="toast-container">
        <span className="toast-icon" style={{ color: logoCol }}>
          {icon}
        </span>
        <p>{message}</p>
      </div>
      <IoClose
        onClick={() => {
          setIsClosed(true);
          removeToast(id);
        }}
        className="close-btn"
      />
    </div>
  );
}

GemsToast.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timer: PropTypes.number,
  bg: PropTypes.string,
  col: PropTypes.string,
  logoColor: PropTypes.string,
  removeToast: PropTypes.func.isRequired,
};

GemsToast.defaultProps = {
  timer: 6000,
  bg: "black",
  col: "white",
  logoColor: "white",
};

export default GemsToast;
