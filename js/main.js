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


  window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // 現在のページのURLパスを取得（例: "/routine.html"）
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      // リンクのhref属性を取得
      const href = link.getAttribute('href');

      // 現在のパスがリンク先を含んでいるかチェック
      // ※ index.html の場合はパスが "/" になることがあるので注意
      if (currentPath.endsWith(href)) {
        link.parentNode.classList.add('current');
      } else {
        link.parentNode.classList.remove('current');
      }
    });
  });


}