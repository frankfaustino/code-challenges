# Source : Sum of a Beach
# Author : Frank Faustino
# Date   : 2018-07-03
# Lang   : Python

def sum_of_a_beach(beach):
    return sum(map(beach.lower().count, ('fish', 'sand', 'sun', 'water')))
