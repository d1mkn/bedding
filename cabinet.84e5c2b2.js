!function(){const e={searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".js-quick-view"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".js-to-cart-modal"),toCardClsBtn:document.querySelector(".js-to-cart-close-btn"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js"),formShowBtn:document.querySelector(".js-form-open-btn"),reviewForm:document.querySelector(".js-review-form")};e.menuBtn.addEventListener("click",(()=>{e.backdrop.classList.remove("visually-hidden"),e.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),e.backdrop.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),e.closeBtn.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),function(){const t=e.searchForm;e.searchBtn.addEventListener("click",(()=>{t.classList.contains("visually-hidden")?(t.classList.toggle("animate__fadeIn"),t.classList.toggle("visually-hidden")):(t.classList.toggle("animate__fadeIn"),t.classList.toggle("animate__fadeOut"),setTimeout((()=>{t.classList.toggle("visually-hidden"),t.classList.toggle("animate__fadeOut")}),500))}))}();const t=document.querySelectorAll(".cabinet-navigation__button"),o=document.querySelectorAll(".cabinet-section");t[0].classList.add("active"),o[0].classList.add("cabinet-section-active"),t.forEach((e=>{e.addEventListener("click",(()=>{const c=e.getAttribute("data-target");o.forEach((e=>{e.classList.remove("cabinet-section-active")}));document.getElementById(c).classList.add("cabinet-section-active"),t.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}))}))}();
//# sourceMappingURL=cabinet.84e5c2b2.js.map
