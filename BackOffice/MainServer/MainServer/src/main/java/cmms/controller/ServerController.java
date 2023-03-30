package cmms.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import cmms.entity.Member;
import cmms.service.ServerService;

@RestController
public class ServerController {
	
	@Autowired
	ServerService service;
	
	@GetMapping("/member")
	public List<Member> getMemberTable(){
		return service.getMemberTable();
	}
	
	@PostMapping("/join")
	public void addMember(Member member){		
		service.addMember(member);
	}
	
	@CrossOrigin(origins = "http://1.254.141.230:3086")
	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody Map<String, Object> req){
		Map<String, Object> map = service.login(req);
		return map;
	}
}
