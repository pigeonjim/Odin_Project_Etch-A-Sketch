window.addEventListener("load", (event) => {
    onLoad();
});

function onLoad(){
    const mainDiv = document.createElement("div");
    mainDiv.classList = "mainDiv";    
    addBoxes(50,mainDiv);
    document.body.appendChild(mainDiv);
}

function addBoxes(noBoxes, mainDiv){

    for(let i = 0; i < noBoxes;i++){
        const box = document.createElement("div");
        box.classList = "theBoxes";
        mainDiv.appendChild(box);
    }
}