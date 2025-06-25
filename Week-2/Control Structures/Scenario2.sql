Alter table Customers ADD IsVIP Varchar2(5);


select * from CUSTOMERS;

BEGIN
    FOR c IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;
    
    COMMIT;
END;
/


SELECT CustomerID, Name, Balance, IsVIP FROM Customers;
