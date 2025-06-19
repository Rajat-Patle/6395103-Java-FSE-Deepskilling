import java.util.Arrays;
import java.util.Comparator;

public class Main_Demo 
{
     public static void main(String arr[])
     {
          Product[] products = new Product[4];
          products[0] = new Product(3,"Shoes","Fashion");
          products[1] = new Product(1,"Laptop","Electronics");
          products[2] = new Product(4,"Book","Education");
          products[3] = new Product(2,"Phone","Electronics");

          Product P1 = Search_Technique.lineraSearch(products,4);
          System.out.println("Linear Search element : "+P1);

          Arrays.sort(products,Comparator.comparingInt(p->p.productId));

          Product P2 = Search_Technique.binarySearch(products,1);
          System.out.println("Binary Search element : "+P2);
     }

}
