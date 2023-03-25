package cmms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import cmms.domain.Member;
import cmms.jdbc.dao.MemberDAO;

@RestController
public class ServerController {
	
	@Autowired
	MemberDAO memberDAO;
	
	@GetMapping("/members")
	public List<Member> getMemberTable(){
		return memberDAO.getMemberTable();
	}

}
