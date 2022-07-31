package restAPI;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import restAPI.CartList;

public interface CartListRepo extends JpaRepository<CartList,Long>{

//
//	 @Query("update CartList set quantity = 0")
//	 List<CartList> saveCart();

//	 @Query("SELECT t FROM CartList t WHERE t.user_id = ?1")
//	 List<CartList> findByUser_id(long id);
	 
	 @Query("SELECT SUM(price) FROM ")
	 List<CartList> findSum();
	


}