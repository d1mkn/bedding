!function(){const e={searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".js-quick-view"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".js-to-cart-modal"),toCardClsBtn:document.querySelector(".js-to-cart-close-btn"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js"),formShowBtn:document.querySelector(".js-form-open-btn"),reviewForm:document.querySelector(".js-review-form"),catalogTitle:document.querySelector(".footer__catalog"),catalogList:document.querySelector(".footer__catalog-list"),infoTitle:document.querySelector(".footer__info"),infoList:document.querySelector(".footer__info-list"),contactsTitle:document.querySelector(".footer__contacts"),contactsList:document.querySelector(".footer__contacts-wrap")};e.menuBtn.addEventListener("click",(()=>{e.backdrop.classList.remove("visually-hidden"),e.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),e.backdrop.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),e.closeBtn.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),function(){const t=e.searchForm;e.searchBtn.addEventListener("click",(()=>{t.classList.contains("visually-hidden")?(t.classList.toggle("animate__fadeIn"),t.classList.toggle("visually-hidden")):(t.classList.toggle("animate__fadeIn"),t.classList.toggle("animate__fadeOut"),setTimeout((()=>{t.classList.toggle("visually-hidden"),t.classList.toggle("animate__fadeOut")}),500))}))}(),e.fabricsItems.forEach((e=>{const t=e.querySelector(".fabrics__question");e.querySelector(".fabrics__answer");t.addEventListener("click",(()=>{e.classList.toggle("active")}))})),e.faqItems.forEach((e=>{const t=e.querySelector(".faq__question"),o=e.querySelector(".faq__answer");t.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?(o.classList.toggle("visually-hidden"),e.style.maxHeight=`${o.clientHeight} + ${e.scrollHeight} + px`,e.style.pointerEvents="none",setTimeout((()=>{e.style.pointerEvents="auto"}),1e3)):(e.style.pointerEvents="none",setTimeout((()=>{e.style.maxHeight="0",e.removeAttribute("style"),o.classList.toggle("visually-hidden")}),1e3))}))}));const t=e.catalogTitle,o=e.catalogList,s=e.infoTitle,i=e.infoList,l=e.contactsTitle,n=e.contactsList;function c(){if(document.documentElement.clientWidth>767)return o.classList.remove("visually-hidden"),i.classList.remove("visually-hidden"),void n.classList.remove("visually-hidden");o.classList.add("visually-hidden"),i.classList.add("visually-hidden"),n.classList.add("visually-hidden"),t.addEventListener("click",a),s.addEventListener("click",r),l.addEventListener("click",d)}function a(){t.classList.toggle("active"),t.classList.contains("active")?(o.classList.remove("visually-hidden"),o.style.maxHeight=`${o.clientHeight} + ${t.scrollHeight} + px`,t.style.pointerEvents="none",setTimeout((()=>{t.style.pointerEvents="auto"}),500)):(t.style.pointerEvents="none",setTimeout((()=>{t.style.maxHeight="0",t.removeAttribute("style"),o.classList.toggle("visually-hidden")}),500))}function r(){s.classList.toggle("active"),s.classList.contains("active")?(i.classList.remove("visually-hidden"),i.style.maxHeight=`${i.clientHeight} + ${s.scrollHeight} + px`,s.style.pointerEvents="none",setTimeout((()=>{s.style.pointerEvents="auto"}),500)):(s.style.pointerEvents="none",setTimeout((()=>{s.style.maxHeight="0",s.removeAttribute("style"),i.classList.toggle("visually-hidden")}),500))}function d(){l.classList.toggle("active"),l.classList.contains("active")?(n.classList.remove("visually-hidden"),n.style.maxHeight=`${n.clientHeight} + ${l.scrollHeight} + px`,l.style.pointerEvents="none",setTimeout((()=>{l.style.pointerEvents="auto"}),500)):(l.style.pointerEvents="none",setTimeout((()=>{l.style.maxHeight="0",l.removeAttribute("style"),n.classList.toggle("visually-hidden")}),500))}window.addEventListener("deviceorientation",c),window.addEventListener("resize",c),c()}();
//# sourceMappingURL=fabrics.508b3308.js.map
