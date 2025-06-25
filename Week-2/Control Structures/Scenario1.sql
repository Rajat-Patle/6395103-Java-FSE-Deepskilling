BEGIN
    FOR c IN (
        SELECT c.CustomerID, l.LoanID, l.InterestRate, c.DOB
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
    ) LOOP
        IF MONTHS_BETWEEN(SYSDATE, c.DOB) / 12 > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = c.LoanID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

Select * from Loans;
Select * from CUSTOMERS;

SELECT LoanID, CustomerID, InterestRate FROM Loans;

DELETE from Customers where CustomerID = 3;