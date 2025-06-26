CREATE OR REPLACE PROCEDURE TransferFunds(
    SourceAccno IN NUMBER,
    Camount     IN NUMBER,
    DestAccno   IN NUMBER
)
IS
    Cbalance NUMBER;
BEGIN
    IF Camount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Amount must be greater than 0');
    END IF;

    SELECT Balance INTO Cbalance
    FROM ACCOUNTS
    WHERE ACCOUNTID = SourceAccno;
    EXCEPTION
        WHEN No_DATA_FOUND then
            dbms_output.PUT_LINE('No Data Presnet in Database'); 


    IF Cbalance < Camount THEN
        RAISE_APPLICATION_ERROR(-20002, 'You have insufficient balance: ' || Cbalance);
    END IF;


    UPDATE ACCOUNTS
    SET Balance = Balance - Camount,
        LastModified = SYSDATE
    WHERE ACCOUNTID = SourceAccno;


    UPDATE ACCOUNTS
    SET Balance = Balance + Camount,
        LastModified = SYSDATE
    WHERE ACCOUNTID = DestAccno;


    COMMIT;
END;
/

BEGIN 
    TRANSFERFUNDS(90,200,2);
END;

SELECT * FROM ACCOUNTS;