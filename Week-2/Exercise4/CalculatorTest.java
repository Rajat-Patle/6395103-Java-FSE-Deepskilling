import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    Calculator calculator;

    @BeforeEach 
    public void setUp() {
        calculator = new Calculator(); 
        System.out.println("Setup complete");
    }

    @AfterEach  
    public void tearDown() {
        System.out.println("Teardown complete");
    }

    @Test
    public void testAdd() {
        // Act
        int result = calculator.add(10, 5);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSquare() {
        // Act
        int result = calculator.square(4);

        // Assert
        assertEquals(16, result);
    }
}
