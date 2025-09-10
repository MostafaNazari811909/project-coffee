const toggleThemeBtns = document.querySelectorAll(".theme-toggle");
// const SubmenuOpenBtn = document.querySelector(".submenu-open-btn");
// const Submenu = document.querySelector(".submenu");

// SubmenuOpenBtn.addEventListener("click", function(){
//     Submenu.classList.toggle(".submenu--open");
// });
const SubmenuOpenBtn = document.querySelector(".submenu-open-btn");
const Submenu = document.querySelector(".submenu");
const NavOpen = document.querySelector(".nav-icon");
const Nav = document.querySelector(".nav-mobile");
const Overlay = document.querySelector(".overlay");
const CloseBtn = document.querySelector(".close-btn");

SubmenuOpenBtn.addEventListener("click", function(e){
    // console.log(e.currentTarget.parentElement);
    // وقتی می‌خوای به عنصر اصلی که رویداد براش ثبت شده دسترسی داشته باشی → currentTarget
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    Submenu.classList.toggle("submenu--open");
});
// forEach متدی است که روی هر عضو آرایه یکی‌یکی یک تابع اجرا می‌کند.
// let number=[1,2,3,4,5];
// number.forEach(function(number){
//     console.log(number)
// })
// for (let i=0; i<number.length; i++)
// {
//     console.log(number[i]);
// }
toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function(){
         if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
    })
    
});
// localStorage چیه؟

// یک فضای ذخیره‌سازی داخل مرورگر هر کاربره.

// می‌تونی داخلش کلید (key) و مقدار (value) ذخیره کنی.

// داده‌هاش تا وقتی کاربر مرورگر رو پاک نکنه باقی می‌مونه (مثل کوکی‌ها ولی ساده‌تر).

NavOpen.addEventListener("click", function()
{
    Nav.classList.remove("-right-64");
    Nav.classList.add("right-0");
    Overlay.classList.add("overlay--active");
});
CloseBtn.addEventListener("click", function(){
Nav.classList.add("-right-64");
    Nav.classList.remove("right-0");
    Overlay.classList.remove("overlay--active");
});
Overlay.addEventListener("click", function(){
Nav.classList.add("-right-64");
    Nav.classList.remove("right-0");
    Overlay.classList.remove("overlay--active");
});