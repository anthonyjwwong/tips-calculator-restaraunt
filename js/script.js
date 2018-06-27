console.log("this is tip calculator brah")
const submit = document.getElementById('submit');


const splitBill = (total, pax) => {
  return Math.round( (total / pax) * 100) / 100;
};

const getTipsAmount = (total, tipPercent) => {
  return Math.round((total * (tipPercent / 100))* 100) / 100;
};



submit.addEventListener('click', function(e) {
  //DOM SELECTORS FOR INPUTS FOR TIPS, PAX, TOTAL.
  const totalBillAmount = document.getElementById('total');
  const numberOfPeople = document.getElementById('people');
  const tipsAmount = document.querySelector('#tips');

  //DOM SELECTOR OUTPUT FOR TIPS, PAX, TOTAL.
  let splitOutput = document.querySelector('.split-output');
  let tipsOutput = document.querySelector('.tips-output');
  let totalWTips = document.querySelector('.total-with-tips');

  //AMOUNT SPLIT WITHOUT TIPS.
  let amountSplitted = splitBill(parseInt(totalBillAmount.value), parseInt(numberOfPeople.value));
  //PURELY TIPS AMOUNT
  let totaltips = getTipsAmount(parseInt(totalBillAmount.value), parseInt(tipsAmount.value));
  //Tips split w/ amount of people
  let splitTips = Math.round((totaltips/parseInt(numberOfPeople.value)) * 100) / 100;
  //TIPS AND TOTAL ADDED
  let totalPlusTips = amountSplitted + splitTips;

  splitOutput.innerHTML = `$ ${amountSplitted}`;
  tipsOutput.innerHTML =  `$ ${splitTips}`;
  totalWTips.innerHTML = `$ ${totalPlusTips}`;

  e.preventDefault();
});
