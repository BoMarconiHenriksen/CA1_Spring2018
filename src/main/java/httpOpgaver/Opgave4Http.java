/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package httpOpgaver;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Bo
 */
@WebServlet(name = "Opgave4Http", urlPatterns = {"/Opgave4Http"})
public class Opgave4Http extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ChrServlet</title>");  
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ChrServlet at " + request.getContextPath() + "</h1>");
            out.println("<p>Christian Lykke - datamariker, "
                    + "3. sem, uge 3 - aflevering HTTPExercises - opg.4 "
                    + "(Get HTTP Request Headers on the Server ) filer: 1 servlet</p>");
            out.println("<p></p>");
            
            Enumeration<String> allHeaders = request.getHeaderNames();
            while(allHeaders.hasMoreElements()) {
                String currentHead = allHeaders.nextElement();
                String output = request.getHeader(currentHead);
                out.println("<p>");
                out.println("currentHead: ");
                out.println(currentHead);
                int myspace = 25 - currentHead.length();
                for (int i = 0; i < myspace; i++) {
                    out.println("&nbsp");
                }
                out.println(" result: "+output);
                out.println("</p>");
            }
            
            //String xxx = request.getHeader("accept");
            //out.println(xxx);
            
            
            
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
