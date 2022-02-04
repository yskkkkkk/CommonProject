import { createSlice } from "@reduxjs/toolkit";

// 나중에는 서버에서 캐릭터 개수에 따라 각자 적절히 받아와야 할 듯?
// 캐릭터 전체 리스트로 변환 필요

const initialCharacterState = {
  alarmAllow: false,
  categorySeq: 0,
  characterActive: true,
  characterCreatedDate: null,
  characterModifiedDate: null,
  characterSeq: 0,
  followAlarm: false,
  introduction: "initialIntroduction",
  modifyAlarm: false,
  nickname: "initialNickname",
  replyAlarm: false,
  reportedTime: 0,
  representativeAchievement: 0,
  userSeq: 0,
  userId: "initialUserId",
  filePath: null,
};

const characterSlice = createSlice({
  name: "character",
  initialState: initialCharacterState,
  reducers: {
    // 캐릭터 선택 화면에서 메인페이지로 이동할 때 해당 캐릭터 정보 저장
    save: (state, action) => {
      console.log("save 동작중!", action.payload);
      state.alarmAllow = action.payload.alarmAllow;
      state.categorySeq = action.payload.categorySeq;
      state.characterActive = action.payload.characterActive;
      state.characterCreatedDate = action.payload.characterCreatedDate;
      state.characterModifiedDate = action.payload.characterModifiedDate;
      state.characterSeq = action.payload.characterSeq;
      state.followAlarm = action.payload.followAlarm;
      state.introduction = action.payload.introduction;
      state.modifyAlarm = action.payload.modifyAlarm;
      state.nickname = action.payload.nickname;
      state.replyAlarm = action.payload.replyAlarm;
      state.reportedTime = action.payload.reportedTime;
      state.representativeAchievement = action.payload.representativeAchievement;
      state.userSeq = action.payload.userSeq;
      state.userId = action.payload.userId;
      state.filePath = action.payload.filePath;
    },
    // 캐릭터 수정 화면에서 해당 캐릭터 정보 수정
    update: (state, action) => {
      state.introduction = action.payload.introduction;
      state.nickname = action.payload.nickname;
    },
  },
});

export const { save, update } = characterSlice.actions;
export default characterSlice.reducer;
