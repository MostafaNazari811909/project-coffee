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
const Cart = document.querySelector(".cart-mobile");
const Overlay = document.querySelector(".overlay");
const OverlayP = document.querySelector(".overlay-p");
const CloseBtn = document.querySelector(".close-btn");
const CloseProduct = document.querySelector(".close-product");
const OpenProduct = document.querySelector(".open-product"); 

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

// NavOpen.addEventListener("click", function()
// {
//     Nav.classList.remove("-right-64");
//     Nav.classList.add("right-0");
//     Overlay.classList.add("overlay--active");
// });
// CloseBtn.addEventListener("click", function(){
// Nav.classList.add("-right-64");
//     Nav.classList.remove("right-0");
//     Overlay.classList.remove("overlay--active");
// });
// Overlay.addEventListener("click", function(){
// Nav.classList.add("-right-64");
//     Nav.classList.remove("left-0");
//     Overlay.classList.remove("overlay--active");

// });
// OverlayP.addEventListener("click", function(){
// Cart.classList.add("-left-64");
//     Cart.classList.remove("right-0");
//     Overlay.classList.remove("overlay--active_p");

// });
// OpenProduct.addEventListener("click", function()
// {
//     Cart.classList.remove("-left-64");
//     Cart.classList.add("left-0");
//     Overlay.classList.add("overlay--active_p");
// });
// CloseProduct.addEventListener("click", function(){
// Cart.classList.add("-left-64");
//     Cart.classList.remove("left-0");
//     Overlay.classList.remove("overlay--active_p");
// });
NavOpen.addEventListener("click", function() {
    Nav.classList.remove("-right-64");
    Nav.classList.add("right-0");
    Overlay.classList.add("overlay--active");
    Overlay.dataset.target = "nav"; // 🔹 گفتیم الان Nav بازه
});
CloseBtn.addEventListener("click", function(){
Nav.classList.add("-right-64");
    Nav.classList.remove("right-0");
    Overlay.classList.remove("overlay--active");
});
CloseProduct.addEventListener("click", function(){
Cart.classList.add("-left-64");
    Cart.classList.remove("left-0");
    Overlay.classList.remove("overlay--active_p");
});

OpenProduct.addEventListener("click", function() {
    Cart.classList.remove("-left-64");
    Cart.classList.add("left-0");
    Overlay.classList.add("overlay--active");
    Overlay.dataset.target = "cart"; // 🔹 گفتیم الان Cart بازه
});

Overlay.addEventListener("click", function() {
    if (Overlay.dataset.target == "nav") {
        Nav.classList.add("-right-64");
        Nav.classList.remove("right-0");
    } else if (Overlay.dataset.target == "cart") {
        Cart.classList.add("-left-64");
        Cart.classList.remove("left-0");
    }
    Overlay.classList.remove("overlay--active");
    delete Overlay.dataset.target; // ریست کنیم
});

Overlay.addEventListener("click", function(){
    if(Overlay.dataset.target){}
});
