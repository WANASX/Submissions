0 select * from students

1 select name from students

2 SELECT * FROM students WHERE Age > 30;

3 SELECT * FROM students WHERE Age BETWEEN 30 and 40 
AND Gender = 'F';

4 SELECT name, Points FROM students WHERE name LIKE ('Alex');

5 INSERT INTO students
VALUES (8, anas, Age, Gender,Points); 

6 UPDATE students SET Points = 400 WHERE Name='Basma';
7 UPDATE students SET Points = 200 WHERE Name='Alex'; 


1 - CREATE TABLE "graduates" ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Name` TEXT NOT NULL UNIQUE, `Age` TEXT, `Gender` TEXT, `Points` INTEGER )

2 - INSERT INTO graduates (Name, Age, Gender,Points) SELECT Name, Age, Gender, Points FROM students where Name='Layal';

3 - delete from students where Name='Layal'


1 - CREATE TABLE "ProduceTable" ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Name` TEXT NOT NULL UNIQUE, `Company` TEXT,`CompanyDate` date )

   1.1 - insert into ProduceTable (Name, Company, CompanyDate) select  e.Name, e.Company,c.Date 
          from employees e,companies c where e.Company =c.Name
