import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProfileImages(props) {
  return (
    <>
      <img
        id="profile-cover"
        src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"
        alt=".."
      />
      <div className="profile-img-container">
        <img id="profile-img" src={props.profileImg} alt=".." />
        <div className="camera-icon">
          <FontAwesomeIcon icon={faCamera} />
        </div>
      </div>
    </>
  );
}
