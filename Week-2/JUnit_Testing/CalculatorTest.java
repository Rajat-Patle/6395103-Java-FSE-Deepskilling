import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testSquare() {
        Calculator c = new Calculator();
        int result = c.square(8);
        Assert.assertEquals(64, result);  
    }
}
