

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
 * Servlet implementation class serv
 */
@WebServlet("/Signup")
public class Signup extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			String username = request.getParameter("username");
			String password = request.getParameter("password");

			
			PrintWriter out = response.getWriter();

			
			String op="{\"username\":\""+username+"\",\"password\":\""+password+"\"}";
		
			URL url = new URL("http://localhost:8784/signup");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("PUT");
			conn.setRequestProperty("Content-Type", "application/json");

//			String input = "{\"id\":"+userid+"}";

			OutputStream os = conn.getOutputStream();
			os.write(op.getBytes());
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

