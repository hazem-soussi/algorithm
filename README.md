# algorithm

Exercise 2 ( Algorithm )

In an array containing only zeros and ones, find the index of the 0 which, if converted to 1, will make the longest sequence of the number 1.
For example, this array:
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
Replacing zero at index 10 (counting from 0) forms a sequence of 9 units:
[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
                  '------------^------------'


Your task is to create a function that determines where to replace a 0 with a 1 to make a sequence of maximum length.
Notes:
If there are multiple results, return the last one:
Example: [1, 1, 0, 1, 1, 0, 1, 1] ==> 5
The array will only contain zeros and ones.
Within the context of this exercise:
Typescript MUST be used and no other technology.
An autonomous program is required (it is not required to build a library, or a webservice, or other...). 
The array to be used can be provided on the command line, as a program call argument (process.argv). 
It is not required to provide a graphical interface or a web interface. 
In terms of deliverables, we want to see the source code, we should be able to run a “yarn exec 1,0,0,1,0,1” and the result is displayed in the console. 
You can add any other element that you deem useful in addition to the source code (tests, documentation, ...) 

Here are some test examples: 

[1,0,0,1] must return 2
[1,0,0,0] must return 1
[0,0,0,0] must return 3
[0,1,0,1,0,1] must return 4
[0,0,0,0,0,1] must return 4
[0,0,0,0,1,1] must return 3
[0,0,0,1,0,1] must return 4
[1,1,0,1,1,0,1,1] must return 5
[1,1,1,0,0,1,0,0,1,1] must return 3
[1,1,1,0,1,1,0,1,1,1] must return 6
[1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1] must return 10
