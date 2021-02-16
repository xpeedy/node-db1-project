-- Database Queries
   
-- Find all customers with postal code 1010
    SELECT * FROM [Customers] where postalcode like 1010
-- Find the phone number for the supplier with the id 11
    SELECT phone FROM [Suppliers] where supplierID = 14
-- List first 10 orders placed, sorted descending by the order date
    SELECT * FROM [Orders] order by orderdate desc limit 10
-- Find all customers that live in London, Madrid, or Brazil
    SELECT * FROM [Customers] where country = "Brazil" or (city ="London" or city="Madrid")
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
    insert into customers (customername,contactname,address,city,postalcode,country)
    values ("The Shire","Bilbo Baggins","Hobbit-Hole", "Bag End","111","Middle Earth")
-- Update Bilbo Baggins record so that the postal code changes to "11122"
    update customers set postalcode = "11122" where contactname = "Bilbo Baggings"
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
