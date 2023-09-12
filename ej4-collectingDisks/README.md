# Creating Disks

## Problem
We have a dictionary with a key-values but it's incomplete and it's neccesary to update it with new values, for that it's neccesary to create a function that takes 4 parameters. And depends to "valor" and "propiedad" parameters the function has to do a specific task.
    If "valor" === "" --> Delete property of the object. 

    If "propiedad" === "canciones" string but canciones doesn't exist --> Create new array and append the "valor" parameter.

    If "propiedad"  === "canciones" && valor !== "" --> Append the valor variable to the end of the "canciones" array.

    If "valor" !== "" && "propiedad" !== "canciones" --> object[propiedad].push(valor)

## Solution
