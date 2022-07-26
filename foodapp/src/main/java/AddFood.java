

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

/**
 * Servlet implementation class AddFood
 */
@WebServlet("/AddFood")
public class AddFood extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String res_id = request.getParameter("res_id");			
			String foodname = request.getParameter("foodname");
			String foodprice = request.getParameter("foodprice");
			PrintWriter out = response.getWriter();
//			
//		
//			String username = "sabhari";
//			String password = "sabhari";
//			String userid="10";
//			
			
		
			URL url = new URL("http://localhost:8790/addfood/"+res_id);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("PUT");
			conn.setRequestProperty("Content-Type", "application/json");

			String input="{\"res_id\":\""+res_id+"\",\"name\":\""+foodname+"\",\"price\":\""+foodprice+"\"}";
			
			OutputStream os = conn.getOutputStream();
			os.write(input.getBytes());
			os.flush();

		

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));

			String output;

			output = br.readLine();

		
			if(output.equals("added")) {
				response.setContentType("application/json");
			out.write("1");

			}
			else
			{
				out.write("0");
			}


			//			if(output.equalsIgnoreCase(op)){
			//				System.out.println("Yes correct");
			//			}

		
			conn.disconnect();

		} catch (MalformedURLException e) {

			e.printStackTrace();

		} catch (IOException e) {

			e.printStackTrace();

		} 

	}


}

