# MontyHallProblemSimulator

# Description of the problem:
# The Monty Hall problem is a famous probability puzzle named after the "Let's Make a Deal" game show host Monty Hall. 
The scenario involves a contestant who is presented with three doors: behind one is a car and behind the other two are goats. 
The contestant chooses one of the doors in an attempt to find the car. 
Then, the host, who knows what is behind each door, opens one of the other two doors to reveal a goat. 
The contestant is asked whether they would like to stick with their original choice or switch to the remaining unopened door.

# The simulation allows the user to play as the contestant and see whether they win more often when switching doors or sticking to their original choice. 

# Logic behind the solution: 
# By calculating the probablities, the contestant has a higher change of winning when switching doors.
The probability that the car is behind the door the contestant initially chooses is 1/3 while the probability the car is behind one of the other two doors is 2/3.
When Monty opens one of the other two door, the probability of 2/3 concentrates on the remaining door. 
Thus, the contestant has a 2/3 chance of winning the car when switching which is twice as high as their initial probability of 1/3. 
