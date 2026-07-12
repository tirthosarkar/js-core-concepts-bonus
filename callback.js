// document.getElementById('btn').addEventListener('click', function (event) {
// });

// addEventListener('click', function (event) { })

function settleLife(name, isBCS, marriage, parti) {
  if (isBCS) {
    marriage(parti);
  }
}

// settleLife('Tomal', isBCS){
//   if (isBCS)
//     marriage(parti);
// }

function boloKobul(parti) {
  console.log('Kobul', parti);
}

settleLife('Tomal', true, boloKobul, 'nari');  //Kobul nari output
// boloKobul('pori')