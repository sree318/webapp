package restAPI;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import restAPI.LoginTable;
import restAPI.LoginTableRepo;

import restAPI.CartList;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
@RestController
public class APIcontroller {

	private static final List<LoginTable> UpdatedUser = null;
	@Autowired
	private LoginTableRepo loginTableRepo;
	
	@Autowired
	private OrderTableRepo orderTableRepo;
	
	@Autowired
	private RestaurantTableRepo restaurantTableRepo;
	
	@Autowired
	private FoodListTableRepo foodlistTableRepo;
	
	@Autowired
	private CartListRepo cartListRepo;
	
	
	@Autowired
	private OrderListTableRepo orderListTableRepo;
	
	@GetMapping(value="/")
	public String getPage() {

		return "welcome";
	}

	@PutMapping(value="/logintable/{id}")

	public LoginTable getLoginTables(@PathVariable long id){
	
			LoginTable updatedUser=loginTableRepo.findById(id).get();
	        
	
		return updatedUser;
	}	

	@PutMapping(value="/signup")

	public String Signup(@RequestBody LoginTable logintable){
	
		 loginTableRepo.save(logintable);
			return "added";	
	        
	}

	@GetMapping(value="/restaurant")

	public List<RestaurantTable> getRestaurantTables(){

		return restaurantTableRepo.findAll();
	}
	@GetMapping(value="/food")

	public List<OrderListTable> getOrderListTables(){

		return orderListTableRepo.findAll();
	}
	@GetMapping(value="/deletelist")

	public String deleteOrderListTables(){

	 orderListTableRepo.deleteAll();
	 return "deleted";
	}
	@PutMapping(value="/addfood/{id}")

	public String addFood(@PathVariable long id,@RequestBody FoodListTable foodlist){

		foodlistTableRepo.save(foodlist);
		return "added";
	}
	@PutMapping(value="/updatefood/{id}")

	public String updateFood(@PathVariable long id,@RequestBody FoodListTable foodlist){
		FoodListTable food=foodlistTableRepo.findById(id).get();
		System.out.println(food);
		food.setName(foodlist.getName());
		food.setPrice(foodlist.getPrice());	
	    food.setRes_Id(foodlist.getRes_id());
		return "updated";
		
	}
	

	
	@DeleteMapping(value="/deletefood/{id}")

	public String deleteFood(@PathVariable long id,@RequestBody FoodListTable foodlist){
		FoodListTable food=foodlistTableRepo.findById(id).get();
		foodlistTableRepo.delete(food);
		return "deleted";
		
	}
	
	@DeleteMapping(value="/deleteres/{id}")

	public String deleteRes(@PathVariable long id,@RequestBody RestaurantTable restable){
		RestaurantTable res=restaurantTableRepo.findById(id).get();
		restaurantTableRepo.delete(res);
		return "deleted";
		
	}	
	@PutMapping(value="/addres/{id}")

	public String addRes(@PathVariable long id,@RequestBody RestaurantTable restaurantlist){

	    restaurantTableRepo.save(restaurantlist);
		return "added";
	}
	@PutMapping(value="/restaurantlist/{name}")

	public List<RestaurantTable> getRestaurantnameTables(@PathVariable String name){

		return restaurantTableRepo.findByRes_name(name);
	}
	@PutMapping(value="/foodlist/{id}")

	public List<FoodListTable> getFoodListTables(@PathVariable long id){

		return	foodlistTableRepo.findByRes_id(id);
		
	}	

	@PutMapping(value="/cart/{id}")

	public FoodListTable getFoodListTable(@PathVariable long id){
	     FoodListTable food=foodlistTableRepo.findById(id).get();
	     
	    return food;
		
	}	
	
	@PostMapping(value="/cartlists")

	public String saveCartList(@RequestBody CartList cartlist){

		cartListRepo.save(cartlist);
		
		return "saved";
	}	
	
//	@PostMapping(value="/foodlists")
//
//	public String saveOrderList(@RequestBody OrderTable orderTable){
//
//		orderTableRepo.save(orderTable);
//		
//		return "saved";
//	}
//	
	@PostMapping(value="/finallist")

	public String saveOrderTableList(@RequestBody OrderListTable orderListTable){

		orderListTableRepo.save(orderListTable);
		
		return "saved";
	}
	
	@GetMapping(value="/order")

	public List<CartList> getCartLists(){

		return cartListRepo.findAll();
	}
//	
//	@PutMapping(value="/orderlist")
//
//	public List<CartList> getCartLists(){
//
//
//		return cartListRepo.findAll();
//		
//	}	



}





