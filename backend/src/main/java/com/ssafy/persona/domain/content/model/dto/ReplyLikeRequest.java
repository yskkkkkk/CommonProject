package com.ssafy.persona.domain.content.model.dto;

import com.ssafy.persona.domain.content.model.entity.ReplyLike;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class ReplyLikeRequest {
	private int replySeq;
	private int characterSeq;
	
	public ReplyLike toReplyLike() {
		return ReplyLike.builder()
				 	      .replySeq(replySeq)
				 	      .characterSeq(characterSeq)
				 	      .build();
	}
}
