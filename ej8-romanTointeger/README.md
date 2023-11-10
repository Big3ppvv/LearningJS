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

First it was made an object "MAP_VALUES" that the Keys are the roman numbers and the values the integers numbers. Next it was made a function that takes the specific roman number that we want to convert in a integer, and now it was made a new constant "separateRomanNumbers" that separate each roman number with the split method. Then it was made again a new constant and inside of it was made a map function with and if statement that verify if the "separateRomanNumbers" is inside of "MAP_VALUES".
And finally it was made a new constant with a reduce method and an if statement that verify if the number in the actual position and the next one is higher than the current number return the total -  the current number, and if isn't correct return the total + the current number and by the end return the total




