#from Codewars 5kyu: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

def move_zeros(array):
        array.sort(key=lambda item: item == 0 and not isinstance(item, bool))
        return array


#?'s limits on time or space? empty array ret arr?
#edge cases empty => return array, no 0's return array

#loop thorugh array, if a[i] === 0, array.push(array.splice(i,1)) || array.splice(i,1); array.splice(array.length-1, 0, '0')
#return array

#False seen as 0 is the problem now:
#sort setting 0's to true and everything else to lesser value