

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
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
 * Servlet implementation class OrderlistServlet
 */
@WebServlet("/OrderListServlet")
public class OrderlistServlet extends HttpServlet {
	 
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	 try {
		 // response.setContentType("application/json");
			
			URL url = new URL("http://localhost:8792/food");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");
			PrintWriter out = response.getWriter();
//			String input = "{\"res_name\":\"Arasan\"}";

//			OutputStream os = conn.getOutputStream();
//			os.write(input.getBytes());
//			os.flush();
			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));

			String output;

			while ((output = br.readLine()) != null) {
				 response.setContentType("application/json");
				out.write(output);
			}

			conn.disconnect();

		  } catch (MalformedURLException e) {

			e.printStackTrace();

		  } catch (IOException e) {

			e.printStackTrace();

		  }

		}
}