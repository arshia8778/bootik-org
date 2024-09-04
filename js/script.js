var $ = document;
var user_section = $.getElementById("user-section");
var cart_number = $.getElementById("carts-number");
var fav_number = $.getElementById("fav-number");
var sign_up_section = $.getElementById("sign-up-section");
var sign_up_section_btn = $.getElementById("sign-up-section-btn");
var sign_up_close_btn = $.getElementById("sign-up-close-btn");
var login_section = $.getElementById("login-section");
var login_section_btn = $.getElementById("login-section-btn");
var login_close_btn = $.getElementById("login-close-btn");
var product_section_all = $.getElementById("product-section-all");
var product_back_btn = $.getElementById("back-carts");
var product_section_btn = $.getElementById("product-section-btn");

window.onscroll = function () {
  const button = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = "block"; //اگر اسکرول بیشتر از 100 باشد دکمه ظاهر میشود
  } else {
    button.style.display = "none";
  }
};

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({
    //با کلیک بر روی دکمه به اول صفحه برمیگردد
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    //هنگام اسکرول بخش یوزر به بالای سایت میچسبد
    user_section.style.top = "0";
  } else {
    user_section.style.top = "55px";
  }
});

login_section_btn.addEventListener("click", () => {
  login_section.style.display = "block";
});
login_close_btn.addEventListener("click", () => {
  login_section.style.display = "none";
});
sign_up_close_btn.addEventListener("click", () => {
  sign_up_section.style.display = "none";
});
sign_up_section_btn.addEventListener("click", () => {
  sign_up_section.style.display = "block";
});

product_section_btn.addEventListener("click", () => {
  product_section_all.style.display = "block";
});

product_back_btn.addEventListener("click", () => {
  product_section_all.style.display = "none";
});

var cartNumber = 0;
function addCart() {
  cartNumber++;
  cart_number.innerHTML = cartNumber;
}
var favNumber = 0;
function AddFavCart() {
  favNumber++;
  fav_number.innerHTML = favNumber;
}
var swiper = new Swiper(".swiper-container", {
  //کدهای اسلایدر سویپر
  loop: true, //مدام تکرار شود
  centeredSlides: true, //سنتر کردن اسلایدر
  spaceBetween: 20, //فاصله بین اسلاید ها
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    //دکمه های بعدی و قبلی
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    //تعداد اسلاید ها در اندازه صفحات
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    //با کلیک بر هر آیتم کلاس active به ان اضافه میشه
    item.classList.toggle("active");
  });
});
