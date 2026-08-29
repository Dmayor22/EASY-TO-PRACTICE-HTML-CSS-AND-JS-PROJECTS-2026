// variables
const date = document.getElementById("date");
const copyBtn = document.getElementById("coupon_copycode");
const couponCode = document.getElementById("coupon_code");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(couponCode.innerHTML);

  copyBtn.innerHTML = "COPIED";

  setTimeout(() => {
    copyBtn.innerHTML = "COPY CODE";
  }, 1000);
});
