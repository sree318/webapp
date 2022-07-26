

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


/**
 * Servlet implementation class RestaurantServlet
 */
@WebServlet("/Cartlist/*")
public class Cartlist extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Cartlist() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		  try {
				
			  String path = request.getRequestURI();
			  String segments[] = path.split("/");
			  String id = segments[segments.length - 1];
		
				URL url = new URL("http://localhost:8794/cart/"+id);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setDoOutput(true);
				conn.setRequestMethod("PUT");
				conn.setRequestProperty("Accept", "application/json");
				PrintWriter out = response.getWriter();
				String input = "{\"id\":"+id+"}";

				OutputStream os = conn.getOutputStream();
				os.write(input.getBytes());
				os.flush();

				BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));

				String output;
			
			    output = br.readLine();
			   response.setContentType("application/json");
			
				
				conn.disconnect();
				String user_id = "10";
			
            URL url1 = new URL("http://localhost:8793/finallist");
  			HttpURLConnection conn1 = (HttpURLConnection) url1.openConnection();
   			conn1.setDoOutput(true);
   			conn1.setRequestMethod("POST");
   			conn1.setRequestProperty("Content-Type", "application/json");
//   			StringBuffer sb= new StringBuffer(output);  
//   		//invoking the method  
//   		sb.deleteCharAt(sb.length()-1);
//   		String s=sb.toString();
//   			String input1 = "{\"id\":4,\"res_id\":1,\"name\":\"Chapathi\",\"price\":\"30\",\"quantity\":100}";
//   			String user=",\"user_id\":"+user_id+"}";
//  			String op=s+user;
   			
   			OutputStream os1 = conn1.getOutputStream();
  			os1.write(output.getBytes());
  			os1.flush();
  
   		

  			BufferedReader br1 = new BufferedReader(new InputStreamReader(
   					(conn1.getInputStream())));

  			String output1;
  		
  			while ((output1 = br1.readLine()) != null) {
 			 response.setContentType("application/json");
  				out.write("1");
  			}

   			conn1.disconnect();

			
				

			  } catch (MalformedURLException e) {

				e.printStackTrace();

			  } catch (IOException e) {

				e.printStackTrace();

			  }

			}
}