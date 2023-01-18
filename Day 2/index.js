// Script for Crausol starts here
let arr = ["https://assets.tatacliq.com/medias/sys_master/images/45554503090206.jpg","https://assets.tatacliq.com/medias/sys_master/images/45584595386398.jpg","https://assets.tatacliq.com/medias/sys_master/images/45581158940702.jpg","https://assets.tatacliq.com/medias/sys_master/images/45581159006238.jpg","https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg","https://assets.tatacliq.com/medias/sys_master/images/45584593518622.gif"]

slider(arr);

function slider(arr){
    let crausol = document.getElementById("slider");
    console.log(crausol)
    let img = document.createElement("img");
    let x = 0;
    setInterval(()=>{
        if(x==6){
            x=0;
        }
        img.setAttribute("src",arr[x++])
    },3000)
    crausol.append(img);
}
// Script for Crausol Ends here