SET SERVEROUTPUT ON;
BEGIN
    FOR l IN (
        SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name
        FROM Loans l
        JOIN Customers c ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || l.LoanID || ' for customer ' || l.Name || 
                             ' is due on ' || TO_CHAR(l.EndDate, 'DD-Mon-YYYY'));
    END LOOP;
END;
/

SELECT * FROM Loans WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30;

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (10, 'Test User', TO_DATE('1960-01-01', 'YYYY-MM-DD'), 15000, SYSDATE);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (100, 10, 50000, 7.5, SYSDATE, SYSDATE + 10);

COMMIT;



