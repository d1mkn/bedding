!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},o=e.parcelRequire2857;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},e.parcelRequire2857=o);const a={searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".js-quick-view"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".js-to-cart-modal"),toCardClsBtn:document.querySelector(".js-to-cart-close-btn"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js"),formShowBtn:document.querySelector(".js-form-open-btn"),reviewForm:document.querySelector(".js-review-form"),catalogTitle:document.querySelector(".footer__catalog"),catalogList:document.querySelector(".footer__catalog-list"),infoTitle:document.querySelector(".footer__info"),infoList:document.querySelector(".footer__info-list"),contactsTitle:document.querySelector(".footer__contacts"),contactsList:document.querySelector(".footer__contacts-wrap")};a.menuBtn.addEventListener("click",(()=>{a.backdrop.classList.remove("visually-hidden"),a.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),a.backdrop.addEventListener("click",(()=>{a.backdrop.classList.add("visually-hidden"),a.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),a.closeBtn.addEventListener("click",(()=>{a.backdrop.classList.add("visually-hidden"),a.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),function(){const e=a.searchForm;a.searchBtn.addEventListener("click",(()=>{e.classList.contains("visually-hidden")?(e.classList.toggle("animate__fadeIn"),e.classList.toggle("visually-hidden")):(e.classList.toggle("animate__fadeIn"),e.classList.toggle("animate__fadeOut"),setTimeout((()=>{e.classList.toggle("visually-hidden"),e.classList.toggle("animate__fadeOut")}),500))}))}();let i=!1;function l(){a.modal.classList.remove("visually-hidden"),a.modalBackdrop.classList.remove("visually-hidden"),a.modalBackdrop.classList.add("animate__fadeIn"),document.body.classList.add("modal-open")}function n(){a.modalBackdrop.classList.remove("animate__fadeIn"),a.modalBackdrop.classList.add("animate__fadeOut"),setTimeout((()=>{a.modalBackdrop.classList.add("visually-hidden"),a.modal.classList.add("visually-hidden"),a.modalBackdrop.classList.remove("animate__fadeOut"),document.body.classList.remove("modal-open")}),500)}a.modalTriggerList.forEach((e=>e.addEventListener("click",l))),a.modalBackdrop.addEventListener("click",n),document.addEventListener("keydown",(e=>{"Escape"===e.key&&n()})),a.closeButton.addEventListener("click",n),a.modal.addEventListener("click",(e=>{e.stopPropagation()})),a.addButton.addEventListener("click",(()=>{n(),i=!0,a.toCardWrap.classList.toggle("animate__fadeInRight"),a.toCardWrap.classList.toggle("visually-hidden"),setTimeout((()=>{i&&(a.toCardWrap.classList.toggle("animate__fadeInRight"),a.toCardWrap.classList.toggle("animate__fadeOutRight"),setTimeout((()=>{a.toCardWrap.classList.toggle("visually-hidden"),a.toCardWrap.classList.toggle("animate__fadeOutRight")}),1e3))}),5e3)})),a.toCardClsBtn.addEventListener("click",(()=>{i=!1,a.toCardWrap.classList.toggle("animate__fadeInRight"),a.toCardWrap.classList.toggle("animate__fadeOutRight"),setTimeout((()=>{a.toCardWrap.classList.toggle("visually-hidden"),a.toCardWrap.classList.toggle("animate__fadeOutRight")}),1e3)})),a.faqItems.forEach((e=>{const t=e.querySelector(".faq__question"),s=e.querySelector(".faq__answer");t.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?(s.classList.toggle("visually-hidden"),e.style.pointerEvents="none",setTimeout((()=>{e.style.pointerEvents="auto"}),1e3)):(e.style.pointerEvents="none",setTimeout((()=>{e.removeAttribute("style"),s.classList.toggle("visually-hidden")}),1e3))}))}));const d=a.formShowBtn,c=a.reviewForm;d.addEventListener("click",(()=>{c.classList.contains("visually-hidden")?(d.setAttribute("disabled","true"),c.classList.toggle("visually-hidden"),c.classList.toggle("h0"),c.classList.toggle("h490"),c.classList.toggle("o0"),setTimeout((()=>{d.removeAttribute("disabled")}),500)):(d.setAttribute("disabled","true"),c.classList.toggle("h0"),c.classList.toggle("h490"),c.classList.toggle("o0"),setTimeout((()=>{c.classList.toggle("visually-hidden"),setTimeout((()=>{d.removeAttribute("disabled")}),250)}),500))})),o("44sn0");const r=a.catalogTitle,u=a.catalogList,m=a.infoTitle,g=a.infoList,v=a.contactsTitle,y=a.contactsList;function L(){if(document.documentElement.clientWidth>767)return u.classList.remove("visually-hidden"),g.classList.remove("visually-hidden"),void y.classList.remove("visually-hidden");u.classList.add("visually-hidden"),g.classList.add("visually-hidden"),y.classList.add("visually-hidden"),r.addEventListener("touchstart",f),m.addEventListener("touchstart",p),v.addEventListener("touchstart",_)}function f(){r.classList.toggle("active"),r.classList.contains("active")?(u.classList.remove("visually-hidden"),r.style.pointerEvents="none",setTimeout((()=>{r.style.pointerEvents="auto"}),500)):(r.style.pointerEvents="none",setTimeout((()=>{r.removeAttribute("style"),u.classList.toggle("visually-hidden")}),500))}function p(){m.classList.toggle("active"),m.classList.contains("active")?(g.classList.remove("visually-hidden"),m.style.pointerEvents="none",setTimeout((()=>{m.style.pointerEvents="auto"}),500)):(m.style.pointerEvents="none",setTimeout((()=>{m.removeAttribute("style"),g.classList.toggle("visually-hidden")}),500))}function _(){v.classList.toggle("active"),v.classList.contains("active")?(y.classList.remove("visually-hidden"),v.style.pointerEvents="none",setTimeout((()=>{v.style.pointerEvents="auto"}),500)):(v.style.pointerEvents="none",setTimeout((()=>{v.removeAttribute("style"),y.classList.toggle("visually-hidden")}),500))}window.addEventListener("deviceorientation",L),window.addEventListener("resize",L)}();
//# sourceMappingURL=item.afcd8596.js.map
