# Exercise 9

## Problem

It's necesary to create a function that takes two parameters one is the Array with numbers and the other is maximum amount of numbers inside of the batches.

## Solution

It was made two constants "list" and "number", "list" it's an Array with numbers and "number" is the quantity of numbers that will been inside of the batches.
Then it was created a function that takes the constants, and after it was made a for loop that starts iterating over the list, inside of the for loop was made a new const named "emptyBatch" and two "if statements" one for verify if the emptyBatch is empty and if is correct add a empty brachet with the push method, and the other verify if the initialized "let i" and the "number" parameter divided leave remainder 0,if is correct again add a empty brachet and inside of the empty brachet created add the numbers inside of the list parameter. But if none of this staments is correct add the numbers corresponding to the list position and finally return the emptyBatch