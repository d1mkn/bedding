!function(){const e={searchBtn:document.querySelector(".js-search-btn"),searchForm:document.querySelector(".js-search-form"),backdrop:document.querySelector(".backdrop"),menuBtn:document.querySelector(".mobile-menu-btn"),menuContainer:document.querySelector(".mobile-menu__container"),closeBtn:document.querySelector(".mobile-menu__close-btn"),modalTriggerList:document.querySelectorAll(".js-quick-view"),modal:document.querySelector(".modal"),modalDialog:document.querySelector(".modal__dialog"),modalBackdrop:document.querySelector(".modal-backdrop"),closeButton:document.querySelector(".modal__dialog-close"),addButton:document.querySelector(".js-add-to-cart"),toCardWrap:document.querySelector(".js-to-cart-modal"),toCardClsBtn:document.querySelector(".js-to-cart-close-btn"),faqItems:document.querySelectorAll(".faq__item"),fabricsItems:document.querySelectorAll(".fabrics__item"),categoryItems:document.querySelectorAll(".category-page__filter-item"),categoryDrop:document.querySelectorAll(".category-page__filter-drop"),orderingCheckbox1:document.querySelector(".js-checkbox1"),orderingCheckbox2:document.querySelector(".js-checkbox2"),orderingSummary:document.querySelector(".ordering-details-js"),orderingDetails:document.querySelector(".ordering-items-js"),formShowBtn:document.querySelector(".js-form-open-btn"),reviewForm:document.querySelector(".js-review-form"),catalogTitle:document.querySelector(".footer__catalog"),catalogList:document.querySelector(".footer__catalog-list"),infoTitle:document.querySelector(".footer__info"),infoList:document.querySelector(".footer__info-list"),contactsTitle:document.querySelector(".footer__contacts"),contactsList:document.querySelector(".footer__contacts-wrap")};e.menuBtn.addEventListener("click",(()=>{e.backdrop.classList.remove("visually-hidden"),e.menuContainer.classList.add("is-open"),document.body.classList.add("modal-open")})),e.backdrop.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),e.closeBtn.addEventListener("click",(()=>{e.backdrop.classList.add("visually-hidden"),e.menuContainer.classList.remove("is-open"),document.body.classList.remove("modal-open")})),function(){const t=e.searchForm;e.searchBtn.addEventListener("click",(()=>{t.classList.contains("visually-hidden")?(t.classList.toggle("animate__fadeIn"),t.classList.toggle("visually-hidden")):(t.classList.toggle("animate__fadeIn"),t.classList.toggle("animate__fadeOut"),setTimeout((()=>{t.classList.toggle("visually-hidden"),t.classList.toggle("animate__fadeOut")}),500))}))}();const t=e.orderingCheckbox1,o=e.orderingCheckbox2,s=document.querySelector(".js-ordering-data1"),i=document.querySelector(".js-ordering-data2"),l=e.orderingSummary,n=e.orderingDetails;t.addEventListener("click",(()=>{s.classList.toggle("visually-hidden")})),o.addEventListener("click",(()=>{i.classList.toggle("visually-hidden")})),l.addEventListener("click",(()=>{l.classList.toggle("active"),n.classList.toggle("active"),l.classList.contains("active")?(l.style.display="block",l.style.maxHeight=`${n.clientHeight} + ${l.scrollHeight} + px`,l.style.pointerEvents="none",setTimeout((()=>{l.style.pointerEvents="auto"}),1e3)):(l.style.pointerEvents="none",setTimeout((()=>{l.style.display="none",l.style.maxHeight="0",l.removeAttribute("style")}),1e3))}));const c=e.catalogTitle,a=e.catalogList,r=e.infoTitle,d=e.infoList,u=e.contactsTitle,m=e.contactsList;function y(){if(document.documentElement.clientWidth>767)return a.classList.remove("visually-hidden"),d.classList.remove("visually-hidden"),void m.classList.remove("visually-hidden");a.classList.add("visually-hidden"),d.classList.add("visually-hidden"),m.classList.add("visually-hidden"),c.addEventListener("click",g),r.addEventListener("click",v),u.addEventListener("click",L)}function g(){c.classList.toggle("active"),c.classList.contains("active")?(a.classList.remove("visually-hidden"),a.style.maxHeight=`${a.clientHeight} + ${c.scrollHeight} + px`,c.style.pointerEvents="none",setTimeout((()=>{c.style.pointerEvents="auto"}),500)):(c.style.pointerEvents="none",setTimeout((()=>{c.style.maxHeight="0",c.removeAttribute("style"),a.classList.toggle("visually-hidden")}),500))}function v(){r.classList.toggle("active"),r.classList.contains("active")?(d.classList.remove("visually-hidden"),d.style.maxHeight=`${d.clientHeight} + ${r.scrollHeight} + px`,r.style.pointerEvents="none",setTimeout((()=>{r.style.pointerEvents="auto"}),500)):(r.style.pointerEvents="none",setTimeout((()=>{r.style.maxHeight="0",r.removeAttribute("style"),d.classList.toggle("visually-hidden")}),500))}function L(){u.classList.toggle("active"),u.classList.contains("active")?(m.classList.remove("visually-hidden"),m.style.maxHeight=`${m.clientHeight} + ${u.scrollHeight} + px`,u.style.pointerEvents="none",setTimeout((()=>{u.style.pointerEvents="auto"}),500)):(u.style.pointerEvents="none",setTimeout((()=>{u.style.maxHeight="0",u.removeAttribute("style"),m.classList.toggle("visually-hidden")}),500))}window.addEventListener("deviceorientation",y),window.addEventListener("resize",y),y()}();
//# sourceMappingURL=ordering.77648a40.js.map
