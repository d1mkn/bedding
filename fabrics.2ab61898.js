!function(){const e={dropdownItems:document.querySelectorAll(".js-dropdown"),searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".single-category__item-link"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".to-card__wrap"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js")};e.menuBtn.addEventListener("click",(()=>{e.backdrop.classList.remove("visually-hidden"),e.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),e.backdrop.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),e.closeBtn.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),e.dropdownItems.forEach((e=>{const o=e.querySelector(".visually-hidden");e.addEventListener("mouseenter",(()=>{o.classList.remove("visually-hidden")})),e.addEventListener("mouseleave",(()=>{o.classList.add("visually-hidden")}))})),function(){const o=e.searchForm;e.searchBtn.addEventListener("click",(()=>{o.classList.toggle("search__form--visible")}))}(),e.fabricsItems.forEach((e=>{const o=e.querySelector(".fabrics__question");e.querySelector(".fabrics__answer");o.addEventListener("click",(()=>{e.classList.toggle("active")}))}))}();
//# sourceMappingURL=fabrics.2ab61898.js.map
