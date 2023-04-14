import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faToolbox,
  faHouse,
  faCommentDots,
  faPersonRifle,
  faAreaChart,
} from "@fortawesome/free-solid-svg-icons";
import { NAVBAR_ICONS, Posts_Data, WHO_TO_CONNECT, WHO_TO_CONNECTS } from "../../Data/data";
export const Home = () => {
  return (
    <>
      <div className="main">
        <div className="homeContainer">
          <div className="leftSide">
            <div className="profileDiv">
            </div>
            <div className="paddingDiv">
              <div className="homeClassColor"><FontAwesomeIcon icon={faHouse} /> <p style={{ marginLeft: "10px" }}>Home</p></div>
              <div className="homeClass"><FontAwesomeIcon icon={faCommentDots} /><p style={{ marginLeft: "10px" }}>Message</p></div>
              <div className="homeClass"><FontAwesomeIcon className="fa-icon" icon={faToolbox} /><p style={{ marginLeft: "10px" }}>Job Invites</p></div>
              <div className="homeClass"><FontAwesomeIcon icon={faAreaChart} /><p style={{ marginLeft: "10px" }}>Analytics</p></div>
              <div className="homeClass"><FontAwesomeIcon icon={faPersonRifle} /><p style={{ marginLeft: "10px" }}>My Profile</p></div>
            </div>
            <div className="paddingDiv">
              <div className="borderBottom"></div>
              <div className="homeClassBold">My Community</div>
              <div className="searchDivs">
                <img src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg" alt="" />
                <div style={{marginTop:"10px"}}>
                  <p>Indonesia UI Designer</p>
                  <p className="members">734 Members</p>
                </div>
              </div>
              <div className="searchDivs">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMevJFZGY1xvPjPoTIoeQtYtBEr9W9ciCdSeYnh0fj9w_D8I6BWgCEYYlSccFJOucreuw&usqp=CAU" alt="" />
                <div style={{marginTop:"10px"}}>
                  <p>Indonesia UX Resea...</p>
                  <p  className="members">73 Members</p>
                </div>
              </div>
              <div className="searchDivs">
                <img src="https://www.shutterstock.com/image-photo/beautiful-female-dummy-profile-260nw-2063312.jpg" alt="" />
                <div style={{marginTop:"10px"}}>
                  <p>Prototyping Club</p>
                  <p  className="members">744 Members</p>
                </div>
              </div>
              <div className="searchDivs">
                <img src="https://impulse.aarafacademy.com/uploads/samples/b1.jpg" alt="" />
                <div style={{marginTop:"10px"}}>
                  <p>Indonesia UI Designer</p>
                  <p  className="members">704 Members</p>
                </div>
              </div>
            </div>
          </div>
          <div className="middleSide">
            <div className="top">

              <div className="searchDiv">
                <img src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg" alt="" />
                <div>
                  <p>DesignersIndia</p>
                  <div><FontAwesomeIcon icon={faHouse} />1.23K Members</div>
                </div>
              </div>

              <div style={{ display: "block", padding: "10px" }}>

                <p className="font">Welcome to the <b>DevelopersIndia</b>. This page dedicated to bringing together developers from india and around the world to share their knowledge, experiences and insight in the field of design</p>
                <p className="font">Created on 30February 2023</p>
                <p className="fontSize">Related tags</p>
                <div style={{ display: "flex" }}>
                  <div className="design">Design</div>
                  <div className="designRight">Design</div>
                  <div className="designRight">Design</div>
                  <div className="designRight">Design</div>
                  <div className="designRight">Design</div>
                  <div className="designRight">Design</div>
                  <div className="designRight">Design</div>
                  <div className="designRight">Design</div>
                  <div className="designRight">Design</div>
                </div>
              </div>

            </div>
            {Posts_Data.map((el, i) => (
              <UserPosts
                key={i}
                avatar={el.avatar}
                name={el.name}
                about_avatar={el.about_avatar}
                about_post={el.about_post}
                post_picture={el.post_picture}
                time={el.time}
                icons={el.icons}
              />
            ))}
          </div>
          <div className="rightSide" style={{marginTop:"17%", marginLeft:"-6%"}}>
            <div className="rightContainer">
              <h3 className="connectHeading">Top Users</h3>
              {WHO_TO_CONNECT.map((el, i) => (
                <WhoToconnect
                  key={i}
                  name={el.name}
                  username={el.username}
                  avatar={el.avatar}
                />
              ))}
             
            </div>
            <div style={{ marginTop: "20px" }} className="rightContainer">
              <h3 className="connectHeading">Top Users</h3>
              {WHO_TO_CONNECTS.map((el, i) => (
                <WhoToconnects
                  key={i}
                  name={el.name}
                  username={el.username}
                  avatar={el.avatar}
                />
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavbarIcons = (props) => {
  return (
    <div className="btnicon">
      <span>{props.icon}</span>
      <span className="icontext">{props.text}</span>
    </div>
  );
};

function UserPosts(props) {
  return (
    <div style={{ display: "flex"}}>
      <div className="postsMainDiv">
        <div className="useDetails">
          <div className="avatarDetails">
            <img className="userAvatar" src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg" alt="" />
            <div>
              <h4>{props.name}</h4>
              <p>{props.about_avatar}</p>
              <div className="postime">
                <p>{props.time}</p>
                <div className="dot"></div>
                <FontAwesomeIcon className="earthIcon" icon={faEarth} />
              </div>
            </div>
          </div>
        </div>
        <div className="aboutPost">
          <p>{props.about_post}</p>
        </div>
        <div className="postPicture">
          <img src={props.post_picture} alt="" />
        </div>
        <div className="viewerReactionMain">
          {props.icons.map((e, i) => (
            <div key={i} className="viewerReaction">
              <h5 >{e.icon}</h5>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const WhoToconnect = (props) => {
  return (
    <div className="whoToConnect_container">
      <div className="account">
        <div className="img_src">
          <img src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg" alt="userAvatar" />
        </div>
        <div className="connect_user_name">
          <h3>{props.name}</h3>
          <h4>@{props.username}</h4>
        </div>
      </div>

      <button className="connect_btn">View Profile</button>
    </div>
  );
};
const WhoToconnects = (props) => {
  return (
    <div className="whoToConnect_container">
      <div className="account">
        <div className="img_src">
          <img src="https://i.ibb.co/FqN8fT6/Alok-kumar.jpg" alt="userAvatar" />
        </div>
        <div className="connect_user_name">
          <h3>{props.name}</h3>
          <h4>@{props.username}</h4>
        </div>
      </div>
    </div>
  );
};
