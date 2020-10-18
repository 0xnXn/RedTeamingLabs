import java.net.*;
import java.io.*;

public class Server {
    private Socket          socket   = null;
    private ServerSocket    server   = null;
    private DataInputStream in       =  null;
    private DataOutputStream out     = null;
    private DataInputStream  input   = null;

    // constructor with port
    public Server(int port) {
        // starts server and waits for a connection
        try {
            server = new ServerSocket(port);
            System.out.println("Server started");

            System.out.println("Waiting for a client ...");

            socket = server.accept();
            System.out.println("Client accepted the token is ");

            // takes input from the client socket
            try {
                input = new DataInputStream(System.in);

                out = new DataOutputStream(socket.getOutputStream());

            } catch (UnknownHostException u) {
                System.out.println(u);
            } catch (IOException i) {
                System.out.println(i);
            }

            String line = "";

            // reads message from client until "Over" is sent
            while (!line.equals("over")) {
                try {
                    line = input.readLine();
                    out.writeUTF(line);
                } catch (IOException i) {
                    System.out.println(i);
                }
            }

            // close the connection
            try {
                input.close();
                out.close();
                socket.close();
            } catch (IOException i) {
                System.out.println(i);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String args[])
    {
        Server server = new Server(5000);
    }
}
