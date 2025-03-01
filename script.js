//your JS code here. If required.
document.getElementsByTagName("input")[0].addEventListener("click",function(){
	const x=document.getElementById("colorSelect")
if(x.selectedIndex!==-1){
	x.remove(x.selectedIndex);
}
})