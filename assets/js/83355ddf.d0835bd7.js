"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[970],{8016:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var s=n(5893),r=n(1151);const a={sidebar_position:1},l=void 0,t={id:"Systemes/Linux Tricks",title:"Linux Tricks",description:"MULTIPASS Utilisation",source:"@site/docs/Systemes/Linux Tricks.md",sourceDirName:"Systemes",slug:"/Systemes/Linux Tricks",permalink:"/docDemo/docs/Systemes/Linux Tricks",draft:!1,unlisted:!1,editUrl:"https://github.com/sameddemet/docDemo/docs/Systemes/Linux Tricks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Systemes",permalink:"/docDemo/docs/category/systemes"},next:{title:"Tutorial - Extras",permalink:"/docDemo/docs/category/tutorial---extras"}},d={},o=[{value:"MULTIPASS Utilisation",id:"multipass-utilisation",level:3},{value:"SUDO without password",id:"sudo-without-password",level:3},{value:"Search and delete",id:"search-and-delete",level:3},{value:"Klavye Yon Tuslari Calismazsa;",id:"klavye-yon-tuslari-calismazsa",level:3},{value:"Creation d&#39;un Certificat",id:"creation-dun-certificat",level:3},{value:"Ssh with key",id:"ssh-with-key",level:3},{value:"Create Alias",id:"create-alias",level:3},{value:"Tar et Gz",id:"tar-et-gz",level:3},{value:"Ssh no passwd",id:"ssh-no-passwd",level:3},{value:"Reconfigure le packet",id:"reconfigure-le-packet",level:3},{value:"Dev/Null;",id:"devnull",level:3}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h3,{id:"multipass-utilisation",children:"MULTIPASS Utilisation"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://medium.com/@kurkoc/multipass-nedir-dc86cf0e8018",children:"https://medium.com/@kurkoc/multipass-nedir-dc86cf0e8018"})}),"\n",(0,s.jsx)(i.h3,{id:"sudo-without-password",children:"SUDO without password"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"sudo visudo\t\t\t| ajouter le line dans le fichier.\r\nUSERNAME ALL=(ALL) NOPASSWD: ALL"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"search-and-delete",children:"Search and delete"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"apt install ncdu | bosyerler nerede?\r\nsudo ncdu -x /\t| ok tuslari ile ilerle d ye basarsan siler."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"klavye-yon-tuslari-calismazsa",children:"Klavye Yon Tuslari Calismazsa;"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"sudo chsh -s /bin/bash samet //sonra tekrar baglan."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"creation-dun-certificat",children:"Creation d'un Certificat"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"ssh-keygen -t rsa -b 4096"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"ssh-with-key",children:"Ssh with key"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["ssh -i id_oclock ",(0,s.jsx)(i.a,{href:"mailto:student@sameddemet-server.eddi.cloud",children:"student@sameddemet-server.eddi.cloud"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"create-alias",children:"Create Alias"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"alias gg= 'git log --oneline'\r\nvim .bashrc  | dosyasinin icinde de; alias gg= 'git log --oneline'  |satirini ekleyerek yapabilirsin."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"tar-et-gz",children:"Tar et Gz"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"tar -czf"}),"\r\n-c se\xe7ene\u011fi, dosyalar\u0131 ar\u015fivlerken yeni bir ar\u015fiv olu\u015fturulaca\u011f\u0131n\u0131 belirtir. -z se\xe7ene\u011fi, s\u0131k\u0131\u015ft\u0131rma i\u015flemi i\xe7in gzip s\u0131k\u0131\u015ft\u0131rma y\xf6ntemini kullanaca\u011f\u0131n\u0131 belirtir. -f se\xe7ene\u011fi, olu\u015fturulacak ar\u015fiv dosyas\u0131n\u0131n ad\u0131n\u0131 belirlemek i\xe7in kullan\u0131l\u0131r. -r se\xe7ene\u011fiyle (append) dosyay\u0131 ekleyebilir ama c yi cikarmak lazim. -rzf.\r\ntar -czf dosyalarim.tar.gz belge.txt resimler/"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"tar -xzf"}),'\r\n-x se\xe7ene\u011fi, dosyalar\u0131n ar\u015fivden \xe7\u0131kar\u0131laca\u011f\u0131n\u0131 belirtir. -z se\xe7ene\u011fi, gzip s\u0131k\u0131\u015ft\u0131rma y\xf6nteminin kullan\u0131ld\u0131\u011f\u0131n\u0131 belirtir.\r\ntar -xzf dosyalarim.tar.gz\r\nBu komut, "dosyalarim.tar.gz" adl\u0131 ar\u015fiv dosyas\u0131n\u0131 a\xe7ar ve i\xe7indeki dosyalar\u0131 ve dizinleri orijinal konumlar\u0131na \xe7\u0131kar\u0131r.']}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"tar -xzf ar\u015fiv_dosyas\u0131.tar.gz -C hedef_dizin"}),"\r\nhedef dizine cikartir"]}),"\n",(0,s.jsx)(i.h3,{id:"ssh-no-passwd",children:"Ssh no passwd"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"ssh-add >source $(ssh agent)\r\nCikan sonuclari kopyala ve variable olarak env a ekle. Artik ssh sifresi sormaz. Pull vb islemlerde git uzerinden !!!"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"reconfigure-le-packet",children:"Reconfigure le packet"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"dpkg-reconfigure phpmyadmin\t| bir paketi yanlis kurduk diyelim tekrar configure etmek icin."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"devnull",children:"Dev/Null;"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:".... > /dev/null 2>&1 &"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>l});var s=n(7294);const r={},a=s.createContext(r);function l(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);