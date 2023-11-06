# Exercise 8

## Problem

It is necessary to create a function that can convert a Roman number to a Integer number. 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

## Solution

It`s was made a funtion that takes a "list of strings" that represent a Roman Number. Thenit was created a hash map that represent tha roman number and the numeric value, and with the split method it was separated the list of strings, and changed the value of the list with the value of the object, all with a map function. Next it was made a reduce method that can rest the next element of the list and the actual , and finally sum all the rest ans return the complete number



