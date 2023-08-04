const display = document.getElementById("display-scroll");
const cards = document.querySelectorAll(".section");
const rows = document.querySelectorAll("tr");

addEventListener("load",() => {
    setTableDataBars(rows);
})

function getBlobPositionY(blob) {
    let blobY = blob.offsetTop;
    let blobH = blob.clientHeight;

    let windowY = window.scrollY;
    let windowH = window.innerHeight;

    return (blobY-(windowY-blobH))/(windowH+blobH)
}

function setBlobPosition(cards) {
    cards.forEach((card) => {
        let blobCenter = card.offsetTop + card.clientHeight/2;
        let blobScreenPosition = (blobCenter-window.scrollY)/window.innerHeight;
        
        let xPosition = mathCurve(blobScreenPosition);
        card.style.setProperty("--x-screen-position", (xPosition*25) + "vw");
    })
}

function setTableDataBars(rows) {
    rows.forEach((row) => {
        const style = getComputedStyle(row);
        const height = style.height;
        row.style.setProperty("--row-height", height);
    })
}

function mathCurve(x) {
    return -Math.pow(((4*x-2)/2),2)+1;
}
