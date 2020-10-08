#from codewars 5kyu https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/python

def beeramid(bonus, price): 
    #handle edge case:
    if bonus < price:
        return 0
    elif bonus == price:
        return 1

    #set variable to tag the amount of cans afforded
    beer_afforded = int(bonus // price)
    
    #loop to beer_afforded, returning i if beer_afforded == i **2, or i - 1 if beer-afforded
    #< i ** 2.  otherwise set beer_afforded to  beer_afforded - i ** 2
    for i in range(beer_afforded):
        if beer_afforded == i ** 2:
            return i
        elif beer_afforded < i ** 2:
            return i - 1
        else:
            beer_afforded -= i ** 2
    

#PSEUDO/planning:  
#Questions: limits on inputs hence assume no weird edge cases that make no sense ie. V,?
#limitson time/space? no partial cans, all whole? 
#edge cases: bonus < price, bonus == 0, price == 0

#750
#i == 1 => 750 -2 == 748 == beer_afforded
#i == 2; 748 - 4 = 744
#3; 744 - 9 = 735
#4; 735 - 16 = 719
#5; 719 - 25 = 694
#6; 694 - 36 = 658
#7; 658 - 49 = 609
#8; 609 - 64 = 545
#9; 545 - 81 = 464
#10; 464 - 100 = 364
#11; 364 - 121 = 243
#12; 243 - 144 = 99

#set beer_afforded = bonus / price
#loop up to beer_afforded
#if beer_afforded < i ** 2:
#    return i - 1
#elif beer_afforded == i ** 2:
#    return i
#for each i subtract i ** 2 from beer_afforded
#