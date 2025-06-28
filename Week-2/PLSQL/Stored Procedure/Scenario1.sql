CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
    AS
BEGIN
    UPDATE ACCOUNTS set Balance = Balance + (Balance * 0.1) WHERE 
    ACCOUNTTYPE = 'Savings';
    if(SQL%FOUND) THEN
        dbms_output.PUT_LINE('Data Updated Successfully');
    end if;

    if(SQL%NOTFOUND) THEN
        dbms_output.PUT_LINE('Data Not Found');
    end if;
    COMMIT;
END;

BEGIN
    ProcessMonthlyInterest;
END;
select * from Accounts where ACCOUNTTYPE = 'Savings';