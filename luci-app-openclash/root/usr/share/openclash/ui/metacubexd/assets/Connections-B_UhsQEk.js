import{N as O,u as ie,d as n,O as Te,S as ze,i as s,P as ce,Q as Ge,t as g,b as Me,y as Ee,A as $,R as Ke,T as Y,U as i,B as x,V as J,I as W,W as ee,H as D,X as R,Y as te,Z as ae,_ as Re,r as Ne,w as Oe,D as b,g as y,$ as I,a0 as w,a1 as ne,E as Ae,a2 as He,a3 as je,F as T,a4 as N,a5 as Ve,a6 as Ue,a7 as Ze,a8 as Le,a9 as Qe,aa as qe,m as Be}from"./index-DNc1N1Rv.js";import{c as Xe,g as Ye,a as Je,b as We,d as et,e as tt,I as at,f as nt,h as z,i as lt,j as st,r as rt}from"./index-XbeMqmJa.js";import{D as ot}from"./DocumentTitle-D55F_IfB.js";import{f as it}from"./time-C4gqnMrH.js";/**
 * @license @tabler/icons-solidjs v3.23.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ct=O("outline","info-small","IconInfoSmall",[["path",{d:"M12 9h.01"}],["path",{d:"M11 12h1v4h1"}]]);/**
 * @license @tabler/icons-solidjs v3.23.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var le=O("filled","zoom-in-filled","IconZoomInFilled",[["path",{d:"M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 2.928a1 1 0 0 0 -.993 .883l-.007 .117v2h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2v2l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-2h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z"}]]);/**
 * @license @tabler/icons-solidjs v3.23.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var se=O("filled","zoom-out-filled","IconZoomOutFilled",[["path",{d:"M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-1 5.928h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"}]]),dt=g("<pre><code>");const ut=d=>{const[f]=ie();return n(Ge,{ref:m=>{var a;return(a=d.ref)==null?void 0:a.call(d,m)},get icon(){return n(Te,{size:24})},get title(){return f("connectionsDetails")},get children(){return n(ze,{get when(){return d.selectedConnectionID},get children(){var m=dt(),a=m.firstChild;return s(a,()=>JSON.stringify(ce().find(({id:S})=>S===d.selectedConnectionID),null,2)),m}})}})};var gt=async d=>{typeof d=="string"?await navigator.clipboard.writeText(d):await navigator.clipboard.write(d)},re=g('<div class="flex h-4 items-center">'),mt=g('<div class="flex h-full flex-col gap-2"><div class="flex w-full flex-wrap items-center gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><div class="flex items-center"><span class="mr-2 hidden lg:inline-block">:</span><input type=checkbox class=toggle></div><select class="select select-bordered select-primary select-sm w-full max-w-full flex-1"><option value=""></option></select></div><div class="join flex flex-1 items-center"><input type=search class="input input-sm join-item input-primary min-w-0 flex-1"></div></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),pt=g('<button><span></span><div class="badge badge-sm">'),bt=g("<option>"),ft=g('<div class="loading loading-spinner">'),ht=g("<tr>"),vt=g("<th class=bg-base-200><div><div>"),Ct=g("<button class=cursor-pointer>"),$t=g('<tr class="hover:!bg-primary hover:text-primary-content">'),St=g("<td class=py-2>"),_t=g("<button><div></div><div></div><div>(<!>)");const oe=(d,f,m,a)=>{const S=rt(d.getValue(f),m);return a({itemRank:S}),S.passed},wt=()=>{const d=Me();if(!Ee())return d("/setup",{replace:!0}),null;let f,m;const[a]=ie(),[S,de]=$(0),{activeConnections:A,closedConnections:H,paused:ue,setPaused:ge}=Ke(),[me,j]=$(!1),[pe,V]=$(""),[U,be]=Y($(!1),{name:"enableQuickFilter",storage:localStorage}),[fe,he]=$(),ve=[{header:()=>a("details"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:i.Details,cell:({row:e})=>(()=>{var r=re();return s(r,n(x,{class:"btn-circle btn-xs",onClick:()=>{he(e.original.id),m==null||m.showModal()},get icon(){return n(ct,{size:"16"})}})),r})()},{header:()=>a("close"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:i.Close,cell:({row:e})=>(()=>{var r=re();return s(r,n(x,{class:"btn-circle btn-xs",onClick:()=>J(e.original.id),get icon(){return n(W,{size:"16"})}})),r})()},{header:()=>a("ID"),enableGrouping:!1,accessorKey:i.ID,accessorFn:e=>e.id},{header:()=>a("type"),accessorKey:i.Type,accessorFn:e=>`${e.metadata.type}(${e.metadata.network})`},{header:()=>a("process"),accessorKey:i.Process,accessorFn:e=>e.metadata.process||e.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>a("host"),accessorKey:i.Host,accessorFn:e=>`${e.metadata.host?e.metadata.host:e.metadata.destinationIP}:${e.metadata.destinationPort}`},{header:()=>a("sniffHost"),accessorKey:i.SniffHost,accessorFn:e=>e.metadata.sniffHost||"-"},{header:()=>a("rule"),accessorKey:i.Rule,accessorFn:e=>e.rulePayload?`${e.rule} :: ${e.rulePayload}`:e.rule},{header:()=>a("chains"),accessorKey:i.Chains,accessorFn:e=>e.chains.slice().reverse().join(" :: ")},{header:()=>a("connectTime"),enableGrouping:!1,accessorKey:i.ConnectTime,accessorFn:e=>it(e.start),sortingFn:(e,r)=>ee(e.original.start).valueOf()-ee(r.original.start).valueOf()},{header:()=>a("dlSpeed"),enableGrouping:!1,accessorKey:i.DlSpeed,accessorFn:e=>`${D(e.downloadSpeed)}/s`,sortingFn:(e,r)=>e.original.downloadSpeed-r.original.downloadSpeed},{header:()=>a("ulSpeed"),enableGrouping:!1,accessorKey:i.UlSpeed,accessorFn:e=>`${D(e.uploadSpeed)}/s`,sortingFn:(e,r)=>e.original.uploadSpeed-r.original.uploadSpeed},{header:()=>a("dl"),enableGrouping:!1,accessorKey:i.Download,accessorFn:e=>D(e.download),sortingFn:(e,r)=>e.original.download-r.original.download},{header:()=>a("ul"),enableGrouping:!1,accessorKey:i.Upload,accessorFn:e=>D(e.upload),sortingFn:(e,r)=>e.original.upload-r.original.upload},{header:()=>a("sourceIP"),accessorKey:i.SourceIP,accessorFn:e=>{const r=R().find(h=>h.sourceIP===e.metadata.sourceIP);return r?r.tagName:e.metadata.sourceIP}},{header:()=>a("sourcePort"),accessorKey:i.SourcePort,accessorFn:e=>e.metadata.sourcePort},{header:()=>a("destination"),accessorKey:i.Destination,accessorFn:e=>e.metadata.remoteDestination||e.metadata.destinationIP||e.metadata.host},{header:()=>a("inboundUser"),accessorKey:i.InboundUser,accessorFn:e=>e.metadata.inboundUser||e.metadata.inboundName||e.metadata.inboundPort}],[Ce,$e]=$([]),[Se,_e]=Y($([{id:i.ConnectTime,desc:!0}]),{name:"connectionsTableSorting",storage:localStorage}),F=Xe({filterFns:{fuzzy:oe},state:{get columnOrder(){return te()},get grouping(){return Ce()},get sorting(){return Se()},get columnVisibility(){return ae()},get globalFilter(){return pe()}},get data(){const e=S()===0?A():H();if(e.sort((h,P)=>h.id.localeCompare(P.id)),!U())return e;const r=new RegExp(Re(),"i");return e.filter(h=>!r.test(h.chains.join("")))},sortDescFirst:!0,enableHiding:!0,columns:ve,onGlobalFilterChange:V,globalFilterFn:oe,onGroupingChange:$e,onSortingChange:_e,getFilteredRowModel:Ye(),getSortedRowModel:Je(),getExpandedRowModel:We(),getGroupedRowModel:et(),getCoreRowModel:tt()}),G=F.getFlatHeaders().find(({id:e})=>e===i.SourceIP),[M,ye]=$("");Ne(Oe(M,()=>{const e=R().find(r=>r.sourceIP===M());G==null||G.column.setFilterValue(e?e.tagName:M())}));const Fe=b(()=>[{type:0,name:a("active"),count:A().length},{type:1,name:a("closed"),count:H().length}]);return[n(ot,{get children(){return a("connections")}}),(()=>{var e=mt(),r=e.firstChild,h=r.firstChild,P=h.firstChild,Z=P.nextSibling,E=Z.firstChild,xe=E.firstChild,L=E.nextSibling,K=Z.nextSibling,Ie=K.firstChild,k=h.nextSibling,Q=k.firstChild,we=r.nextSibling,q=we.firstChild,B=q.firstChild,Pe=B.nextSibling;return s(P,n(ne,{get each(){return Fe()},children:t=>(()=>{var o=pt(),l=o.firstChild,v=l.nextSibling;return o.$$click=()=>de(t().type),s(l,()=>t().name),s(v,()=>t().count),y(()=>I(o,w(S()===t().type&&"tab-active","tab-sm sm:tab-md tab gap-2 px-2"))),o})()})),s(E,()=>a("quickFilter"),xe),L.addEventListener("change",t=>be(t.target.checked)),K.addEventListener("change",t=>ye(t.target.value)),s(Ie,()=>a("all")),s(K,n(ne,{get each(){return Ae.uniq(ce().map(({metadata:{sourceIP:t}})=>{const o=R().find(l=>l.sourceIP===t);return o?o.tagName:t})).sort()},children:t=>(()=>{var o=bt();return s(o,t),y(()=>o.value=t()),o})()}),null),Q.$$input=t=>V(t.target.value),s(k,n(x,{class:"btn btn-primary join-item btn-sm",onClick:()=>ge(t=>!t),get icon(){return b(()=>!!ue())()?n(at,{}):n(nt,{})}}),null),s(k,n(x,{class:"btn btn-primary join-item btn-sm",onClick:async()=>{j(!0),F.getState().globalFilter?await Promise.allSettled(F.getFilteredRowModel().rows.map(({original:t})=>J(t.id))):await He(),j(!1)},get icon(){return b(()=>!!me())()?ft():n(W,{})}}),null),s(k,n(x,{class:"btn btn-primary join-item btn-sm",onClick:()=>f==null?void 0:f.showModal(),get icon(){return n(je,{})}}),null),s(B,n(T,{get each(){return F.getHeaderGroups()},children:t=>(()=>{var o=ht();return s(o,n(T,{get each(){return t.headers},children:l=>(()=>{var v=vt(),C=v.firstChild,c=C.firstChild;return s(C,(()=>{var u=b(()=>!!l.column.getCanGroup());return()=>u()?(()=>{var p=Ct();return N(p,"click",l.column.getToggleGroupingHandler(),!0),s(p,(()=>{var _=b(()=>!!l.column.getIsGrouped());return()=>_()?n(se,{size:18}):n(le,{size:18})})()),p})():null})(),c),N(c,"click",l.column.getToggleSortingHandler(),!0),s(c,()=>z(l.column.columnDef.header,l.getContext())),s(C,()=>({asc:n(lt,{}),desc:n(st,{})})[l.column.getIsSorted()]??null,null),y(u=>{var p=w("flex items-center gap-2"),_=w(l.column.getCanSort()&&"cursor-pointer select-none","flex-1");return p!==u.e&&I(C,u.e=p),_!==u.t&&I(c,u.t=_),u},{e:void 0,t:void 0}),v})()})),o})()})),s(Pe,n(T,{get each(){return F.getRowModel().rows},children:t=>(()=>{var o=$t();return s(o,n(T,{get each(){return t.getVisibleCells()},children:l=>(()=>{var v=St();return v.$$contextmenu=C=>{C.preventDefault();const c=l.renderValue();c&&gt(c).catch(()=>{})},s(v,(()=>{var C=b(()=>!!l.getIsGrouped());return()=>C()?(()=>{var c=_t(),u=c.firstChild,p=u.nextSibling,_=p.nextSibling,ke=_.firstChild,X=ke.nextSibling;return X.nextSibling,N(c,"click",t.getToggleExpandedHandler(),!0),s(u,(()=>{var De=b(()=>!!t.getIsExpanded());return()=>De()?n(se,{size:18}):n(le,{size:18})})()),s(p,()=>z(l.column.columnDef.cell,l.getContext())),s(_,()=>t.subRows.length,X),y(()=>I(c,w(t.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),c})():(()=>{var c=b(()=>!!l.getIsAggregated());return()=>c()?z(l.column.columnDef.aggregatedCell??l.column.columnDef.cell,l.getContext()):(()=>{var u=b(()=>!!l.getIsPlaceholder());return()=>u()?null:z(l.column.columnDef.cell,l.getContext())})()})()})()),v})()})),o})()})),s(e,n(Ze,{ref:t=>f=t,get order(){return te()},get visible(){return ae()},onOrderChange:t=>Ve(t),onVisibleChange:t=>Ue({...t})}),null),s(e,n(ut,{ref:t=>m=t,get selectedConnectionID(){return fe()}}),null),y(t=>{var o=a("search"),l=w(Le(Qe()),"table table-zebra relative rounded-none");return o!==t.e&&qe(Q,"placeholder",t.e=o),l!==t.t&&I(q,t.t=l),t},{e:void 0,t:void 0}),y(()=>L.checked=U()),e})()]};Be(["input","click","contextmenu"]);export{wt as default};
