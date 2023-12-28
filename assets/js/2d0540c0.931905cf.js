"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15],{5482:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>u,toc:()=>d});var r=s(5893),i=s(1151);const t={sidebar_position:10},o="DNS et R\xe9cursion",u={id:"Reseaux/DNS et R\xe9cursion",title:"DNS et R\xe9cursion",description:"Le service de r\xe9solution DNS permet d\u2019associer un nom facile \xe0 lire et \xe0 \xe9crire par un humain a une valeur, g\xe9n\xe9ralement une adresse IP (type A).",source:"@site/docs/Reseaux/DNS et R\xe9cursion.md",sourceDirName:"Reseaux",slug:"/Reseaux/DNS et R\xe9cursion",permalink:"/docDemo/docs/Reseaux/DNS et R\xe9cursion",draft:!1,unlisted:!1,editUrl:"https://github.com/sameddemet/docDemo/docs/Reseaux/DNS et R\xe9cursion.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Iptables -Netfilter",permalink:"/docDemo/docs/Reseaux/Iptables - Netfilter"},next:{title:"DNS Serveurs Autoritaires",permalink:"/docDemo/docs/Reseaux/DNS Serveurs Autoritaires"}},a={},d=[{value:"Serveur DNS Racine",id:"serveur-dns-racine",level:3},{value:"Les entr\xe9es DNS",id:"les-entr\xe9es-dns",level:3},{value:"<strong>Utilisation de base:</strong>",id:"utilisation-de-base",level:3},{value:"Interrogation pour un type d&#39;enregistrement sp\xe9cifique:",id:"interrogation-pour-un-type-denregistrement-sp\xe9cifique",level:3},{value:"Interrogation d&#39;un serveur DNS sp\xe9cifique:",id:"interrogation-dun-serveur-dns-sp\xe9cifique",level:3},{value:"Interrogation DNS invers\xe9e:",id:"interrogation-dns-invers\xe9e",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"dns-et-r\xe9cursion",children:"DNS et R\xe9cursion"}),"\n",(0,r.jsx)(n.p,{children:"Le service de r\xe9solution DNS permet d\u2019associer un nom facile \xe0 lire et \xe0 \xe9crire par un humain a une valeur, g\xe9n\xe9ralement une adresse IP (type A)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Output",src:s(2597).Z+"",width:"710",height:"365"})}),"\n",(0,r.jsxs)(n.p,{children:['Lorsque nous indiquons \xe0 notre navigateur que nous voulons aller sur "',(0,r.jsx)(n.a,{href:"http://www.google.com",children:"www.google.com"}),'",',' notre demande de connexion est envoy\xe9e \xe0 DNS, DNS informe notre navigateur que l\'adresse IP de Google est "8.8.8.8.8" et notre navigateur \xe9tablit une connexion \xe0 cette adresse IP en arri\xe8re-plan.']}),"\n",(0,r.jsx)(n.p,{children:"Deux types de serveurs DNS sont impliqu\xe9s dans ce processus :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les serveurs autoritaire, qui conntiennent toutes les entr\xe9es DNS associ\xe9es \xe0 une liste de zone qu\u2019ils g\xe8rent."}),"\n",(0,r.jsx)(n.li,{children:"Les serveurs r\xe9cursif qui permette de r\xe9soudre les DNS et s\u2019occupent d\u2019aller contacter les serveurs DNS autoritaire n\xe9cessaires."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"serveur-dns-racine",children:"Serveur DNS Racine"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Output",src:s(2516).Z+"",width:"976",height:"413"}),"\r\nOrganis\xe9 de mani\xe8re hi\xe9rarchique depuis les serveurs racines vers les serveurs les plus pr\xe9cis, chacun d\u2019entre eux est d\xe9sign\xe9 par un serveur de plus haut niveau. On peut distinguer 3 cat\xe9gories :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les serveurs racines au nombre de 13 sous gouvernance US qui sont le point de d\xe9part"}),"\n",(0,r.jsx)(n.li,{children:"Les TLD\u2019s et nTLD\u2019s : .fr , .com .org .io .cloud .it"}),"\n",(0,r.jsx)(n.li,{children:"Les domaines de deuxi\xe8me niveau : oclock.io, free.fr, eddi.cloud."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"les-entr\xe9es-dns",children:"Les entr\xe9es DNS"}),"\n",(0,r.jsx)(n.p,{children:"Ils peuvent \xeatre de plusieurs type :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"A (Host)"})," pour associer un nom \xe0 une IP"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CNAME(Canonical Name)"})," pour associer un nom \xe0 un autre nom, on appelle \xe7a un alias"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AAAA(Address Record)"})," pour associer un nom \xe0 une IPv6"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TXT"})," pour associer un nom \xe0 un texte (\xe7a parait inutile comme \xe7a mais c\u2019est tr\xe8s pratique et utilis\xe9). Certains s\u2019en servent un peu comme une base de donn\xe9e NoSQL."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NS(Name Server)"})," pour associer les serveurs DNS \xe0 une zone"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"PTR (Pointer Record)"})," pour faire l\u2019inverse du A et associer une ip \xe0 un nom"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MX(Mail Exchanger)"})," pour indiquer o\xf9 envoyer les mails d\u2019un domaine."]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"utilisation-de-la-commande-dig",children:(0,r.jsx)(n.strong,{children:'Utilisation de la commande "dig"'})}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"dig"})," est un outil utilis\xe9 pour effectuer des requ\xeates dans le syst\xe8me Domain Name System (DNS). Cette commande est utilis\xe9e pour interroger des informations sp\xe9cifiques sur un enregistrement DNS ou pour tester des serveurs DNS."]}),"\n",(0,r.jsx)(n.h3,{id:"utilisation-de-base",children:(0,r.jsx)(n.strong,{children:"Utilisation de base:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig example.com\n"})}),"\n",(0,r.jsx)(n.p,{children:'La commande ci-dessus interroge le DNS pour le domaine "example.com" et affiche les informations pertinentes.'}),"\n",(0,r.jsx)(n.h3,{id:"interrogation-pour-un-type-denregistrement-sp\xe9cifique",children:"Interrogation pour un type d'enregistrement sp\xe9cifique:"}),"\n",(0,r.jsx)(n.p,{children:"Pour interroger un type d'enregistrement DNS sp\xe9cifique, utilisez le param\xe8tre -t. Par exemple, pour interroger l'enregistrement A(IPv4) :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig -t A example.com\r\ndig -t AAAA example.com\r\ndig -t MX example.com\r\ndig -t CNAME example.com\r\ndig -t TXT example.com\r\ndig -t SOA example.com\r\ndig -t NS example.com\n"})}),"\n",(0,r.jsx)(n.h3,{id:"interrogation-dun-serveur-dns-sp\xe9cifique",children:"Interrogation d'un serveur DNS sp\xe9cifique:"}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez effectuer une requ\xeate vers un serveur DNS sp\xe9cifique en utilisant le symbole @. Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig @8.8.8.8 example.com\n"})}),"\n",(0,r.jsx)(n.p,{children:'Cette commande interroge le serveur DNS public de Google pour le domaine "example.com".'}),"\n",(0,r.jsx)(n.h3,{id:"interrogation-dns-invers\xe9e",children:"Interrogation DNS invers\xe9e:"}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez effectuer une requ\xeate DNS invers\xe9e pour trouver le nom de domaine associ\xe9 \xe0 une adresse IP. Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dig -x 8.8.8.8\n"})}),"\n",(0,r.jsx)(n.p,{children:'Cette commande affiche le nom de domaine associ\xe9 \xe0 l\'adresse IP "8.8.8.8".'})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2597:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/dns-66a6de2886227768aebf5169fb829585.png"},2516:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/servername-f6167c32e4cde8eae11e88c384235923.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>u,a:()=>o});var r=s(7294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);