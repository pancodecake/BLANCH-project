const Projectslider = document.querySelector(".projects-slider");
let mySwiperP = new Swiper(Projectslider, {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: !0,
    slideClass: "project-slider-item ",
    wrapperClass: "projects-slider-items",
    navigation: { nextEl: ".proj-next", prevEl: ".proj-prev" },
    breakpoints: { 0: { slidesPerView: 1, spaceBetween: 30 }, 325: { slidesPerView: 2, spaceBetween: 34 }, 1030: { slidesPerView: 3, spaceBetween: 40 } },
});
function mask() {
    const t = document.querySelectorAll(".simplebar-mask");
    for (e of t) console.log(e + "hehe");
}
mask();
const heroSwiper = document.querySelector(".event-swiper");
let EventSwiper = new Swiper(heroSwiper, {
    slidesPerView: 3,
    spaceBetween: 25,
    lazy: !0,
    fade: "true",
    wrapperClass: "event-wrapper",
    navigation: { nextEl: ".event-button-next ", prevEl: ".event-button-prev" },
    pagination: { el: ".event-pagination", clickable: !0 },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 34, slidesPerGroup: 1, pagination: { el: ".event-pagination", clickable: !0 } },
        768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 27, navigation: !1, pagination: { el: ".event-pagination", clickable: !0 } },
        1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 50 },
    },
});
function init() {
    document.querySelector("#map");
    const e = new ymaps.Map(
        "map",
        { center: [55.75846806898367, 37.60108849999989], zoom: 14, controls: ["geolocationControl", "zoomControl"] },
        {
            suppressMapOpenBlock: !0,
            geolocationControlSize: "large",
            geolocationControlPosition: { top: "200px", right: "20px" },
            geolocationControlFloat: "none",
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "120px", right: "20px" },
        }
    );
    e.behaviors.disable("scrollZoom");
    const t = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, { iconLayout: "default#image", iconImageHref: "imgs/Ellipse 12.png", iconImageSize: [20, 20], iconImageOffset: [-20, -40] });
    e.geoObjects.add(t), e.container.fitToViewport();
}
function eventAccardion() {
    const e = document.querySelectorAll(".cathalog-con");
    e.forEach((t) => {
        t.querySelector(".cath-svg").addEventListener("click", function () {
            e.forEach((e) => {
                e !== t && e.classList.remove("visible");
            }),
                t.classList.toggle("visible");
        });
    });
}
ymaps.ready(init),
    $(function () {
        $("#accordion").accordion({ active: !1, heightStyle: "content", active: 0, collapsible: !0 });
    });
let tabsBtn = document.querySelectorAll(".catalog__btn"),
    tabsItem = document.querySelectorAll(".catalog__link-content");
function galleryAccardion() {
    const e = document.querySelector(".gallery__filter-btn"),
        t = document.querySelector("#fltr-1"),
        a = document.querySelector("#fltr-2"),
        n = document.querySelector(".filter-svg"),
        i = document.querySelector(".b-text");
    e.addEventListener("click", function (e) {
        const s = e.target.id;
        t.classList.toggle("fltr-active"), a.classList.toggle("fltr-active"), n.classList.toggle("fltr-active"), s == t.id ? (i.textContent = "Рисунок") : s == a.id && (i.textContent = "Скульптура");
    });
}
tabsBtn.forEach(function (e) {
    e.addEventListener("click", function (e) {
        const t = e.currentTarget.dataset.path;
        tabsBtn.forEach(function (e) {
            e.classList.remove("catalog__btn_active");
        }),
            e.currentTarget.classList.add("catalog__btn_active"),
            tabsItem.forEach(function (e) {
                e.classList.remove("catalog__link-content_active");
            }),
            document.querySelector(`[data-target="${t}"]`).classList.add("catalog__link-content_active");
    });
}),
    eventAccardion(),
    galleryAccardion();
