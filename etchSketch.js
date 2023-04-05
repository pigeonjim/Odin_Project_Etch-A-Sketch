window.addEventListener("load", (event) => {
    onLoad();
});

function onLoad(boxSize = 16){
    const mainDiv = document.createElement("div");
    const headerDiv = document.createElement("div");
    const theButton = document.createElement("button");
    const flexDiv = document.createElement("div");
    mainDiv.classList = "mainDiv";  
    headerDiv.classList = "esHeader"
    theButton.classList = "theButton"
    flexDiv.classList = "flexDiv"
    theButton.textContent = "Click button to start again"
    dynamicGridSize(boxSize,mainDiv);   
    headerDiv.appendChild(theButton);
    document.body.appendChild(flexDiv);
    flexDiv.appendChild(headerDiv);
    flexDiv.appendChild(mainDiv);
    theButton.addEventListener("click", (event) => {
        clickTheButton();
    })
}

function addBoxes(boxSideSize, mainDiv){
    for(let i = 0; i < boxSideSize*boxSideSize;i++){
        const box = document.createElement("div");
        box.classList = "theBoxes";
        mainDiv.appendChild(box);        

        box.addEventListener("mouseover", (event) => {
            box.style.setProperty("background-color", "#000000" )
        });       
    }
}

function dynamicGridSize(boxSideSize, mainDiv){
    addBoxes(boxSideSize, mainDiv);
    let colNoSt = `repeat(${boxSideSize}, auto)` 
    mainDiv.style.gridTemplateColumns = colNoSt;
}

function clickTheButton(){
   let boxDimensions = window.prompt("Please enter the size of one side of the square you would like.\nA Max of 100")
    if(boxDimensions > 100 || boxDimensions < 1){
        window.alert("Value must be between 1 and 100");
        clickTheButton();
    } else{
            let theDiv = document.querySelector(".mainDiv");
            while (theDiv.hasChildNodes()){
                theDiv.removeChild(theDiv.lastChild)
            }
            dynamicGridSize(boxDimensions,theDiv)

    }
}
