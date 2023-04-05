window.addEventListener("load", (event) => {
    onLoad();
});

function onLoad(){
    const mainDiv = document.createElement("div");
    mainDiv.classList = "mainDiv";      
    dynamicGridSize(15,15,mainDiv);    
}

function addBoxes(noRows, noCols,  mainDiv){
    for(let i = 0; i < noCols*noRows;i++){
        const box = document.createElement("div");
        box.classList = "theBoxes";
        mainDiv.appendChild(box);
    }
}

function dynamicGridSize(noRows,noCols, mainDiv){
addBoxes(noRows, noCols, mainDiv);
    let colNoSt = `repeat(${noCols}, auto)` 
    mainDiv.style.gridTemplateColumns = colNoSt;
    document.body.appendChild(mainDiv);
}