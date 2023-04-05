window.addEventListener("load", (event) => {
    onLoad();
});

window.addEventListener("resize", (event) => {
    setTheHeights();
})

function onLoad(){
    const mainDiv = document.createElement("div");
    mainDiv.classList = "mainDiv grid";  
    dynamicGridSize(16,16,mainDiv);    
}

function addBoxes(noRows, noCols,  mainDiv){
    for(let i = 0; i < noCols*noRows;i++){
        const box = document.createElement("div");
        box.classList = "theBoxes";
        mainDiv.appendChild(box);        
        let boxHeight = `${(window.innerHeight * 0.85)/noCols}px`;
        box.style.setProperty("height", boxHeight);        
    }
}

function dynamicGridSize(noRows,noCols, mainDiv){
    addBoxes(noRows, noCols, mainDiv);
    let colNoSt = `repeat(${noCols}, auto)` 
    mainDiv.style.gridTemplateColumns = colNoSt;
    document.body.appendChild(mainDiv);
    let mainDivHeight = `${window.innerHeight * 0.95}px`;
    mainDiv.style.setProperty("max-height", mainDivHeight);
}

function setTheHeights(noCols){    
    let mainDivHeight = `${window.innerHeight * 0.95}px`;
    document.querySelector(".mainDiv").style.setProperty("max-height",mainDivHeight);
    let boxHeight = `${(window.innerHeight * 0.85)/noCols}px`;
    document.querySelector(".theBoxes").style.setProperty("height", boxHeight);
}