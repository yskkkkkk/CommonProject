package com.ssafy.persona.content.model.dto;

import com.ssafy.persona.content.model.entity.Reply;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ReplyModifyRequest {
	private int replySeq;
	private String replyText;
	
	public Reply toReply() {
		return Reply.builder()
					.replySeq(replySeq)
					.replyText(replyText)
					.build();
	}
}
