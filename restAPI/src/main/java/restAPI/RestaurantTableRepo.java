package restAPI;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import restAPI.RestaurantTable;

public interface RestaurantTableRepo extends JpaRepository<RestaurantTable,Long>{

	 @Query("SELECT t FROM RestaurantTable t WHERE t.res_name = ?1")
List<RestaurantTable> findByRes_name(String res_name);
}
