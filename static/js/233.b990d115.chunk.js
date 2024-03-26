"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[233],{4233:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(3050),r=t(9439),i=t(2791),o=t(4420),s=t(826),l=t(3553),c=function(e){return e.filter},d=function(e){return e.contacts.items},u=function(e){return e.contacts.error},x=function(e){return e.contacts.isLoading},f=(0,l.P1)([d,c],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),h=t(2657),p=t(697),j=t(8096),m=t(7249),C=t(4294),g=t(7750),Z=t(184),v=function(){var e=(0,o.I0)(),n=(0,o.v9)(d),t=(0,i.useState)(""),a=(0,r.Z)(t,2),l=a[0],c=a[1],u=(0,i.useState)(""),x=(0,r.Z)(u,2),f=x[0],v=x[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(p.Z,{sx:{marginTop:"100px"},children:(0,Z.jsxs)(j.Z,{sx:{display:"flex",gap:"20px",marginTop:"50px"},children:[(0,Z.jsx)(m.Z,{sx:{backgroundColor:"#fdf6f658"},variant:"outlined",label:"Name",value:l,onChange:function(e){c(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0}),(0,Z.jsx)(h.Kr,{sx:{backgroundColor:"#fdf6f658"},value:f,defaultCountry:"UA",onChange:function(e){v(e)}}),(0,Z.jsxs)(C.Z,{variant:"contained",sx:{alignSelf:"center"},onClick:function(t){(t.preventDefault(),""!==l.trim()&&""!==f.trim())&&(n.find((function(e){return e.name.toLowerCase()===l.toLowerCase()}))?alert("".concat(l," is already in Phonebook!")):(e((0,s.uK)({name:l,number:f})),c(""),v("")))},children:["Add Contact\xa0",(0,Z.jsx)(g.Z,{})]})]})})})},b=t(1634),y=t(890),k=function(){var e=(0,o.I0)(),n=(0,o.v9)(c);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(p.Z,{sx:{color:"white",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"15px"},children:[(0,Z.jsx)(y.Z,{variant:"h6",sx:{display:"flex",justifyContent:"center"},children:"Find Contacts by Name"}),(0,Z.jsx)(m.Z,{sx:{backgroundColor:"#fdf6f658"},variant:"outlined",label:"Name",type:"text",name:"filter",value:n,onChange:function(n){e((0,b.T)(n.target.value))}})]})})},w="ContactListItem_contactListItem__21QwY",S=t(237),L=t(7247),T=t(1286),A=function(e){var n=e.filteredContact,t=(0,o.I0)(),a=(0,i.useState)(n.name),l=(0,r.Z)(a,2),c=l[0],d=l[1],u=(0,i.useState)(n.number),x=(0,r.Z)(u,2),f=x[0],g=x[1],v=(0,i.useState)(!1),b=(0,r.Z)(v,2),k=b[0],A=b[1],_=function(){A(!k)};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(p.Z,{sx:{color:"white",display:"flex",justifyContent:"flex-end"},children:(0,Z.jsxs)("li",{className:w,children:[(0,Z.jsxs)(y.Z,{children:[n.name,":"]}),(0,Z.jsx)(y.Z,{children:n.number}),(0,Z.jsx)(C.Z,{variant:"contained",onClick:function(){t((0,s.GK)(n.id))},children:(0,Z.jsx)(L.Z,{})}),(0,Z.jsxs)(C.Z,{variant:"contained",onClick:_,children:["Edit",(0,Z.jsx)(T.Z,{})]}),(0,Z.jsx)(S.Z,{open:k,onClose:!1,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,Z.jsx)(p.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"#69587bee",border:"1px solid #000",boxShadow:24,borderRadius:2,p:4},children:(0,Z.jsxs)(j.Z,{sx:{display:"flex",gap:"20px",marginTop:"50px"},children:[(0,Z.jsx)(m.Z,{variant:"outlined",label:"Name",value:c,onChange:function(e){d(e.target.value)}}),(0,Z.jsx)(h.Kr,{value:f,onChange:function(e){g(e)}}),(0,Z.jsx)(C.Z,{variant:"contained",sx:{alignSelf:"center"},onClick:_,children:"Cancel"}),(0,Z.jsx)(C.Z,{variant:"contained",sx:{alignSelf:"center"},type:"submit",onClick:function(){A(!k),t((0,s.Tk)({id:n.id,name:c,number:f}))},children:"\xa0\xa0Save\xa0\xa0\xa0"})]})})})]})})})},_=t(3477),F=function(){return(0,Z.jsx)(_.Jv,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})},I=function(){var e=(0,o.v9)(f),n=(0,o.v9)(u),t=(0,o.v9)(x),a=(0,o.I0)();return(0,i.useEffect)((function(){a((0,s.yF)())}),[a]),(0,Z.jsxs)("ul",{children:[t&&!n&&(0,Z.jsx)(F,{}),!t&&!n&&0===e.length&&(0,Z.jsx)("p",{style:{color:"white",display:"flex",justifyContent:"center"},children:"Phonebook is empty, please add a contact\ud83e\udd17"}),!t&&!n&&e.length>0&&e.map((function(e){return(0,Z.jsx)(A,{filteredContact:e},e.id)}))]})},N=function(){return(0,Z.jsxs)(a.B6,{children:[(0,Z.jsx)(a.ql,{children:(0,Z.jsx)("title",{children:"Phonebook"})}),(0,Z.jsx)(p.Z,{sx:{marginTop:"100px"},children:(0,Z.jsx)(v,{})}),(0,Z.jsxs)(p.Z,{sx:{marginTop:"50px"},children:[(0,Z.jsx)(y.Z,{sx:{display:"flex",color:"Background",justifyContent:"center"},variant:"h5",children:"Contacts"}),(0,Z.jsx)(k,{})]}),(0,Z.jsx)(p.Z,{children:(0,Z.jsx)(I,{})})]})}}}]);
//# sourceMappingURL=233.b990d115.chunk.js.map