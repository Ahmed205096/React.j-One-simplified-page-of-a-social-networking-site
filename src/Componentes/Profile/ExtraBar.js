import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ExtraBar(){
    return(
        <>
        <div className="bar">
        <div className="links">
          <a href="/#">Posts</a>
          <a href="/#">About</a>
          <a href="/#">Friends</a>
          <a href="/#">Photos</a>
          <a href="/#">Videos</a>
          <a href="/#">
            More <FontAwesomeIcon icon={faAngleDown} fontSize={12} />
          </a>
        </div>
        <button className="dots">&#x2022;&#x2022;&#x2022;</button>
      </div>
        </>
    );
}