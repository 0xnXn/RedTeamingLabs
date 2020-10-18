import java.net.*;
import java.io.*;

public class Client {
    private Socket socket            = null;
    private DataOutputStream out     = null;
    private DataInputStream in       =  null;

    // constructor to put ip address and port
    public Client(String address, int port) throws IOException {
        // establish a connection
        try
        {
            socket = new Socket(address, port);
            System.out.println("Connected");

        }
        catch(UnknownHostException u)
        {
            System.out.println(u);
        }
        catch(IOException i)
        {
            System.out.println(i);
        }
        System.out.println("test");
        // string to read message from input
        String line = "";

        // keep reading until "Over" is input
        in = new DataInputStream(
                new BufferedInputStream(socket.getInputStream()));

        while (!line.equals("over"))
        {
            try
            {
                line = in.readUTF();

                System.out.println(line);

            }
            catch(IOException i)
            {
                System.out.println(i);
            }
        }

        System.out.println("Closing connection");

        // close connection

        try {
            socket.close();
            in.close();
            out.close();

        }
        catch (IOException i ){
            System.out.println(i);
        }


    }

    public static void main(String args[]) throws IOException {
        Client client = new Client("127.0.0.1", 5000);
    }
}
