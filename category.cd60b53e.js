!function(){const e={searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".js-quick-view"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".js-to-cart-modal"),toCardClsBtn:document.querySelector(".js-to-cart-close-btn"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js"),formShowBtn:document.querySelector(".js-form-open-btn"),reviewForm:document.querySelector(".js-review-form")};e.menuBtn.addEventListener("click",(()=>{e.backdrop.classList.remove("visually-hidden"),e.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),e.backdrop.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),e.closeBtn.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),function(){const t=e.searchForm;e.searchBtn.addEventListener("click",(()=>{t.classList.contains("visually-hidden")?(t.classList.toggle("animate__fadeIn"),t.classList.toggle("visually-hidden")):(t.classList.toggle("animate__fadeIn"),t.classList.toggle("animate__fadeOut"),setTimeout((()=>{t.classList.toggle("visually-hidden"),t.classList.toggle("animate__fadeOut")}),500))}))}();let t=!1;function a(){e.modal.classList.remove("visually-hidden"),e.modalBackdrop.classList.remove("visually-hidden"),e.modalBackdrop.classList.add("animate__fadeIn"),document.body.classList.toggle("modal-open")}function o(){e.modalBackdrop.classList.remove("animate__fadeIn"),e.modalBackdrop.classList.add("animate__fadeOut"),setTimeout((()=>{e.modalBackdrop.classList.add("visually-hidden"),e.modal.classList.add("visually-hidden"),e.modalBackdrop.classList.remove("animate__fadeOut"),document.body.classList.toggle("modal-open")}),500)}e.modalTriggerList.forEach((e=>e.addEventListener("click",a))),e.modalBackdrop.addEventListener("click",o),document.addEventListener("keydown",(e=>{"Escape"===e.key&&o()})),e.closeButton.addEventListener("click",o),e.modal.addEventListener("click",(e=>{e.stopPropagation()})),e.addButton.addEventListener("click",(()=>{o(),t=!0,e.toCardWrap.classList.toggle("animate__fadeInRight"),e.toCardWrap.classList.toggle("visually-hidden"),setTimeout((()=>{t&&(e.toCardWrap.classList.toggle("animate__fadeInRight"),e.toCardWrap.classList.toggle("animate__fadeOutRight"),setTimeout((()=>{e.toCardWrap.classList.toggle("visually-hidden"),e.toCardWrap.classList.toggle("animate__fadeOutRight")}),1e3))}),5e3)})),e.toCardClsBtn.addEventListener("click",(()=>{t=!1,e.toCardWrap.classList.toggle("animate__fadeInRight"),e.toCardWrap.classList.toggle("animate__fadeOutRight"),setTimeout((()=>{e.toCardWrap.classList.toggle("visually-hidden"),e.toCardWrap.classList.toggle("animate__fadeOutRight")}),1e3)})),e.categoryItems.forEach((e=>{const t=e.querySelector(".visually-hidden");e.addEventListener("mouseenter",(()=>{t.classList.remove("visually-hidden")})),e.addEventListener("mouseleave",(()=>{t.classList.add("visually-hidden")}))}))}();
//# sourceMappingURL=category.cd60b53e.js.map