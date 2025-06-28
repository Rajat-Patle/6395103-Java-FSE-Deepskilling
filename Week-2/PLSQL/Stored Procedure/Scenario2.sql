CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus( E_dept IN VARCHAR2 , E_bonus IN int) 
    IS
BEGIN
    UPDATE EMPLOYEES set Salary = salary + (salary*E_bonus/100) where Department = E_dept;

    if(SQL%FOUND) THEN
        dbms_output.PUT_LINE('Data found and Updated');
    end if;

    if(SQL%NOTFOUND) THEN
        dbms_output.PUT_LINE('Data not Found');
    end if;
END;

BEGIN
    UpdateEmployeeBonus('IT',15);
END;

select * from EMPLOYEES;