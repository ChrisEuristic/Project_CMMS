package cmms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import cmms.domain.Member;
import cmms.service.ServerService;

@RestController
public class ServerController {
	
	@Autowired
	ServerService serverService;
	
	@GetMapping("/member")
	public List<Member> getMemberTable(){
		return serverService.getMemberTable();
	}
	
	@PostMapping("/member")
	public void addMember(Member member){
		serverService.addMember(member);
	}

}
