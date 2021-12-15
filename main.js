const btnListener = document
  .querySelector(".generate")
  .addEventListener("click", function () {
    let h = 2;
    let l = 0;
    h = document.querySelector(".higher").value || 2;
    l = document.querySelector(".lower").value || 0;
    if (h > l) {
      // Negative numbers
      if (h < 0 || l < 0) {
        document.querySelector(".random-num").textContent = Math.floor(
          Math.random() * h + 1
        );
      } else {
        // Normal numbers
        // h = higherBound, l = lowerBound
        let rng = Math.floor(Math.random() * h + 1);
        while (rng < l) {
          console.log(rng);
          rng = Math.floor(Math.random() * h + 1);
          console.log("rerun");
        }
        document.querySelector(".random-num").textContent = rng;
      }
    } else {
      document.querySelector(".random-num").textContent =
        "Higher Bound needs to be higher than Lower Bound";
    }
  });

const coinFlip = document
  .querySelector(".flipBtn")
  .addEventListener("click", function () {
    let num = Math.random();
    if (num > 0.5) {
      console.log("heads");
      // heads
    } else {
      console.log("tails");
      // tails
    }
  });
