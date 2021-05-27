//  For GreenBack.scss gb-logo-right-256:
// for right left up 1px on left and width for every 1 px width of screen size

// let width = 280;
// let left = 114;
// for (let i = 375; i < 769; i++) {
//   console.log(`@media (min-width: ${i-1}px) and (max-width: ${i + 1}px) { width: ${width}px; left: ${left}px; }`);
//   width += 1;
//   left += 1;
// }

//  for greeback.scss gb-logo-left-256:
//  for left up 1px width and top for every 1 px screen width increase, adding to top by eye sometimes as we increased
//  ie. top was changed manually to @media (min-width: 398px) and (max-width: 400px) { width: 293px; top: 425px} based on inspect element display
let width = 385; //start width
let top = 457; //start top
for (let i = 451; i < 495; i++) {
  console.log(`@media (min-width: ${i-1}px) and (max-width: ${i + 1}px) { width: ${width}px; top: ${top}px}`);
  width += 1;
  top += 1;
}





