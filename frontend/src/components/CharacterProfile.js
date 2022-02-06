import { Label } from "@material-tailwind/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CharacterImg from "./CharacterImg";
import styles from "./CharacterProfile.module.css";

function CharacterProfile({
  nickname,
  category,
  introduction,
  representativeAchievement,
  classes,
  isMe = true,
  characterSlice,
}) {
  return (
    <div className={`flex justify-center items-center p-4 my-4 ${classes}`}>
      <CharacterImg />
      <div className="ml-10">
        <div>
          <div className="inline-block bg-red-500 px-1 mr-1 rounded-xl">
            <img
              src={require("../assets/images/sample_achievement.png")}
              alt="sample_achievement_img"
              width="16px"
              className="inline-block"
            />
            {/* <span className="text-xs text-yellow-300">요리왕</span> */}
          </div>
          {nickname} ({category})
        </div>
        <div className="py-1">
          <div className="inline-block mr-8">
            <span>
              게시물 <span className="font-bold">55</span>
            </span>
          </div>
          <div className="inline-block mr-8">
            <span>
              팔로워 <span className="font-bold">163K</span>
            </span>
          </div>
          <div className="inline-block">
            <span>
              팔로우 <span className="font-bold">2.34K</span>
            </span>
          </div>
        </div>

        <div className="text-sm w-80 h-7">{introduction}</div>
        {isMe ? (
          <div className="mt-3">
            <div className="inline-block px-2">
              <Link to={`../${nickname}/achievement`}>
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  업적 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link to="../characters/select">
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  부캐 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Link
                to={{
                  pathname: "../characters/update",
                  state: {
                    characterSeq: characterSlice.characterSeq,
                  },
                }}
              >
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  프로필 편집
                </Label>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-2">
            <div className="inline-block px-2">
              <Link to={`../${nickname}/achievement`}>
                <Label color="blueGray" className={`${styles.customRadius}`}>
                  업적 보기
                </Label>
              </Link>
            </div>
            <div className="inline-block px-2">
              <Label color="lightBlue" className={`${styles.customRadius}`}>
                팔로우
              </Label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character, userSlice: state.user };
}

export default connect(mapStateToProps)(CharacterProfile);
