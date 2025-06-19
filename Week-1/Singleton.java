public class Singleton
{
     private static Singleton SI = new Singleton();

     private Singleton()
     {
          System.out.println("Singleton Instance is Created!");
     }

     public static Singleton getInstance()
     {
          return SI;
     }

     public void showMessage()
     {
          System.out.println("Hello");
     }
     public static void main(String arr[])
     {
          Singleton s1 = Singleton.getInstance(); 
          Singleton s2 = Singleton.getInstance(); 

          s1.showMessage();

          if(s1 == s2)
          {
               System.out.println("Both the Ojects are of same instance");
          }
          else
          {
               System.out.println("They are Different!");
          }
     }
}