'use strict';

{
  const toast = document.querySelector("#toast");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  document.querySelectorAll(".copyable li span").forEach(item => {
    item.addEventListener("click", () => {
      navigator.clipboard.writeText(item.textContent);
      showToast("コピーしました ✅");
    });
  });
}