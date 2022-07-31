package restAPI;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface OrderListTableRepo extends JpaRepository<OrderListTable,Long>{
	@Query("SELECT SUM(price) FROM OrderListTable")
	 List<CartList> findSum();
	
}