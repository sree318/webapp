

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
@WebServlet("/AddRes")
public class AddRes extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			
			String res_name = request.getParameter("res_name");
			String type = request.getParameter("type");
			PrintWriter out = response.getWriter();

//		
			URL url = new URL("http://localhost:8786/addres/4");
					
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("PUT");
			conn.setRequestProperty("Content-Type", "application/json");

			String input="{\"res_name\":\""+res_name+"\",\"type\":\""+type+"\"}";
			System.out.println(input);
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

