//from codewars 4kyu https://www.codewars.com/kata/5286d92ec6b5a9045c000087/train/javascript

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    //replace %20 with spaces and set retObj to add properties to and return
    q = query.replace(/%20/g, ' ');
    let retObj = {};
    
    //set queryA to split q on &'s and loop each sub[i] setting sub by splitting on .'s running logic to 
    //add all properties to retArr start with an if to see if it contains '=', if so make
    //a subSub by splitting on the = and set subSub[0] to property and subSub[1]to value  
    // do a loop to set retObj[sub[j]]...[subSub[0]] = subSub[1]
    //using eval() run on a string that we will push all properties 
    
    let strToEval = '';
    let queryA = q.split('&');
    for (let i = 0; i < queryA.length; i++) {
      let sub = queryA[i].split('.');
      
      for (let j = 0; j < sub.length; j++) {
        
        if (sub[j].includes('=')) {
          
          let subSub = sub[j].split('=');
          
          strToEval += subSub[0];
          eval(`${strToEval} = ${subSub[1]}`)
          
        } else {
          strToEval += sub[j];
        }
      }
    }
    
    return retObj
  }
  
  //PSEUDO/Plan:
  //edge cases: empty url, simple object set up
  //?'s: limit on time, space? 
  
  //usereplace to change %20 with spaces
  //set retObj = {};
  //let queryA = q.split('&')
  //loop queryA:
  //let sub = queryA[i].split('.')
  //loop sub
  //if sub[j].includes('='):
  //  fin = sub[j].split('=')
  //  retObj[fin[0]] = fin[1];
  //retObj[sub[j]] = sub[j+1]
  //^ logic was flawed beacause did not nest properly, thought of using a queue, but then 
  //refactored to use eval run on  astring that is concatted to adding to get to 'retObj[sub[j]]...[subSub[0]] = subSub[1]'
  
  