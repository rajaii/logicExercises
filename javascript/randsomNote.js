//from hackerrank, easy  https://www.hackerrank.com/challenges/ctci-ransom-note

function checkMagazine(magazine, note) {

    let noteObj = {}
     for (let i = 0; i < note.length; i++) {
         if (noteObj[note[i]] === undefined) {
         noteObj[note[i]] = 1;
         } else if (noteObj[note[i]] != undefined) {
             noteObj[note[i]] += 1
         }
     }
    
     let magazineObj = {}
     for (let i = 0; i < magazine.length; i++) {
         if (noteObj[magazine[i]] != undefined && magazineObj[magazine[i]] === undefined) {
         magazineObj[magazine[i]] = 1;
         } else if (noteObj[magazine[i]] != undefined && magazineObj[magazine[i]] != undefined) {
             magazineObj[magazine[i]] += 1
         }
     }
    
    if (Object.keys(magazineObj).length === Object.keys(noteObj).length) {
        for (let key in noteObj) {
            if (noteObj[key] > magazineObj[key]) {
                console.log('No')
                return;
            }
        }
    } else {
        console.log('No');
        return;
    }
    
    console.log('Yes')
    return;
    
    
    
    
    
    }
    
    //edge cases: empty magazine or note, multiple words in note
    //?'s return or print? giving an array or an int?
    //magazineObj = {two: 1, times: 1, three: 1, is: 1, not: 1, four:1}
    //noteObj =     {two: 2, times: 1, is: 1, four:1} 
    //loop through magazine and make hastable key str value 1 to be incremented again if key 
    //loop through note and make noteObj
    //make incrementor i
    
    //loop throughnoteObj if i not in magazine obj or magazineObj[key] < noteObj then print No return
    //else if not ^ and not i === length of Object.keys(noteObj) i += 1 
    //if i === length of Object.keys(noteObj)  and  i in magazine obj and i ===magazineObj
    //console.log('Yes) return 
    
    
    //refactor: runtime exceeded:
    //make noteOBj first check if magazine in note boj then push to magazine obj
    //if length of object.keys both == each other and loop through values make sure magazine //vals greater than note
    