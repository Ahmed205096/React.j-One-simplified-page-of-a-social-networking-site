import "./FirstSectionStyling.css";
import ProfileImages from "./ProfileImages";
import ProfileBtns from "./ProfileBtns";
import ExtraBar from "./ExtraBar";
import GetUserInfo from "../APIs/GetUserInfo";

export default function FirstSection() {
  const userId = 3;
  const userInfo = GetUserInfo(userId)[0];
    if (userInfo !== undefined) {
  return  (
    <div className="fst-sec-container">
      <ProfileImages profileImg = {userInfo.avatar} />
      <h1 id="user-name">{userInfo.name}</h1>
      <h4 id="user-role">{userInfo.role}</h4>
      <ProfileBtns />
      <div className="dividor"></div>
      <ExtraBar />
      <div className="section-end"></div>
    </div>
  );}
}
