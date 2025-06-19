public class FinancialForecast 
{
     public static double CalculateFutureValue(double initialAmt,double growthRate,int years)
     {
          if(years==0)
          {
                return initialAmt;
          }
          
          return CalculateFutureValue(initialAmt,growthRate,years-1) * (1+growthRate);
     }     
     public static void main(String arr[])
     {
          double initialAmt = 10000;
          double growthRate = 0.08;
          int years = 5;

          double result = CalculateFutureValue(initialAmt,growthRate,years);
          System.out.printf("The Predicted value after %d is : %.2f",years,result);

     }
}