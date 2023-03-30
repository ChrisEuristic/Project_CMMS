package cmms.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import cmms.entity.Member;
import cmms.jpa.MemberJPA;

@Service
public class ServerService {
	
	@Autowired
	MemberJPA memberJPA;
	
	
	public List<Member> getMemberTable() {
		return memberJPA.findAll();
	}
	
	public Optional<Member> getMember(Member member) {
		return memberJPA.findById(member.getId());
	}
	public void addMember(Member member) {
		Member newMember = new Member(
				member.getId(),
				member.getPassword(),
				member.getType(),
				member.getName(),
				member.getRegidate()
				);
		memberJPA.save(newMember);
	}
	public Map<String, Object> login(Map<String, Object> req) {
		Map<String, Object> resp = new HashMap<>();
		
		// Probe 생성
		Member member = new Member();
		member.setId((String) req.get("id"));
		member.setPassword((String) req.get("password"));
		
		// ExampleMatcher 생성
		ExampleMatcher matcher = ExampleMatcher.matching()
				.withStringMatcher(ExampleMatcher.StringMatcher.EXACT); // 문자열 정확히 일치
		
		// Example 생성
		Example<Member> example = Example.of(member, matcher);
		
		// Query 호출
		Optional<Member> result = memberJPA.findOne(example);
		
		if(result.isPresent()) { 	// 로그인 정보를 찾음
			Member found = result.get();
			resp.put("success", true);
			resp.put("id", found.getId());
			resp.put("name", found.getName());
			resp.put("gotoHome", "navigator(\"/\")");
		} else {					// 로그인 정보를 찾지 못함
			resp.put("success", false);
		}
		
		return resp;
	}

}
