package cmms.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmms.entity.Member;

@Repository
public interface MemberJPA extends JpaRepository<Member, String> {

}
