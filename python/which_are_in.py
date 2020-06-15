#from codewars 6kyu https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/python

def in_array(a1, a2):
    
    ret_a = []
    
    for i in range(len(a1)): 
    
        for j in range(len(a2)):
        
            if a1[i] in a2[j] and a1[i] not in ret_a:
            
                ret_a.append(a1[i])
                
            else:
            
                continue
    
    ret_a.sort()
    
    return ret_a
    
#?'s limitations on time/space; limitations on the input arrays, empty stings?  how handle?
# edge cases empty input either, return []


#loop through array 1 and a2 and check if a[i] in a2[j]
#if so push a[i] into ret_arr 
# esle: continue

#a1 = ["arp", "live", "strong"]
#a2 = ["lively", "alive", "harp", "sharp", "armstrong"]