import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPlus,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";


export default function ProfileBtns(){
    return(
        <>
        <div className="btns-container">
        <button className="down-arrow ">
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <button className="edit-profile btn">
          Edit profile <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="add-to-story btn">
          Add to story <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
        </>
    );
}