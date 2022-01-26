package com.ssafy.persona.user.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.persona.user.model.dto.MailVerifyRequest;

@Mapper
public interface MailMapper {
	String getEmail(int userSeq);
	int addAuthNumber(String userId, String authText);
	int verifyEmail(MailVerifyRequest mailRequest);
}
