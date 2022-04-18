let elementoImg1 = document.querySelector('#img1')
let fig1 = document.querySelector('#fig1')

let a = 0;

console.dir(elementoImg1.setAttribute);

function alterarBotao() {
    a++;
    if (a == 1){
        elementoImg1.setAttribute("src", "assets/js/images/eleven.png");
        elementoImg1.setAttribute("alt", "Eleven");
        fig1.innerText = "Eleven"

    } else if (a == 2) {
        elementoImg1.setAttribute("src", "assets/js/images/mike.png");
        elementoImg1.setAttribute("alt", "Mike");
        fig1.innerText = "Mike"
        
    }
    
    if (a > 2) {
        a = 0;
    elementoImg1.setAttribute("src", "assets/js/images/mike.png");
    elementoImg1.setAttribute("alt", "Dustin");
    fig1.innerText = "Dustin"
    }

}
