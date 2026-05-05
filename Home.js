const btn = document.getElementById("themeToggle");

// 1. التحقق من التفضيل المحفوظ عند تحميل الصفحة
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
} else {
  // التأكد من أن المود الفاتح هو الافتراضي إذا لم يوجد تفضيل
  document.body.classList.remove("dark-mode");
}

// 2. مستمع الحدث للزر
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // 3. حفظ الاختيار الجديد
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});