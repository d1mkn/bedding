!function(){const e={searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".js-quick-view"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".js-to-cart-modal"),toCardClsBtn:document.querySelector(".js-to-cart-close-btn"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js"),formShowBtn:document.querySelector(".js-form-open-btn"),reviewForm:document.querySelector(".js-review-form"),footerSections:document.querySelectorAll(".js-footer-section"),catalogTitle:document.querySelector(".footer__catalog"),catalogList:document.querySelector(".footer__catalog-list"),infoTitle:document.querySelector(".footer__info"),infoList:document.querySelector(".footer__info-list"),contactsTitle:document.querySelector(".footer__contacts"),contactsList:document.querySelector(".footer__contacts-wrap")};e.menuBtn.addEventListener("click",(()=>{e.backdrop.classList.remove("visually-hidden"),e.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),e.backdrop.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),e.closeBtn.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),function(){const t=e.searchForm;e.searchBtn.addEventListener("click",(()=>{t.classList.contains("visually-hidden")?(t.classList.toggle("animate__fadeIn"),t.classList.toggle("visually-hidden")):(t.classList.toggle("animate__fadeIn"),t.classList.toggle("animate__fadeOut"),setTimeout((()=>{t.classList.toggle("visually-hidden"),t.classList.toggle("animate__fadeOut")}),500))}))}(),e.faqItems.forEach((e=>{const t=e.querySelector(".faq__question"),o=e.querySelector(".faq__answer");t.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?(o.classList.toggle("visually-hidden"),e.style.pointerEvents="none",setTimeout((()=>{e.style.pointerEvents="auto"}),1e3)):(e.style.pointerEvents="none",setTimeout((()=>{e.removeAttribute("style"),o.classList.toggle("visually-hidden")}),1e3))}))}));const t=e.footerSections;function o(){if(document.documentElement.clientWidth>767)return e.catalogList.classList.remove("visually-hidden"),e.infoList.classList.remove("visually-hidden"),void e.contactsList.classList.remove("visually-hidden");e.catalogList.classList.add("visually-hidden"),e.infoList.classList.add("visually-hidden"),e.contactsList.classList.add("visually-hidden")}window.addEventListener("deviceorientation",o),window.addEventListener("resize",o),o(),t.forEach((e=>{const t=e.querySelector(".js-footer-section-info");e.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?(t.classList.remove("visually-hidden"),e.style.pointerEvents="none",setTimeout((()=>{e.style.pointerEvents="auto"}),500)):(e.style.pointerEvents="none",setTimeout((()=>{e.removeAttribute("style"),t.classList.toggle("visually-hidden")}),500))}))}))}();
//# sourceMappingURL=faq.f82f6e60.js.map
