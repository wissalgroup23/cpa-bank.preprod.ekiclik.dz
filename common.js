"use strict";(self.webpackChunkek_guichet=self.webpackChunkek_guichet||[]).push([[592],{59764:(f,c,i)=>{i.d(c,{i:()=>y});var t=i(94650),_=i(82761),p=i(36016),l=i(77215),h=i(55941),d=i(36895),m=i(4859),o=i(24006);function g(u,s){if(1&u&&(t.TgZ(0,"span",9),t._uU(1),t.qZA()),2&u){const e=t.oxw();t.xp6(1),t.hij(" Quantit\xe9 disponible : ",e.maxQuantity," ")}}let y=(()=>{class u{constructor(e,n,a,r){this.router=e,this.carteService=n,this.accountService=a,this.orderService=r,this.change=new t.vpe,this.counter=1,this.invalidQuantity=!1}ngOnInit(){this.accountService.accountSubject.subscribe(e=>{this.client=e})}increment(){this.client&&this.carteService.isCalculating$.next(!0),this.counter++,this.counter>=this.maxQuantity&&(this.invalidQuantity=!0),this.change.emit(this.counter)}ngOnChanges(e){e&&"/cart"!=this.router.url&&(this.maxQuantity=this.maxQuantity,this.invalidQuantity=!1)}decrement(){this.client&&this.carteService.isCalculating$.next(!0),this.counter>1&&this.counter--,this.counter<this.maxQuantity&&(this.invalidQuantity=!1),this.change.emit(this.counter)}onUpdate(e){this.quantity=e,this.quantity<1||this.quantity>this.maxQuantity?(this.invalidQuantity=!0,this.change.emit(this.counter)):this.change.emit(e)}isQuantity(e){this.quantity=e,this.invalidQuantity=this.quantity<1||this.quantity>this.maxQuantity}}return u.\u0275fac=function(e){return new(e||u)(t.Y36(_.F0),t.Y36(p.N),t.Y36(l.B),t.Y36(h.p))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-input-quantity"]],inputs:{maxQuantity:"maxQuantity",configId:"configId",counter:"counter"},outputs:{change:"change"},features:[t.TTD],decls:10,vars:3,consts:[[1,"",2,"position","relative","height","100%"],["class","invalid-quantity",4,"ngIf"],[1,"input-number","product__quantity"],["id","product-quantity","type","number","min","1","step","1","onkeypress","return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57",1,"input-number__input",3,"value","ngModel","focusout","focusin","input","ngModelChange"],[1,"input-number__add"],["mat-icon-button","",3,"click"],["src","assets/icons/svgs/plus-blue.svg","alt",""],[1,"input-number__sub"],["src","assets/icons/svgs/minus-blue.svg","alt",""],[1,"invalid-quantity"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,g,2,1,"span",1),t.TgZ(2,"div",2)(3,"input",3),t.NdJ("focusout",function(){return n.onUpdate(n.counter)})("focusin",function(){return n.onUpdate(n.counter)})("input",function(){return n.isQuantity(n.counter)})("input",function(){return n.onUpdate(n.counter)})("ngModelChange",function(r){return n.counter=r}),t.qZA(),t.TgZ(4,"div",4)(5,"button",5),t.NdJ("click",function(){return n.increment()}),t._UZ(6,"img",6),t.qZA()(),t.TgZ(7,"div",7)(8,"button",5),t.NdJ("click",function(){return n.decrement()}),t._UZ(9,"img",8),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",0===n.maxQuantity||n.counter>n.maxQuantity),t.xp6(2),t.s9C("value",n.counter),t.Q6J("ngModel",n.counter))},dependencies:[d.O5,m.lW,o.Fj,o.wV,o.JJ,o.qQ,o.On],styles:[".input-number[_ngcontent-%COMP%]{display:block;width:100%;height:100%;position:relative}.input-number__add[_ngcontent-%COMP%], .input-number__sub[_ngcontent-%COMP%]{position:absolute;height:100%;width:56px;top:0;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:#009dcc1a;color:var(--ek-brand-blue_base);display:flex;align-items:center;justify-content:center}.input-number__sub[_ngcontent-%COMP%]{left:0;border-radius:8px 0 0 8px}.input-number__add[_ngcontent-%COMP%]{right:0;border-radius:0 8px 8px 0}.input-number__input[_ngcontent-%COMP%]{-moz-appearance:textfield;display:block;width:100%;height:100%;text-align:center;font-size:16px;font-weight:700;outline:none;padding:0;color:var(--medium-dark-shade-of-cyan-blue);border:2px solid var(--text-bg);box-sizing:border-box;border-radius:.25rem}.input-number__input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .input-number__input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none}.invalid-quantity[_ngcontent-%COMP%]{height:16px;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.44;letter-spacing:normal;text-align:left;color:var(--cherry-red);position:absolute;bottom:-20px;min-width:200px}@media (max-width: 599px){.input-number__add[_ngcontent-%COMP%], .input-number__sub[_ngcontent-%COMP%]{width:48px}}"]}),u})()}}]);