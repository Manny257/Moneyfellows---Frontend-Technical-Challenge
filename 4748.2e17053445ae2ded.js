"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4748],{4748:(I,d,c)=>{c.r(d),c.d(d,{HomePageModule:()=>_});var s=c(177),u=c(4341),m=c(4742),g=c(70),p=c(467),t=c(4438);function h(n,r){if(1&n){const o=t.RV6();t.j41(0,"img",8),t.bIt("click",function(){const i=t.eBV(o).$implicit,a=t.XpG();return t.Njj(a.thumbnailClicked(i))}),t.k0s()}if(2&n){const o=r.$implicit,e=t.XpG();t.AVh("active-img",o===e.mainImage),t.Y8G("src",o,t.B4B)}}let l=(()=>{var n;class r{constructor(){this.images=[],this.mainImageClicked=new t.bkB,this.mainImage="",this.isActiveThumbnail=!1}ngOnInit(){this.mainImage=this.images[0]}thumbnailClicked(e){this.mainImage=e}showPreviousImg(){let e=this.images.indexOf(this.mainImage);this.mainImage=e>0?this.images[e-1]:this.images[this.images.length-1]}showNextImg(){let e=this.images.indexOf(this.mainImage);this.mainImage=e<this.images.length-1?this.images[e+1]:this.images[0]}mainImgClicked(){this.mainImageClicked.emit()}}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-image-slider"]],inputs:{images:"images"},outputs:{mainImageClicked:"mainImageClicked"},decls:8,vars:2,consts:[[1,"product-images"],["id","main-image","alt","Product Image",3,"click","src"],["id","left",1,"slider-btn",3,"click"],["name","chevron-back-outline"],["id","right",1,"slider-btn",3,"click"],["name","chevron-forward-outline"],[1,"images-row"],["alt","Product Image",3,"active-img","src","click",4,"ngFor","ngForOf"],["alt","Product Image",3,"click","src"]],template:function(e,i){1&e&&(t.j41(0,"div",0)(1,"img",1),t.bIt("click",function(){return i.mainImgClicked()}),t.k0s(),t.j41(2,"button",2),t.bIt("click",function(){return i.showPreviousImg()}),t.nrm(3,"ion-icon",3),t.k0s(),t.j41(4,"button",4),t.bIt("click",function(){return i.showNextImg()}),t.nrm(5,"ion-icon",5),t.k0s(),t.j41(6,"div",6),t.DNE(7,h,1,3,"img",7),t.k0s()()),2&e&&(t.R7$(),t.Y8G("src",i.mainImage,t.B4B),t.R7$(6),t.Y8G("ngForOf",i.images))},dependencies:[s.Sq,m.iq],styles:[".product-images[_ngcontent-%COMP%]{max-width:60rem;min-width:20rem;position:relative}@media (max-width: 860px){.product-images[_ngcontent-%COMP%]{width:100%;height:100%}}.product-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%]{display:flex;margin:5% 0;justify-content:space-around}.product-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%]   .active-img[_ngcontent-%COMP%]{border:3px solid hsl(25,100%,71%);opacity:40%;background:#fff}@media (max-width: 860px){.product-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%]{display:none}}.product-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20%;border-radius:.5rem;cursor:pointer}.product-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{border:3px solid hsl(25,100%,71%);opacity:40%}#main-image[_ngcontent-%COMP%]{border-radius:1rem}@media (max-width: 860px){#main-image[_ngcontent-%COMP%]{border-radius:0}}#left[_ngcontent-%COMP%]{transform:translate(-50%,-50%);left:10%}#right[_ngcontent-%COMP%]{transform:translate(50%,-50%);right:10%}.slider-btn[_ngcontent-%COMP%]{position:absolute;top:50%;z-index:10;border:none;background-color:#fff;border-radius:50%;height:3rem;width:3rem;cursor:pointer;display:flex;justify-content:center;align-items:center}@media (min-width: 860px){.slider-btn[_ngcontent-%COMP%]{display:none}}"]}),r})();var f=c(1142);const C=[{path:"",component:(()=>{var n;class r{constructor(e,i){this.dataService=e,this.modalController=i,this.smallScreen=!1,this.productAmount=0}ngOnInit(){this.product=this.dataService.getProduct()}onResize(e){e.target.innerWidth<860?(this.modalController.getTop().then(a=>{a&&this.modalController.dismiss()}),this.smallScreen=!0):this.smallScreen=!1}openLightbox(){var e=this;return(0,p.A)(function*(){const i={component:l,componentProps:{images:e.product.productImages},cssClass:"fit-modal"};e.smallScreen||(yield(yield e.modalController.create(i)).present())})()}incrementAmount(){this.productAmount++}decrementAmount(){this.productAmount=0==this.productAmount?this.productAmount:this.productAmount-1}addToCart(){this.dataService.addCartItems({itemName:this.product.productName,thumbnail:this.product.productImages[0],count:this.productAmount>0?this.productAmount:1,price:this.product.priceAfterDiscount})}}return(n=r).\u0275fac=function(e){return new(e||n)(t.rXU(f.u),t.rXU(m.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-home"]],hostBindings:function(e,i){1&e&&t.bIt("resize",function(b){return i.onResize(b)},!1,t.tSv)},decls:31,vars:16,consts:[[1,"page-content"],[3,"mainImageClicked","images"],[1,"product-details"],[1,"price-container"],[1,"price"],["id","discount"],[1,"amount-cart-container"],[1,"product-amount"],[3,"click"],[1,"add-to-cart-btn",3,"click"],["slot","start","name","cart-outline"]],template:function(e,i){1&e&&(t.j41(0,"ion-content")(1,"section",0)(2,"app-image-slider",1),t.bIt("mainImageClicked",function(){return i.openLightbox()}),t.k0s(),t.j41(3,"div",2)(4,"h3"),t.EFF(5),t.k0s(),t.j41(6,"h1"),t.EFF(7),t.k0s(),t.j41(8,"p"),t.EFF(9),t.k0s(),t.j41(10,"div",3)(11,"div",4),t.EFF(12),t.nI1(13,"currency"),t.j41(14,"span",5),t.EFF(15),t.nI1(16,"percent"),t.k0s()(),t.j41(17,"del"),t.EFF(18),t.nI1(19,"currency"),t.k0s()(),t.j41(20,"div",6)(21,"div",7)(22,"button",8),t.bIt("click",function(){return i.decrementAmount()}),t.EFF(23," - "),t.k0s(),t.j41(24,"span"),t.EFF(25),t.k0s(),t.j41(26,"button",8),t.bIt("click",function(){return i.incrementAmount()}),t.EFF(27," + "),t.k0s()(),t.j41(28,"button",9),t.bIt("click",function(){return i.addToCart()}),t.nrm(29,"ion-icon",10),t.EFF(30," Add to Cart "),t.k0s()()()()()),2&e&&(t.R7$(2),t.Y8G("images",i.product.productImages),t.R7$(3),t.JRh(i.product.manufacturer),t.R7$(2),t.JRh(i.product.productName),t.R7$(2),t.SpI(" ",i.product.details," "),t.R7$(3),t.SpI(" ",t.i5U(13,8,i.product.priceAfterDiscount,"USD")," "),t.R7$(3),t.SpI(" ",t.bMT(16,11,i.product.discount),""),t.R7$(3),t.SpI(" ",t.i5U(19,13,i.product.originalPrice,"USD"),""),t.R7$(7),t.JRh(i.productAmount))},dependencies:[m.W9,m.iq,l,s.m1,s.oe],styles:[".page-content[_ngcontent-%COMP%]{display:flex;align-items:start;margin:2rem auto 0;padding:2rem;flex-direction:row;gap:4rem;max-width:80%}@media (max-width: 860px){.page-content[_ngcontent-%COMP%]{max-width:100%;flex-direction:column;padding:0;margin:0;gap:0}}p[_ngcontent-%COMP%]{font-size:16px}.popover-content[_ngcontent-%COMP%]::part(content){position:relative}.product-amount[_ngcontent-%COMP%]{display:flex;align-items:center;border-radius:.2rem;background:#f4f5f8;justify-content:space-between}.product-amount[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0;padding:.7rem;background:#f4f5f8;font-weight:700;color:#ff7d1a}.product-amount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:none;width:5rem;text-align:center;font-weight:700}.amount-cart-container[_ngcontent-%COMP%]{display:flex;gap:2rem}@media (max-width: 860px){.amount-cart-container[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:2rem}}.add-to-cart-btn[_ngcontent-%COMP%]{background:#ff7d1a;padding:1rem 2rem;color:#000;border-radius:.2rem;display:flex;align-items:center;justify-content:center;gap:1rem}.add-to-cart-btn[_ngcontent-%COMP%]:hover{background:#ffa96b}.add-to-cart-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:2rem}.product-details[_ngcontent-%COMP%]{padding:0 2rem}.product-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#1d2025;font-size:3rem;line-height:1.2;margin-bottom:3.5rem;font-weight:700}.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2rem;line-height:1.6}.product-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase;color:#b6bcc8;letter-spacing:2px;font-size:.8rem;font-weight:700}.price-container[_ngcontent-%COMP%]{margin-bottom:2.5rem;display:flex;flex-direction:column;gap:1rem}@media (max-width: 860px){.price-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center;justify-content:space-between}}.price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:2rem;font-weight:700;color:#1d2025;margin:0}.price-container[_ngcontent-%COMP%]   del[_ngcontent-%COMP%]{color:#b6bcc8}#discount[_ngcontent-%COMP%]{background-color:#1d2025;color:#fff;border-radius:.4rem;font-size:.9rem;margin-left:1rem;padding:.2rem .4rem}"]}),r})()}];let P=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[g.iI.forChild(C),g.iI]}),r})(),_=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[s.MD,u.YN,m.bv,P]}),r})()}}]);