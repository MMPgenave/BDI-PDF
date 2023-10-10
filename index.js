// change the quadruble items color
const itemsInQuadruble = document.querySelectorAll(
  ".quadruple-container .body div div"
);
for (let i = 0; i < itemsInQuadruble.length; i++) {
  if (itemsInQuadruble[i].classList.contains("active")) {
    for (
      let j = 0;
      j < itemsInQuadruble[i].previousSibling.previousSibling.children.length;
      j++
    ) {
      itemsInQuadruble[i].previousSibling.previousSibling.children[
        j
      ].style.fill = "#2EBB9D";
    }
  }
}

// set the direction (ltr or rtl) of green progress bar
const rightValue = document.querySelectorAll(
  ".introvert-extrovert-container .body .right"
);

const leftValue = document.querySelectorAll(
  ".introvert-extrovert-container .body .left"
);

const progressbars = document.querySelectorAll(
  ".introvert-extrovert-container .body .progressbar"
);

const greenBars = document.querySelectorAll(
  ".introvert-extrovert-container .body .progressbar div"
);


for (let i = 0; i < rightValue.length; i++) {
  let max = 0;
  let rightNumber = Number(
    rightValue[i].children[1].innerHTML.replace("%", "")
  );
  let leftNumber = Number(leftValue[i].children[1].innerHTML.replace("%", ""));

  if (rightNumber > leftNumber) {
    console.log(" rightNumber is big");
    max = rightNumber;
    progressbars[i].style.justifyContent = "start";
  } else {
    console.log(" leftNumber is big");
    max = leftNumber;
    progressbars[i].style.justifyContent = "end";
  }
  console.log( max);
  greenBars[i].style.width = max + '%';
}
