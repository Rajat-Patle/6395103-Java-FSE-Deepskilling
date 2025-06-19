public class Logger {
      
      private static Logger L = new Logger();

      private Logger()
      {
          System.out.println("Logger Instance Created");
      }

      public static Logger getInstance()
      {
          return L; 
      }

      public void log(String message)
      {
          System.out.println("Log : " +message);
      }
}