const slider1 = document.querySelector(".gallery-swiper__container");
let mySwiper = new Swiper(slider1, {
    slidesPerView: 3,
    spaceBetween: 10,
    lazy: !0,
    slideClass: "gallery-slide",
    wrapperClass: "gallery-wrapper",
    pagination: { el: ".gallery-pagination", clickable: !0, type: "fraction" },
    navigation: { nextEl: ".gallery-next", prevEl: ".gallery-prev" },
    breakpoints: { 0: { slidesPerView: 1, spaceBetween: 30 }, 578: { slidesPerView: 2, spaceBetween: 34 }, 1171: { slidesPerView: 3, spaceBetween: 50 } },
});
const params = { btnClassName: "js-header-dropdown-btn", dropClassName: "js-header-drop", activeClassName: "is-active", disabledClassName: "is-disabled" };
function onDisable(e) {
    e.target.classList.contains(params.disabledClassName) && (e.target.classList.remove(params.disabledClassName, params.activeClassName), e.target.removeEventListener("animationend", onDisable));
}
function setMenuListener() {
    document.body.addEventListener("click", (e) => {
        const t = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);
        if (
            (t.length &&
                !e.target.closest(`.${params.activeClassName}`) &&
                t.forEach((e) => {
                    e.classList.contains(params.btnClassName) ? e.classList.remove(params.activeClassName) : e.classList.add(params.disabledClassName);
                }),
            e.target.closest(`.${params.btnClassName}`))
        ) {
            const t = e.target.closest(`.${params.btnClassName}`),
                a = t.dataset.path,
                n = document.querySelector(`.${params.dropClassName}[data-target="${a}"]`);
            t.classList.toggle(params.activeClassName), n.classList.contains(params.activeClassName) ? n.classList.add(params.disabledClassName) : (n.classList.add(params.activeClassName), n.addEventListener("animationend", onDisable));
        }
    });
}
setMenuListener();
const swiper = new Swiper(".js-hero-swiper", { allowTouchMove: !1, loop: !0, effect: "fade", speed: 1e4, autoplay: { delay: 1e4 } });
function burger() {
    const e = document.querySelector(".burger"),
        t = document.querySelector(".burger-menu"),
        a = document.querySelector(".X-1");
    e.addEventListener("click", function () {
        (t.style.visibility = "visible"), (t.style.transform = "translateY(1px)");
    }),
        a.addEventListener("click", function () {
            (t.style.visibility = "hidden"), (t.style.transform = "translateX(-100%)"), console.log("hi");
        }),
        window.addEventListener("resize", function () {
            t.getBoundingClientRect().width > 1147 && (t.style.visibility = "hidden");
        });
}
burger();
const slider = document.querySelector(".swiper-container");
let mySwiper1 = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 10,
    slideClass: "card",
    wrapperClass: "wrapper",
    loop: !0,
    pagination: { el: ".pag-1", clickable: !0 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
function showSearch() {
    const e = document.querySelector(".nav-svg"),
        t = document.querySelector(".enter-search"),
        a = document.querySelector(".X");
    let n = document.body;
    e.addEventListener("click", function () {
        t.classList.add("active");
    }),
        window.addEventListener("resize", function () {
            n.getBoundingClientRect().width, t.classList.remove("active");
        }),
        a.addEventListener("click", function () {
            t.classList.remove("active"), (e.style.height = 23);
        });
}
showSearch();
let tol1 = '<div style="text-align:center;background-color:#9D5CD0;font-size: 12px;line-height:16px;font-weight: 600">Пример современных тенденций — современная методология разработки</div>',
    tol2 = '<div style="text-align:center;background-color:#9D5CD0;font-size: 12px;line-height:16px;font-weight: 600">В стремлении повысить качество</div>',
    tol3 = '<div style="text-align:center;background-color:#9D5CD0;font-size: 12px;line-height:16px;font-weight: 600">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции</div>';
tippy(".tooltip-1", { content: tol1, theme: "#9D5CD0", allowHTML: !0, interactive: !0, maxWidth: 240 }),
    tippy(".tooltip-2", { content: tol2, theme: "#9D5CD0", allowHTML: !0, interactive: !0, maxWidth: 240 }),
    tippy(".tooltip-3", { content: tol3, theme: "#9D5CD0", allowHTML: !0, interactive: !0, maxWidth: 240 });
let tips = document.querySelectorAll(".tips");
for (e of tips) {
    let t = e.innerHTML;
    console.log(t);
    let a =
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16.001C12.4183 16.001 16 12.4193 16 8.00098C16 3.5827 12.4183 0.000976562 8 0.000976562C3.58172 0.000976562 0 3.5827 0 8.00098C0 12.4193 3.58172 16.001 8 16.001Z" fill="#9D5CD0"/>\n  <path d="M10.9111 4.49268L11.9555 5.53702L5.20621 12.2863L4.16187 11.2419L10.9111 4.49268Z" fill="white"/>\n  <path d="M11.7939 11.0811L10.7496 12.1254L4.00034 5.37613L5.04468 4.33179L11.7939 11.0811Z" fill="white"/>\n  </svg>\n  ';
    e.addEventListener("click", function (e) {
        let n = e.currentTarget;
        n.innerHTML === t ? ((n.innerHTML = a), console.log("old one")) : (n.innerHTML = t);
    });
}
