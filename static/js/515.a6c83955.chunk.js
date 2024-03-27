"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[515],{5515:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(3050),a=t(9439),i=t(2791),o=t(4420),s=t(826),l=t(3553),c=function(e){return e.filter},d=function(e){return e.contacts.items},x=function(e){return e.contacts.error},u=function(e){return e.contacts.isLoading},f=(0,l.P1)([d,c],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),p=t(3333),h=t(697),j=t(8096),m=t(7249),Z=t(4294),C=t(7750),g=t(184),b=function(){var e=(0,o.I0)(),n=(0,o.v9)(d),t=(0,i.useState)(""),r=(0,a.Z)(t,2),l=r[0],c=r[1],x=(0,i.useState)(""),u=(0,a.Z)(x,2),f=u[0],b=u[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.Z,{sx:{marginTop:"100px"},children:(0,g.jsxs)(j.Z,{sx:{display:"flex",gap:"20px",marginTop:"50px"},children:[(0,g.jsx)(m.Z,{sx:{backgroundColor:"#fdf6f658"},variant:"outlined",label:"Name",value:l,onChange:function(e){c(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0}),(0,g.jsx)(p.Kr,{sx:{backgroundColor:"#fdf6f658"},value:f,defaultCountry:"UA",onChange:function(e){b(e)}}),(0,g.jsxs)(Z.Z,{variant:"contained",sx:{alignSelf:"center"},onClick:function(t){(t.preventDefault(),""!==l.trim()&&""!==f.trim())&&(n.find((function(e){return e.name.toLowerCase()===l.toLowerCase()}))?alert("".concat(l," is already in Phonebook!")):(e((0,s.uK)({name:l,number:f})),c(""),b("")))},children:["Add Contact\xa0",(0,g.jsx)(C.Z,{})]})]})})})},v=t(1634),y=t(890),k=t(3466),w=t(8619),S=function(){var e=(0,o.I0)(),n=(0,o.v9)(c);return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h.Z,{sx:{color:"white",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"15px"},children:[(0,g.jsx)(y.Z,{variant:"h6",sx:{display:"flex",justifyContent:"center"},children:"Find Contacts by Name"}),(0,g.jsx)(m.Z,{sx:{backgroundColor:"#fdf6f658"},variant:"outlined",label:"Enter name to search...",type:"text",name:"filter",value:n,onChange:function(n){e((0,v.T)(n.target.value))},InputProps:{endAdornment:(0,g.jsx)(k.Z,{position:"end",children:(0,g.jsx)(w.Z,{})})}})]})})},A=t(493),P=t(5021),T=t(9900),F=t(6278),I=t(237),L=t(7247),z=t(1286),K=function(e){var n=e.filteredContact,t=(0,o.I0)(),r=(0,i.useState)(n.name),l=(0,a.Z)(r,2),c=l[0],d=l[1],x=(0,i.useState)(n.number),u=(0,a.Z)(x,2),f=u[0],C=u[1],b=(0,i.useState)(!1),v=(0,a.Z)(b,2),S=v[0],K=v[1],N=function(){K(!S)};return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.Z,{sx:{color:"white",display:"flex",justifyContent:"flex-end",border:"1px solid white",padding:"2px"},children:(0,g.jsx)(A.Z,{children:(0,g.jsxs)(P.ZP,{sx:{display:"flex",justifyContent:"flex-start",gap:"10px"},disablePadding:!0,children:[(0,g.jsx)(T.Z,{primary:n.name}),(0,g.jsx)(T.Z,{primary:n.number,children:n.number}),(0,g.jsxs)(F.Z,{sx:{gap:"10px",display:"flex",justifyContent:"flex-end"},children:[(0,g.jsx)(Z.Z,{variant:"contained",onClick:function(){t((0,s.GK)(n.id))},children:(0,g.jsx)(L.Z,{})}),(0,g.jsxs)(Z.Z,{variant:"contained",onClick:N,children:["Edit",(0,g.jsx)(z.Z,{})]})]}),(0,g.jsx)(I.Z,{open:S,onClose:!1,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,g.jsxs)(h.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"#69587bee",border:"1px solid #000",boxShadow:24,borderRadius:2,p:4},children:[(0,g.jsx)(y.Z,{sx:{color:"white",display:"flex",justifyContent:"center"},variant:"h5",children:"Update Contact"}),(0,g.jsxs)(j.Z,{sx:{display:"flex",gap:"20px",marginTop:"50px"},children:[(0,g.jsx)(m.Z,{variant:"outlined",label:"Name",value:c,onChange:function(e){d(e.target.value)},InputProps:{endAdornment:(0,g.jsx)(k.Z,{position:"end",children:(0,g.jsx)(w.Z,{})})}}),(0,g.jsx)(p.Kr,{value:f,onChange:function(e){C(e)}}),(0,g.jsx)(Z.Z,{variant:"contained",sx:{alignSelf:"center"},onClick:N,children:"Cancel"}),(0,g.jsx)(Z.Z,{variant:"contained",sx:{alignSelf:"center"},type:"submit",onClick:function(){K(!S),t((0,s.Tk)({id:n.id,name:c,number:f}))},children:"\xa0\xa0Save\xa0\xa0\xa0"})]})]})})]})})})})},N=t(3477),_=function(){return(0,g.jsx)(N.Jv,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})},B=function(){var e=(0,o.v9)(f),n=(0,o.v9)(x),t=(0,o.v9)(u),r=(0,o.I0)();return(0,i.useEffect)((function(){r((0,s.yF)())}),[r]),(0,g.jsxs)("ul",{children:[t&&!n&&(0,g.jsx)(_,{}),!t&&!n&&0===e.length&&(0,g.jsx)("p",{style:{color:"white",display:"flex",justifyContent:"center"},children:"Phonebook is empty, please add a contact\ud83e\udd17"}),!t&&!n&&e.length>0&&e.map((function(e){return(0,g.jsx)(K,{filteredContact:e},e.id)}))]})},E=function(){return(0,g.jsxs)(r.B6,{children:[(0,g.jsx)(r.ql,{children:(0,g.jsx)("title",{children:"Phonebook"})}),(0,g.jsx)(h.Z,{sx:{marginTop:"100px"},children:(0,g.jsx)(b,{})}),(0,g.jsxs)(h.Z,{sx:{marginTop:"50px"},children:[(0,g.jsx)(y.Z,{sx:{display:"flex",color:"Background",justifyContent:"center"},variant:"h5",children:"Contacts"}),(0,g.jsx)(S,{})]}),(0,g.jsx)(h.Z,{children:(0,g.jsx)(B,{})})]})}}}]);
//# sourceMappingURL=515.a6c83955.chunk.js.map