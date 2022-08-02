window.addEventListener('load',async (event) => {
    el= await window.document.getElementById("App");
    const page=await fetch(`./about.html`)
    const data=await page.text()
const link=window.document.getElementById("about.html");
link.style.background="yellow"
    // el.style.background="yellow"
    el.innerHTML=data
  });
window.addEventListener("hashchange",async ()=>{
    const links=await window.document.getElementsByClassName("singlelink");
    for(i=0;i<links.length;i++){
        links[i].style.background="";
    }
    el=window.document.getElementById("App");
    const string=location.hash.split("#")[1];
    const page=await fetch(`./${string}`)
    const data=await page.text()
    const link=window.document.getElementById(string);
    link.style.background="yellow"
    el.innerHTML=data
})

