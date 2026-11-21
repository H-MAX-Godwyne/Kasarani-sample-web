(function(){
var names=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],full=["January","February","March","April","May","June","July","August","September","October","November","December"],intakes=[0,2,4,6,8];
var courses=[["Community Health","Promote health, prevent disease and support families and communities."],["Nursing Assistant","Learn the basic patient-care skills used in wards and clinics."],["Perioperative Theatre Technology","Support surgical teams before, during and after operations."],["Health Records","Manage patient information and health data accurately and securely."],["Nutrition and Dietetics","Help people eat well and manage conditions through diet."],["Counselling Psychology","Build the skills to listen, support and guide people through difficult times."],["Medical Engineering","Install, maintain and repair the equipment hospitals depend on."]];
var now=new Date(),cm=now.getMonth(),nx=intakes.find(function(m){return m>cm}),inNext=false;
if(nx===undefined){nx=0;inNext=true}
var box=document.getElementById("months");
names.forEach(function(n,i){var d=document.createElement("div");d.className="m"+(intakes.indexOf(i)>-1?" on":"")+(i===nx?" next":"");d.textContent=n;box.appendChild(d)});
document.getElementById("nextline").textContent="Next intake: "+full[nx]+(inNext?" "+(now.getFullYear()+1):"");
document.getElementById("yr").textContent=now.getFullYear();
var it=document.getElementById("it");it.value=full[nx];
var cg=document.getElementById("cg"),co=document.getElementById("co");
courses.forEach(function(c){
var d=document.createElement("div");d.className="course";
d.innerHTML='<i>'+c[0].charAt(0)+'</i><h3></h3><p></p><a href="#apply">Apply for this course &rarr;</a>';
d.querySelector("h3").textContent=c[0];d.querySelector("p").textContent=c[1];
d.querySelector("a").addEventListener("click",function(){co.value=c[0]});
cg.appendChild(d);
var o=document.createElement("option");o.textContent=c[0];co.appendChild(o)});
var o=document.createElement("option");o.textContent="Not sure yet";co.appendChild(o);
var bg=document.getElementById("bg"),lk=document.getElementById("lk");
bg.addEventListener("click",function(){var s=lk.classList.toggle("open");bg.setAttribute("aria-expanded",s)});
lk.addEventListener("click",function(e){if(e.target.tagName==="A"){lk.classList.remove("open");bg.setAttribute("aria-expanded","false")}});
document.getElementById("send").addEventListener("click",function(){
var n=document.getElementById("nm").value.trim(),p=document.getElementById("ph").value.trim(),c=co.value,err=document.getElementById("err");
if(!n||!c){err.textContent="Enter your name and choose a course.";return}
err.textContent="";
var t="Hello Kasarani College. My name is "+n+(p?" ("+p+")":"")+". I want to enrol for "+c+" at the "+document.getElementById("cp").value+" campus, "+it.value+" intake.";
window.open("https://wa.me/254705975458?text="+encodeURIComponent(t),"_blank","noopener");
});
})();

(function(){
var pages=["home","about","courses","admissions","campuses","apply"],alias={top:"home",enrol:"admissions",faq:"admissions"};
function go(){
var h=(location.hash||"#home").slice(1),p=alias[h]||h;
if(pages.indexOf(p)<0){p="home";h="home"}
document.querySelectorAll("[data-pg]").forEach(function(e){e.classList.toggle("on",e.getAttribute("data-pg")===p)});
document.querySelectorAll(".links a:not(.btn)").forEach(function(a){a.classList.toggle("act",a.getAttribute("href")==="#"+p)});
var t=document.title.split(" | ")[0];
var el=(h!==p)?document.getElementById(h):null;
if(el)el.scrollIntoView();else window.scrollTo(0,0);
}
window.addEventListener("hashchange",go);go();
})();
