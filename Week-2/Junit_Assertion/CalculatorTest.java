import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testSquare() {
        Calculator calc = new Calculator();
        Assert.assertEquals(25, calc.square(5));
    }

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        Assert.assertEquals(9, calc.add(4, 5));
    }
}
