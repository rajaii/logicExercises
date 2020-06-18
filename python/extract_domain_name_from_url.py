#from codewars 5kyu https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python

def domain_name(url):
    
    ret_str = ''
    
    for i in range(len(url)): 

        if url[0:4] != 'www.' and url[0:5] != 'http:' and url[0:5] != 'https':

            sub_url = url

        elif url[i-2: i] == '//' and url[i: i+4] != 'www.':

            sub_url = url[i:]

        elif url[i-4: i] == 'www.':

            sub_url = url[i:]
    
    for i in range(len(sub_url)):

        if sub_url[i] == '.':

            break

        else:

            ret_str += sub_url[i]

    return ret_str
    
    

#?'s formats of url?  memory, space limits, 
#edge cases: prob not on this one

#ret_str
#loop through url
#after www. or // append all i before . account for //www. as well
    #if i - 1 == '/' and i-2 == '/'
#split to end loop through appending until .