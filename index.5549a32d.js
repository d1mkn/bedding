!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},d=e.parcelRequire2857;null==d&&((d=function(e){if(e in o)return o[e].exports;if(e in t){var d=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,d.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},e.parcelRequire2857=d);const r={dropdownItems:document.querySelectorAll(".js-dropdown"),searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".js-quick-view"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".to-card__wrap"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js"),formShowBtn:document.querySelector(".js-form-open-btn"),reviewForm:document.querySelector(".js-review-form")};function a(){r.modal.classList.remove("visually-hidden"),r.modalBackdrop.classList.remove("visually-hidden"),r.modalBackdrop.classList.add("animate__fadeIn"),document.body.classList.add("modal-open")}function n(){r.modalBackdrop.classList.remove("animate__fadeIn"),r.modalBackdrop.classList.add("animate__fadeOut"),setTimeout((()=>{r.modalBackdrop.classList.add("visually-hidden"),r.modal.classList.add("visually-hidden"),r.modalBackdrop.classList.remove("animate__fadeOut"),document.body.classList.remove("modal-open")}),500)}r.menuBtn.addEventListener("click",(()=>{r.backdrop.classList.remove("visually-hidden"),r.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),r.backdrop.addEventListener("click",(()=>{r.backdrop.classList.add("visually-hidden"),r.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),r.closeBtn.addEventListener("click",(()=>{r.backdrop.classList.add("visually-hidden"),r.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),r.dropdownItems.forEach((e=>{const o=e.querySelector(".visually-hidden");e.addEventListener("mouseenter",(()=>{o.classList.remove("visually-hidden")})),e.addEventListener("mouseleave",(()=>{o.classList.add("visually-hidden")}))})),function(){const e=r.searchForm;r.searchBtn.addEventListener("click",(()=>{e.classList.toggle("search__form--visible")}))}(),r.modalTriggerList.forEach((e=>e.addEventListener("click",a))),r.modalBackdrop.addEventListener("click",n),document.addEventListener("keydown",(e=>{"Escape"===e.key&&n()})),r.closeButton.addEventListener("click",n),r.modal.addEventListener("click",(e=>{e.stopPropagation()})),r.addButton.addEventListener("click",(()=>{r.toCardWrap.classList.add("show"),n(),setTimeout((()=>{r.toCardWrap.classList.remove("show")}),5500)})),d("44sn0")}();
//# sourceMappingURL=index.5549a32d.js.map
