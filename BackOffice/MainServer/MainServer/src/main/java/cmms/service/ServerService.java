package cmms.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cmms.domain.Member;
import cmms.jdbc.dao.MemberDAO;

@Service
public class ServerService {
	
	@Autowired
	MemberDAO memberDAO;
	
	public List<Member> getMemberTable(){ return memberDAO.getMemberTable(); }
	public void addMember(Member member){ memberDAO.addMember(member); }
	public Map<String, Object> login(Map<String, Object> req){
		return memberDAO.login(req);
	}

}
