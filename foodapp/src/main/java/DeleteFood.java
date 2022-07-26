

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
@WebServlet("/DeleteFood")
public class DeleteFood extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			
			String foodid = request.getParameter("foodid");
			String foodname = request.getParameter("foodname");
			String foodprice = request.getParameter("foodprice");
			PrintWriter out = response.getWriter();
//			

//		
			URL url = new URL("http://localhost:8788/deletefood/"+foodid);
					
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("DELETE");
			conn.setRequestProperty("Content-Type", "application/json");

			String input="{\"id\":"+foodid+"}";
			System.out.println(input);
			OutputStream os = conn.getOutputStream();
			os.write(input.getBytes());
			os.flush();

		

			BufferedReader br = new BufferedReader(new InputStreamReader(
					(conn.getInputStream())));

			String output;

			output = br.readLine();

		
			if(output.equals("deleted")) {
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

