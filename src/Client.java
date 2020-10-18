import java.net.*;
import java.io.*;

public class Client {

    // constructor to put ip address and port
    public Client(String address, int port)
    {
        // establish a connection
        DataInputStream input = null;
        Socket socket = null;
        DataOutputStream out = null;
        try
        {
            socket = new Socket(address, port);
            System.out.println("Connected");

            // takes input from terminal
            input = new DataInputStream(System.in);

            // sends output to the socket
            out = new DataOutputStream(socket.getOutputStream());
        } catch(IOException u)
        {
            System.out.println(u);
        }

        // string to read message from input
        String line = "";

        // keep reading until "Over" is input
        while (!line.equals("Over"))
        {
            try
            {
                if (input != null) {
                    line = input.readLine();
                }
                assert out != null;
                out.writeUTF(line);
            }
            catch(IOException i)
            {
                System.out.println(i);
            }
        }

        // close the connection
        try
        {
            input.close();
            out.close();
            socket.close();
        }
        catch(IOException i)
        {
            System.out.println(i);
        }
    }

    public static void main(String[] args)
    {
        new Client("127.0.0.1", 5000);
    }
}
