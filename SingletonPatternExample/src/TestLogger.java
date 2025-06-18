public class TestLogger {
    public static void main(String arr[])
    {
          Logger logger1 = Logger.getInstance();
          Logger logger2 = Logger.getInstance();

          logger1.log("First log message");
          logger2.log("Second log message");

          if(logger1 == logger2)
          {
                System.out.println("Both the logger1 and logger2 are the same instance"); 
          }
          else
          {
                System.out.println("Both the instance is different");
          }
    }      
}
