import { FaHeart } from "react-icons/fa";
import background from "../../../assets/images/illustrations/flower3.jpeg";
import "./ProfilePage.css";

const user = {
  firstname: "Coline",
  lastname: "Grosso",
};

function ProfilePage() {
  return (
    <div id="ProfilePage">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="background-image"
      >
        <h1>
          {user.firstname} {user.lastname}
        </h1>
        <div className="fav-profil">
        <FaHeart /> 
        <p>Mes articles favoris</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
