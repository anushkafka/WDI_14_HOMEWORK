var savingInput = document.querySelector('.s-box');
var saveWithdrawBtn = document.querySelector('#s-withdraw');
var saveDepositBtn = document.querySelector('#s-deposit');
var savingsTot = Number(document.querySelector('.s-total').textContent);

var checkInput = document.querySelector('.c-box');
var checkWithdrawBtn = document.querySelector('#c-withdraw');
var checkDepositBtn = document.querySelector('#c-deposit');
var checkTot = Number(document.querySelector('.c-total').textContent);

function add(input, flag) {
  switch (flag) {
    case 'save':
      savingsTot = savingsTot + input;
      setBackground(flag);
      editDom('.s', savingsTot);
      break;

    case 'check':
      checkTot = checkTot + input;
      setBackground(flag);
      editDom('.c', checkTot);
      console.log('c')
  }
}
function subtract(input, flag) {
  switch (flag) {
    case 'save':
      if (savingsTot >= input) {
        savingsTot = savingsTot - input;
      }
      setBackground(flag);
      editDom('.s', savingsTot);
      break;
    case 'check':
      if (checkTot >= input) {
        checkTot = checkTot - input;
        setBackground(flag);
        editDom('.c', checkTot);
      } else if (checkTot + savingsTot >= input) {
        savingsTot = savingsTot - (input - checkTot);
        checkTot = 0;
        setBackground('check');
        setBackground('save');
        editDom('.c', checkTot);
        editDom('.s', savingsTot);
      }
  }
}
function editDom(tag, total) {
  document.querySelector(tag + '-box').value = '';
  document.querySelector(tag + '-total').textContent = total;
}
function setBackground(flag) {
  switch (flag) {
    case 'save':
      if (savingsTot > 0) {
        document.querySelector('.block1').classList.add('block-grey');
      } else {
        document.querySelector('.block1').classList.remove('block-grey');
      }
    case 'check':
      if (checkTot > 0) {
        document.querySelector('.block2').classList.add('block-grey');
      } else {
        document.querySelector('.block2').classList.remove('block-grey');
      }
  }
}

saveDepositBtn.addEventListener('click', () => {
  add(Number(savingInput.value), 'save');
});
checkDepositBtn.addEventListener('click', () => {
  add(Number(checkInput.value), 'check');
});
saveWithdrawBtn.addEventListener('click', () => {
  subtract(Number(savingInput.value), 'save');
});
checkWithdrawBtn.addEventListener('click', () => {
  subtract(Number(checkInput.value), 'check');
});



