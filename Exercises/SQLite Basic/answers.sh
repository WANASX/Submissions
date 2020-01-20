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

