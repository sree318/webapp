package restAPI;

import org.springframework.data.jpa.repository.JpaRepository;

import restAPI.LoginTable;

public interface LoginTableRepo extends JpaRepository<LoginTable,Long>{

}
