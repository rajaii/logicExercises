//from leetcode medium https://leetcode.com/problems/validate-ip-address/

var validIPAddress = function(IP) {
    //set booleans to run if make through loops to indicate what to return
    let ipv4 = false;
    let ipv6 = false;
    
    //check if is of the form v4 and split it up if so to loop, if not return Neither
    if (IP.includes('.') && !IP.includes(':')) {
        let ip = IP.split('.');
        if (ip.length != 4) {
            return 'Neither'
        } else {
            //loop ip seeing that each ip[i] matches the proper form to be in an IPv4                   //address
            for (let i = 0; i < ip.length; i++) {
                //check for anything but digits
                if (ip[i].search(/\D+/) != -1) {
                    return 'Neither';
                } else {
                    //check for leading 0's or improperly placed 0's ie. 00
                    if ((ip[i][0] === '0' && ip[i][1] != '0') || (ip[i][0] === '0' && ip[i][1] === '0' && ip[i][2] != 0) || (ip[i][0] === '0' && ip[i][1] === '0' && ip[i][2] === undefined) || (ip[i][0] === '0' && ip[i][1] === '0' && ip[i][2] === '0')) {
                        return 'Neither';
                    } else {
                       //check to see if they 0 <= ip[i] <= 255
                        if (parseInt(ip[i]) >= 0 && parseInt(ip[i]) <= 255 && i != ip.length -1) {
                            continue;
                        } else if (parseInt(ip[i]) >= 0 && parseInt(ip[i]) <= 255 && i === ip.length -1) {
                            ipv4 = true;
                        } else {
                            return "Neither";
                        }
                    }
                    
                }
            }
            
            if (ipv4) {
                return 'IPv4';
            }
              
        }
    }
    
    //check if is of the form v6 and split it up if so to loop, if not return Neither
    else if (IP.includes(':') && !IP.includes('.')) {
             let ip = IP.split(':');
             if (ip.length != 8) {
                 return 'Neither';
             } else {
                //loop ip seeing that each ip[i] matches the proper form to be in an IPv6                   //address
                for (let i = 0; i < ip.length; i++) {
                    //check if each ip[i] is of proper length
                    if (ip[i].length < 1 || ip[i].length > 4) {
                        return 'Neither';
                    } else {
                        ////!!!!!!!!!!!!!!!!!!!!!
                        //if ip[i] has anything but numbers or letters a-f return Neither
                        if (ip[i].search(/[g-z]/) != -1 || ip[i].search(/\W+/) != -1 || ip[i].search(/[G-Z]/) != -1) {
                            return 'Neither'
                        } else if (i === ip.length - 1) {
                            ipv6 = true;
                        } else {
                            continue;
                        }
                    }
                }
                 if (ipv6) {
                     return 'IPv6';
                 }
             }
             }
    
    //if is not of the form ipv4 or ipv6 return Neither
    else {
        return 'Neither'
    }
    




//else if i === ip.length - 1 ipv6 = true
//else continue

//if ipv6
//return 'IPv6'


//else 
//return 'Neither'
};

//?'s: limits on time/space complexity, limits on 
//edge cases: all 0 in ipv6, empty string, string.length != what it shoud be for either,
//has . and : in it

//PSEUDO
//find if the IP is of valid form regarding the : vs .
//then split on the . or : thus checking the length to make sure it is valid
//use if for .  and ipv4, else if for : and ipv6 and else for neither:

//set ipv4 = false
//set ipv6 = false
//if IP.includes('.') && !IP.includes(':')
//  let ip = IP.split('.')
//  if ip.length != 4
//      return 'Neither'
//  else:
//  
//for ipv4 if length is proper:
//loop ip
//seach ip[i] for (using.search) anything but numbers 
//if ip[i].search(/\D+/) != -1 return 'Neither'

//else
//search for leading 0's
//if ip[i] has leading 0's return 'Neither' ????: V
    //if (ip[i][0] === '0' && ip[i][1] != '0') || (ip[i][0] === '0' && ip[i][1] === '0' &&
//ip[i][2] != 0) || (ip[i][0] === '0' && ip[i][1] === '0' && ip[i][2] === undefined) || (
//(ip[i][0] === '0' && ip[i][1] === '0' && ip[i][2] === '0')

//else 
//if parseInt(ip[i]) >= 0 && paseInt(ip[i]) <= 255 && i != ip.length -1 ==> continue
//else if parseInt(ip[i]) >= 0 && paseInt(ip[i]) <= 255 && i === ip.length -1
//ipv4 = true
//else return 'Neither'

// if ipv4 
//return 'IPv4'

//else if IP.includes(':') && !IP.includes('.')
//  let ip = IP.split(':');
//  if ip.length != 8
//      return 'Neither
//  else:
//
//for ipv6 if length is proper
//loop ip
//if ip[i].length < 1 || ip[i].length > 4 return 'Neither'
//else
//if ip[i] has anything but numbers or letters a-f return 'Neither' ????:
    //ip[i].search() 
//else if i === ip.length - 1 ipv6 = true
//else continue

//if ipv6
//return 'IPv6'


//else 
//return 'Neither'