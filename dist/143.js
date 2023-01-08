"use strict";(self.webpackChunkportfolio1=self.webpackChunkportfolio1||[]).push([[143],{742:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap);"]),s.push([n.id,'* {\r\n    padding: 0;\r\n    border: 0;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: inherit;\r\n    color: inherit;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nh1, h2, h3, h4 {\r\n    line-height: 1.2;\r\n    color: var(--foreground-alt);\r\n}\r\n\r\nh1 {\r\n    font-size: 4rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\nh4 {\r\n    font-size: 1.3rem;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n.app {\r\n    font-family: \'Poppins\', sans-serif;\r\n    line-height: 1.5;\r\n    color: var(--light-foreground);\r\n    background-color: var(--background);\r\n}\r\n\r\n.light {\r\n    --foreground: #555;\r\n    --foreground-alt: #444;\r\n    --background: #dfdfdf;\r\n    --background-alt: #fff;    \r\n    --primary: #2978b5;\r\n    --shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n}\r\n\r\n.dark {\r\n    --foreground: #bdbddd;\r\n    --foreground-alt: #cdcdff;\r\n    --background: #0e111d;\r\n    --background-alt: #2a2f4c;\r\n    --primary: #90a0d9;\r\n    --shadow: rgba(255, 255, 255, 0.16) 0px 7px 29px 0px,\r\n        rgba(255, 255, 255, 0.845) 0px 0px 0px 1px;\r\n}\r\n\r\n.main {\r\n    max-width: 1100px;\r\n    width: 95%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.section {\r\n    margin-top: 5em;\r\n}\r\n\r\n.section__title {\r\n    text-align: center;\r\n    margin-bottom: 1em;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.center {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.link {\r\n    color: var(--primary);\r\n    padding: 0 0 0.3em 0;\r\n    position: relative;\r\n}\r\n\r\n.link:hover {\r\n    color: var(--primary);\r\n}\r\n\r\n.link:hover {\r\n    color: var(--primary);\r\n}\r\n\r\n.link::before {\r\n    content: "";\r\n    display: inline;\r\n    width: 0%;\r\n    height: 0.2em;\r\n    position: absolute;\r\n    bottom: 0;\r\n    background-color: var(--primary);\r\n    transition: width 0.2s ease-in;\r\n}\r\n\r\n.link:hover::before,\r\n.link:focus::before {\r\n    width: 100%;\r\n}\r\n\r\n.link--nav {\r\n    color: var(--foreground);\r\n    text-transform: lowercase;\r\n    font-weight: 500;\r\n}\r\n\r\n.link--icon {\r\n    color: var(--foreground);\r\n}\r\n\r\n.btn {\r\n    display: block;\r\n    cursor: pointer;\r\n    padding: 0.8em 1.4em;\r\n    font-weight: 500;\r\n    font-size: 0.9rem;\r\n    text-transform: lowercase;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.btn--outline {\r\n    color: var(--primary);\r\n    border: 2px solid var(--primary);\r\n    position: relative;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n}\r\n\r\n.btn--outline:hover,\r\n.btn--outline:focus {\r\n    color: var(--background);\r\n}\r\n\r\n.btn--outline:before {\r\n    content: "";\r\n    position: absolute;\r\n    background-color: var(--primary);\r\n    right: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: -1;\r\n    transition: right 0.2s ease-in-out;\r\n}\r\n\r\n.btn--outline:hover:before,\r\n.btn--outline:focus:before {\r\n    right: 0;\r\n}\r\n\r\n.btn--plain {\r\n    border: 0;\r\n    text-transform: initial;\r\n    background-color: var(--background-alt);\r\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;\r\n}\r\n\r\n.btn--plain:hover {\r\n    transform: translateY(-4px);\r\n}\r\n\r\n.btn--icon {\r\n    padding: 0;\r\n}\r\n\r\n.btn--icon:hover,\r\n.btn--icon:focus {\r\n    color: var(--primary);\r\n}\r\n\r\n.btn--icon:active {\r\n    transform: translateY(-5px);\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    h1 {\r\n        font-size: 2.6rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .section {\r\n        margin-top: 4em;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n',""]);const o=s},571:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".about {\r\n    flex-direction: column;\r\n    margin-top: 3em;\r\n}\r\n\r\n.about__name {\r\n    color: var(--primary);\r\n}\r\n\r\n.about__role {\r\n    margin-top: 1.2em;\r\n}\r\n\r\n.about__desc {\r\n    font-size: 1rem;\r\n    max-width: 600px;\r\n    color: var(--foreground-alt);\r\n}\r\n\r\n.about__desc,\r\n.about__contact {\r\n    margin-top: 2.4em;\r\n}\r\n\r\n.about .link--icon {\r\n    margin-right: 0.8em;\r\n}\r\n\r\n.about__btn {\r\n    background-color: transparent;\r\n    padding: 10px;\r\n    border: 2px solid var(--foreground);\r\n    color: #000;\r\n    border-radius: 10px;\r\n}\r\n\r\n.about__btn:hover {\r\n    background-color: var(--primary);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .app .about {\r\n        align-items: flex-start;\r\n        margin-top: 2em;\r\n    }\r\n}\r\n\r\n\r\n\r\n",""]);const o=s},26:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".contact {\r\n    flex-direction: column;\r\n    padding: 10em;\r\n    color: var(--foreground);\r\n}\r\n\r\n.form {\r\n    width: 100vw;\r\n    max-width: 550px;\r\n    margin: 2rem auto 5rem;\r\n    padding: 1rem 2rem;\r\n    background-color: #fff;\r\n    border-radius: 0.2rem;\r\n}\r\n\r\n.form__input, \r\n.form__message {\r\n    width: 100%;\r\n    border: none;\r\n    border-radius: 0.1rem;\r\n    padding: 0.5rem;\r\n    background-color: #fff;\r\n    margin-top: 0.2rem;\r\n    margin-bottom: 0.8rem;\r\n}\r\n\r\n.form__button {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background: var(--primary);\r\n    color: #fff;\r\n}\r\n\r\n",""]);const o=s},682:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".footer {\r\n    padding: 3em 0;\r\n    margin-top: 4em;\r\n    text-align: center;\r\n}\r\n\r\n.footer__link {\r\n    font-size: 0.9rem;\r\n    font-weight: 600;\r\n    color: var(--foreground);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .footer {\r\n        padding: 2em;\r\n        margin-top: 3em;\r\n    }\r\n}\r\n\r\n\r\n",""]);const o=s},545:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".header {\r\n    height: 4em;\r\n    max-width: 1100px;\r\n    width: 95%;\r\n    margin: 0 auto;\r\n    justify-content: space-between;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .header {\r\n        height: 6em;\r\n    }\r\n}\r\n\r\n\r\n",""]);const o=s},208:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".nav__list {\r\n    margin-right: 1.5em;\r\n    display: flex;\r\n}\r\n\r\n.nav__list-item {\r\n    margin-left: 1.5em;\r\n}\r\n\r\n.app .nav__hamburger {\r\n    display: none;\r\n}\r\n\r\n.nav__theme {\r\n    margin-top: 0.4em;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .nav__list {\r\n        display: none;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        position: fixed;\r\n        inset: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 2;\r\n    }\r\n\r\n    .nav__list-item {\r\n        margin: 0.5em 0;\r\n    }\r\n\r\n    .app .nav__hamburger {\r\n        display: flex;\r\n        z-index: 2;\r\n        margin-left: 0.8em;\r\n    }\r\n}\r\n\r\n\r\n\r\n",""]);const o=s},279:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".projects__grid {\r\n    max-width: 1100px;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(\r\n        auto-fill, \r\n        minmax(15em, 1fr)\r\n    );\r\n    grid-gap: 2em;\r\n}\r\n\r\n\r\n",""]);const o=s},325:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".project {\r\n    padding: 2em;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    box-shadow: var(--shadow);\r\n    transition: transform 0.2s linear;\r\n    border-radius: 10px;\r\n}\r\n\r\n.project:hover {\r\n    transform: translateY(-7px);\r\n}\r\n\r\n.project__description {\r\n    margin-top: 1em;\r\n    color: var(--foreground);\r\n}\r\n\r\n.project__img {\r\n    height: auto;\r\n    width: 250px;\r\n}\r\n\r\n.project__tech {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin: 1.2em 0;\r\n    color: var(--foreground);\r\n}\r\n\r\n.project__link {\r\n    color: var(--foreground);\r\n}\r\n\r\n.project__icon {\r\n    height: 42px;\r\n    width: auto;\r\n    color: var(--foreground);\r\n}\r\n\r\n\r\n",""]);const o=s},644:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".scrollUP {\r\n    height: 60px;\r\n    width: 60px;\r\n    color: #333;\r\n    background-color: #fff;\r\n    border: 2px solid #333;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n\r\n.scrollUP:hover {\r\n    animation: none;\r\n    color: #fff;\r\n    background-color: #333;\r\n    border: 2px solid #fff;\r\n}\r\n\r\n.scroll-top {\r\n    position: fixed;\r\n    bottom: 2em;\r\n    left: 0.5rem;\r\n    background-color: transparent;\r\n    color: var(--foreground);\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .scroll-top {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n\r\n",""]);const o=s},369:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(81),i=e.n(t),a=e(645),s=e.n(a)()(i());s.push([n.id,".skills__title {\r\n    align-items: center;\r\n}\r\n\r\n.skills__list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    max-width: 450px;\r\n    width: 95%;\r\n    margin: 0 auto;\r\n    color: var(--foreground);\r\n}\r\n\r\n.skills__list-item {\r\n    margin: 0.5em;\r\n}\r\n\r\n\r\n",""]);const o=s},775:(n,r,e)=>{e.r(r),e.d(r,{App:()=>an});var t=e(893),i=e(294),a=e(379),s=e.n(a),o=e(795),l=e.n(o),c=e(569),d=e.n(c),m=e(565),p=e.n(m),g=e(216),h=e.n(g),b=e(589),u=e.n(b),x=e(742),j={};j.styleTagTransform=u(),j.setAttributes=p(),j.insert=d().bind(null,"head"),j.domAPI=l(),j.insertStyleElement=h(),s()(x.Z,j),x.Z&&x.Z.locals&&x.Z.locals;var f=e(571),_={};_.styleTagTransform=u(),_.setAttributes=p(),_.insert=d().bind(null,"head"),_.domAPI=l(),_.insertStyleElement=h(),s()(f.Z,_),f.Z&&f.Z.locals&&f.Z.locals;var v=e(873),k=e(750);const y={name:"Craig Johnson",role:"Web Developer",description:"I love connecting with people.  \n        My passion for web development drives me to \n        succeed in developing new working relationships.",resume:"https://example.com",social:{linkedin:"https://linkedin.com",github:"https://github.com"}},w=()=>{const{name:n,role:r,description:e,resume:a,social:s}=y;return(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("aside",Object.assign({className:"about center"},{children:[n&&(0,t.jsxs)("h1",{children:["Hi, I'm ",(0,t.jsxs)("span",Object.assign({className:"about__name"},{children:[n,"."]}))]}),r&&(0,t.jsxs)("h2",Object.assign({className:"about__role"},{children:["A ",r,"."]})),(0,t.jsx)("p",Object.assign({className:"about__desc"},{children:e&&e})),(0,t.jsxs)("section",Object.assign({className:"about__contact center"},{children:[a&&(0,t.jsx)("a",Object.assign({href:a},{children:(0,t.jsx)("span",Object.assign({className:"btn btn--outline"},{children:"Resume"}))})),s&&(0,t.jsxs)(i.Fragment,{children:[s.github&&(0,t.jsx)("a",Object.assign({href:s.github,className:"link","aria-label":"github",target:"_blank",rel:"noreferrer"},{children:(0,t.jsx)(v.VtC,{})})),s.linkedin&&(0,t.jsx)("a",Object.assign({href:s.linkedin,className:"link link__icon","aria-label":"linkedin",target:"_blank",rel:"noreferrer"},{children:(0,t.jsx)(k.NQh,{})}))]})]}))]}))})};var N=e(26),Z={};Z.styleTagTransform=u(),Z.setAttributes=p(),Z.insert=d().bind(null,"head"),Z.domAPI=l(),Z.insertStyleElement=h(),s()(N.Z,Z),N.Z&&N.Z.locals&&N.Z.locals;var O=e(810);const S=()=>{const n=i.useRef(null);return(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("section",Object.assign({id:"contact",className:"contact"},{children:[(0,t.jsx)("h1",{children:"Contact"}),(0,t.jsxs)("form",Object.assign({ref:n,onSubmit:r=>{var e;r.preventDefault();const t=n.current?n.current:"";O.ZP.sendForm("service_j6mk07w","template_0jf3c55",t,"wzeV7jLVOTmlUXHYx").then((n=>{console.log(n.text)}),(n=>{console.log(n.text)})),null===(e=n.current)||void 0===e||e.reset()}},{children:[(0,t.jsxs)("aside",{children:[(0,t.jsx)("label",Object.assign({htmlFor:"name"},{children:"Name"})),(0,t.jsx)("input",{className:"form__input",placeholder:"Name",type:"text",name:"user_name"})]}),(0,t.jsxs)("aside",{children:[(0,t.jsx)("label",Object.assign({htmlFor:"email"},{children:"Email"})),(0,t.jsx)("input",{className:"form__input",placeholder:"Email",type:"email",name:"user_email"})]}),(0,t.jsxs)("aside",{children:[(0,t.jsx)("label",Object.assign({htmlFor:"message"},{children:"Message"})),(0,t.jsx)("textarea",{className:"form__message",name:"message"})]}),(0,t.jsx)("input",{className:"form__button",type:"submit",value:"Send"})]}))]}))})};var T=e(545),A={};A.styleTagTransform=u(),A.setAttributes=p(),A.insert=d().bind(null,"head"),A.domAPI=l(),A.insertStyleElement=h(),s()(T.Z,A),T.Z&&T.Z.locals&&T.Z.locals;var P=e(208),C={};C.styleTagTransform=u(),C.setAttributes=p(),C.insert=d().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=h(),s()(P.Z,C),P.Z&&P.Z.locals&&P.Z.locals;var E=e(585),F=e(155),z=e(583),I=e(434),R=e(922);const B=()=>{const{themeName:n,toggleTheme:r}=i.useContext(R.N),[e,a]=i.useState(!1),s=()=>a(!e);return(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("nav",Object.assign({className:"center nav"},{children:[(0,t.jsxs)("ul",Object.assign({style:{display:e?"flex":""},className:"nav__list"},{children:[(0,t.jsx)("li",Object.assign({className:"nav__list-item"},{children:(0,t.jsx)("a",Object.assign({href:"#projects",className:"link link--nav",onClick:s},{children:"Projects"}))})),(0,t.jsx)("li",Object.assign({className:"nav__list-item"},{children:(0,t.jsx)("a",Object.assign({className:"link link--nav",href:"#skills",onClick:s},{children:"Skills"}))})),(0,t.jsx)("li",Object.assign({className:"nav__list-item"},{children:(0,t.jsx)("a",Object.assign({className:"link link--nav",href:"#contact",onClick:s},{children:"Contact"}))}))]})),(0,t.jsx)("button",Object.assign({type:"button",className:"btn btn--icon nav__theme","aria-label":"toggle theme",onClick:r},{children:"dark"===n?(0,t.jsx)(I.hjx,{}):(0,t.jsx)(z.TLr,{})})),(0,t.jsx)("button",Object.assign({type:"button",className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",onClick:s},{children:e?(0,t.jsx)(F.nfZ,{}):(0,t.jsx)(E.vHB,{})}))]}))})},W=()=>{const{homepage:n,title:r}=H;return(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("header",Object.assign({className:"header center"},{children:[(0,t.jsx)("h3",{children:n?(0,t.jsx)("a",Object.assign({href:"#",className:"link"},{children:r})):r}),(0,t.jsx)(B,{})]}))})},H={homepage:"https://github.com/craigdev937",title:"CraigDev937"};var L=e(682),U={};U.styleTagTransform=u(),U.setAttributes=p(),U.insert=d().bind(null,"head"),U.domAPI=l(),U.insertStyleElement=h(),s()(L.Z,U),L.Z&&L.Z.locals&&L.Z.locals;const Y=()=>(0,t.jsx)(i.Fragment,{children:(0,t.jsx)("footer",Object.assign({className:"footer"},{children:(0,t.jsx)("a",Object.assign({className:"link footer__link",href:"https://github.com/craigdev937",target:"_blank",rel:"noreferrer"},{children:"2023 Created by Craig Johnson"}))}))});var D=e(369),G={};G.styleTagTransform=u(),G.setAttributes=p(),G.insert=d().bind(null,"head"),G.domAPI=l(),G.insertStyleElement=h(),s()(D.Z,G),D.Z&&D.Z.locals&&D.Z.locals;const M=["HTML","CSS","JavaScript","TypeScript","React","Redux Toolkit","Git","GitHub","Node.js","Express.js","Express Handlebars","REST APIs","MongoDB Atlas","PostgreSQL"],V=[{id:1,title:"Bookstore",description:"A Bookstore Project.",technology:"Webpack, Babel, and React.",img:"https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg",link:"https://en.wikipedia.org/wiki/Bookselling",github:"https://github.com/craigdev937"},{id:2,title:"College Grad",description:"A Grad Student Project.",technology:"Webpack, TypeScript, and React.",img:"https://cdn.pixabay.com/photo/2019/02/11/21/06/college-students-3990783_1280.jpg",link:"https://en.wikipedia.org/wiki/College",github:"https://github.com/craigdev937"},{id:3,title:"Soccer",description:"A project teaching Soccer drills.",technology:"Webpack, TypeScript, and React.",img:"https://cdn.pixabay.com/photo/2022/03/04/11/51/football-game-7047128_1280.jpg",link:"https://en.wikipedia.org/wiki/Soccer_in_the_United_States/",github:"https://github.com/craigdev937"},{id:4,title:"Steplechase",description:"A Fitness Project on long distance running.",technology:"Webpack, TypeScript, and React.",img:"https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg",link:"https://en.wikipedia.org/wiki/Steeplechase_(athletics)",github:"https://github.com/craigdev937"},{id:5,title:"Travel",description:"A Project about traveling overseas.",technology:"Webpack, Babel, and React.",img:"https://cdn.pixabay.com/photo/2016/11/19/20/19/supermoon-1840957_1280.jpg",link:"https://en.wikipedia.org/wiki/Travel",github:"https://github.com/craigdev937"},{id:6,title:"Outer Space",description:"A Project about discovering outer space!",technology:"Webpack, TypeScript, React, and Redux-Toolkit.",img:"https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg",link:"https://en.wikipedia.org/wiki/Outer_space/",github:"https://github.com/craigdev937"}],J=()=>(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("main",Object.assign({id:"skills",className:"section skills"},{children:[(0,t.jsx)("h2",Object.assign({className:"skills__title"},{children:"Skills"})),(0,t.jsx)("ul",Object.assign({className:"skills__list"},{children:M.map(((n,r)=>(0,t.jsx)("li",Object.assign({className:"skills__list-item \r\n                                btn btn--plain"},{children:n}),r)))}))]}))});var Q=e(279),X={};X.styleTagTransform=u(),X.setAttributes=p(),X.insert=d().bind(null,"head"),X.domAPI=l(),X.insertStyleElement=h(),s()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;var $=e(325),q={};q.styleTagTransform=u(),q.setAttributes=p(),q.insert=d().bind(null,"head"),q.domAPI=l(),q.insertStyleElement=h(),s()($.Z,q),$.Z&&$.Z.locals&&$.Z.locals;const K=({project:n})=>(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("section",Object.assign({className:"project"},{children:[(0,t.jsx)("h3",{children:n.title}),(0,t.jsx)("p",Object.assign({className:"project__description"},{children:n.description})),(0,t.jsx)("img",{className:"project__img",alt:n.title,src:n.img}),(0,t.jsx)("p",Object.assign({className:"project__tech"},{children:n.technology})),(0,t.jsx)("a",Object.assign({href:n.link,"aria-label":"website",target:"_blank",rel:"noreferrer"},{children:(0,t.jsx)(I.wgi,{className:"project__icon"})})),(0,t.jsx)("a",Object.assign({href:n.github,"aria-label":"github",target:"_blank",rel:"noreferrer"},{children:(0,t.jsx)(v.VtC,{className:"project__icon"})}))]}))}),nn=()=>(0,t.jsx)(i.Fragment,{children:(0,t.jsxs)("section",Object.assign({id:"projects",className:"section projects"},{children:[(0,t.jsx)("h2",Object.assign({className:"section__title"},{children:"Projects"})),(0,t.jsx)("aside",Object.assign({className:"projects__grid"},{children:V.map((n=>(0,t.jsx)(K,{project:n},n.id)))}))]}))});var rn=e(644),en={};en.styleTagTransform=u(),en.setAttributes=p(),en.insert=d().bind(null,"head"),en.domAPI=l(),en.insertStyleElement=h(),s()(rn.Z,en),rn.Z&&rn.Z.locals&&rn.Z.locals;const tn=()=>{const[n,r]=i.useState(!1);return i.useEffect((()=>{const n=()=>window.pageYOffset>200?r(!0):r(!1);return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[]),n?(0,t.jsx)(i.Fragment,{children:(0,t.jsx)("main",Object.assign({className:"scroll-top"},{children:(0,t.jsx)("a",Object.assign({href:"#top"},{children:(0,t.jsx)(z.aon,{className:"scrollUP"})}))}))}):null},an=()=>{const{themeName:n}=i.useContext(R.N);return(0,t.jsx)("section",Object.assign({id:"top",className:`${n} app`},{children:(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(W,{}),(0,t.jsxs)("section",Object.assign({className:"main"},{children:[(0,t.jsx)(w,{}),(0,t.jsx)(J,{}),(0,t.jsx)(nn,{}),(0,t.jsx)(S,{})]})),(0,t.jsx)(tn,{}),(0,t.jsx)(Y,{})]})}))}}}]);