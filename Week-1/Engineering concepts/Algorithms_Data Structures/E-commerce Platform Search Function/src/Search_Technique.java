public class Search_Technique 
{
     public static Product lineraSearch(Product products[],int targetId)
     {
         for(Product p : products)
         {
              if(p.productId == targetId)
              {
                    return p;
              }
         }  

         return null;
     }

     public static Product binarySearch(Product products[],int targetId)
     {
          int n = products.length;
          int low = 0,high = n-1;
          
          
          while(low<=high)
          {
               int mid = low+(high-low)/2; 
               if(products[mid].productId == targetId)
               {
                    return products[mid];
               }
               else if(products[mid].productId < targetId)
               {
                    low = mid+1;
               }
               else
               {
                    high = mid-1;
               }
          }
          return null;
     }
}
