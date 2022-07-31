package restAPI;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import restAPI.FoodListTable;

public interface FoodListTableRepo extends JpaRepository<FoodListTable,Long>{

	 @Query("SELECT t FROM FoodListTable t WHERE t.res_id = ?1")
List<FoodListTable> findByRes_id(long id);
	 
//	 @Query(
//			  value = "SELECT * FROM USERS u WHERE u.res_id = 1", 
//			  nativeQuery = true)
//			Collection<User> findAllActiveUsersNative();
}
