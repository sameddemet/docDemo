"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[765],{5082:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var s=i(5893),l=i(1151);const r={sidebar_position:2},c="Edit Fichier",d={id:"Systemes/Edit Fichier",title:"Edit Fichier",description:"- head -n2 index.html : Affiche les deux premi\xe8res lignes du fichier.",source:"@site/docs/Systemes/Edit Fichier.md",sourceDirName:"Systemes",slug:"/Systemes/Edit Fichier",permalink:"/docDemo/docs/Systemes/Edit Fichier",draft:!1,unlisted:!1,editUrl:"https://github.com/sameddemet/docDemo/docs/Systemes/Edit Fichier.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux Base",permalink:"/docDemo/docs/Systemes/Linux Base"},next:{title:"System.d Services",permalink:"/docDemo/docs/Systemes/Systemd Services"}},o={},t=[];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"edit-fichier",children:"Edit Fichier"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"head -n2 index.html"})," : Affiche les deux premi\xe8res lignes du fichier."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tail -n2 index.html"})," : Affiche les deux derni\xe8res lignes du fichier."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"/var/log"})," : Dossier contenant l'ensemble des enregistrements de journal."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tail -f  *.log"})," ou ",(0,s.jsx)(n.code,{children:"tail -f /var/log/*.log"})," : Affiche la derni\xe8re ligne de tous les fichiers journaux."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cat auth.log | less"})," : Affiche le contenu de auth.log page par page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cat auth.log | more"})," : Affiche le contenu de auth.log page par page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'cat auth.log | grep sudo | grep student | grep -v TTY | grep -v sudo:auth | awk \'{print "jour: "$2 " Heure: " $3}\''})," : Affiche les lignes de auth.log contenant sudo et student, mais pas TTY ou sudo",":auth",". La commande Awk affiche les 2e et 3e colonnes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"grep imap-login mail.log | awk '{ print $8 }' | sed 's/user=<//' | sed 's/>,//' | sort | uniq -c | sort -k1 -n"})," ",":Affiche"," la huiti\xe8me colonne des lignes contenant imap-login dans mail.log. Ensuite, effectue des modifications avec sed, trie, compte les occurrences, et trie par nombre d'occurrences."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.linuxdata.net/orneklerle-linuxta-sort-komutu-nasil-kullanilir/",children:"Linux Sort "}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://www.linuxdata.net/orneklerle-linuxta-uniq-komutu-nasil-kullanilir/",children:"Linux Uniq "}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://www.yusufsezer.com.tr/linux-awk/",children:"Linux AWK "})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Affiche les journaux du service apache2.:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"journalctl -u apache2.service"})," ou"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"tail -f /var/log/apache2/*.log"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ed apache2.conf"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$p"})," : Affiche la derni\xe8re ligne du fichier apache2.conf."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1p"})," : Affiche la premi\xe8re ligne du fichier apache2.conf."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dans Vim:"}),"\n",(0,s.jsx)(n.p,{children:'Remplace toutes les occurrences de "AllowOverride all" par "AllowOverride None".'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:":%s/AllowOverride all/AllowOverride None/g"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Modifie le fichier apache2.conf sans l'ouvrir:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sed -i -e 's/AllowOverride all/AllowOverride None/g' apache2.conf"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:['Supprime les occurrences de "AllowOverride all" dans apache2.conf.',"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sed -i -e 's/AllowOverride all//g' apache2.conf"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var s=i(7294);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);