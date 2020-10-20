//from leetcode easy: https://leetcode.com/problems/subdomain-visit-count/

var subdomainVisits = function(cpd) {
    //set array to push results in and objects to count subdomains in 
    let retArr = [];
    let subs = {};
    let dubSubs = {};
    
    //handle the domains with 2 subdomains by looping cpd and pushing into retArr those only
    for (let i = 0; i < cpd.length; i++) {
        let d = cpd[i].split(' ')[1].split('.');
        let c = cpd[i].split(' ')[0];
        
        if (d.length === 3) {
            retArr.push(cpd[i]);
        }
    }
    
         
    //handle the subdomains by looping and splitting and counting in subs the count for         //every domain's last sub
    for (let i = 0; i < cpd.length; i++) {
        let d = cpd[i].split(' ')[1].split('.');
        let c = cpd[i].split(' ')[0];
        
        if (subs[d[d.length -1]] === undefined) {
            subs[d[d.length -1]] = parseInt(c, 10);
        } else {
            subs[d[d.length -1]] += parseInt(c, 10);
        }
    }
    
    //Loop subs and push into the retArr a string that has `${subs[i]} ${key}`
    for (let key in subs) {
        retArr.push(`${subs[key]} ${key}`) 
    }
    
    
    //handle the mid-subdomain by looping cpd and using dubSubs obj with control logic to       //count on all cpd[i]'s that have a domain with 1 or 2 subs. 
    for (let i = 0; i < cpd.length; i++) {
        let d = cpd[i].split(' ')[1].split('.');
        let c = cpd[i].split(' ')[0];
        
        if (d.length === 3) {
            if (dubSubs[`${d[1]}.${d[2]}`] === undefined) {
                dubSubs[`${d[1]}.${d[2]}`] = parseInt(c, 10);
            } else {
                dubSubs[`${d[1]}.${d[2]}`] += parseInt(c, 10);
            }
        } else if (d.length === 2) {
            if (dubSubs[`${d[0]}.${d[1]}`] === undefined) {
                dubSubs[`${d[0]}.${d[1]}`] = parseInt(c, 10);
            } else {
                dubSubs[`${d[0]}.${d[1]}`] += parseInt(c, 10);
            }
        } else {
            continue;
        }
    }
       
    //loop dubSubs and push into retArr `${dubSubs[i]} ${key}`
    for (let key in dubSubs) {
        retArr.push(`${dubSubs[key]} ${key}`) 
    }
      
    return retArr     
};

//?'s:
//edge cases: 1 cp domain, mulitiples of the same one

//PSEUDO:
//set retArr = []
//let subs = {}
//let dubSubs = {}

//in loops define V
//let d = cpd[i].split(' ')[1].split('.')
//let c = cpd[i].split(' ')[0]

//handle the ones with 2 periods
//loop cpd if d.length === 3
//push cpd[i] into retArr

//handle the subdomains
//count in subs object the subdomain counts
//loop cpd and if subs[d[d.length -1]] === undefined
//subs[d[d.length -1]] = parseInt(c, 10)
//else subs[d[d.length -1]] += parseInt(c, 10)

//push into the retArr a string that has `${subs[i]} ${key}`

//handle the ones with 1 period
//loop through cpd if d.length === 3
//if dubSubs[`${d[1]}.${d[2]}`] === undefined
//dubSubs[`${d[1]}.${d[2]}`] = parseInt(c, 10)
//else 
//dubSubs[`${d[1]}.${d[2]}`] += parseInt(c, 10)

//else if d.length === 2
//if dubSubs[`${d[0]}.${d[1]}`] === undefined
//dubSubs[`${d[0]}.${d[1]}`] = parseInt(c, 10)
//else 
//dubSubs[`${d[0]}.${d[1]}`] += parseInt(c, 10)

//loop dubSubs and push into retArr `${dubSubs[i]} ${key}`

//return retArr