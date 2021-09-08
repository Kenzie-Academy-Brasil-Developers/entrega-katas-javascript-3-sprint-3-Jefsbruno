const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];



function showResults(valor) {
    const meuHome = document.getElementById('Alpha')
    const newtag = document.createElement('h4')
    newtag.innerText = valor
    meuHome.appendChild(newtag)
}


function kata1() {

    let resultado = []

    for (let i = 1; i <= 25; i++) {
        resultado += i + ' '
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 1'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)


}



function kata2() {

    let resultado = []

    for (let i = 25; i > 0; i--) {
        resultado += i + ' '
    }

    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 2'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)

}

function kata3() {

    let resultado = []

    for (let i = (-1); i >= (-25); i--) {
        resultado += i + " "
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 3'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)


}

function kata4() {

    let resultado = []

    for (let i = (-25); i <= (-1); i++) {
        resultado += i + " "

    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 4'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata5() {

    let resultado = []

    for (let i = 25; i >= (-25); i--) {

        if (i % 2 != 0) {
            resultado += i + " "
        }
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 5'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)

}

function kata6() {

    let resultado = []

    for (let i = 3; i <= 100; i++) {

        if (i % 3 == 0) {
            resultado += i + " "
        }
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 6'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata7() {

    let resultado = []

    for (let i = 7; i <= 100; i++) {

        if (i % 7 == 0) {
            resultado += i + " "
        }
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 7'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata8() {

    let resultado = []

    for (let i = 100; i >= 3; i--) {

        if ((i % 3 == 0) || (i % 7 == 0)) {
            resultado += i + " "
        }
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 8'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata9() {

    let resultado = []

    for (let i = 5; i <= 100; i++) {

        if ((i % 2 != 0) & (i % 5 == 0)) {
            resultado += i + " "
        }
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 9'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata10() {

    let resultado = []

    for (let i = 0; i < sampleArray.length; i++) {
        resultado += sampleArray[i] + ' '

    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 10'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata11() {

    let resultado = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 == 0) {
            resultado.push(sampleArray[i])
        }

    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 11'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata12() {

    let resultado = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 != 0) {
            resultado.push(sampleArray[i])
        }
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 12'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata13() {

    let resultado = []

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0) {
            resultado.push(sampleArray[i])
        }
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 13'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)

}

function kata14() {
    let resultado = []

    for (let i = 0; i < sampleArray.length; i++) {
        resultado.push(sampleArray[i] * sampleArray[i])
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 14'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata15() {

    let resultado = 0

    for (let i = 1; i <= 20; i++) {
        resultado += i
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 15'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata16() {

    let resultado = 0

    for (let i = 0; i < sampleArray.length; i++) {
        resultado += sampleArray[i]
    }
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 16'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata17() {
    let resultado = Math.min.apply(null, sampleArray)
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 17'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)
}

function kata18() {
    let resultado = Math.max.apply(null, sampleArray)
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    const newTitle = document.createElement('h4')
    newTitle.innerText = 'Kata 18'
    meuHome.appendChild(newSec)
    newSec.appendChild(newTitle)
    const textResul = document.createElement('p')
    textResul.innerText = resultado
    newSec.appendChild(textResul)

}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    meuHome.appendChild(newSec)
    let newh = document.createElement('h4')
    newh.innerText = 'kata Bonus 1'
    newSec.appendChild(newh)

    for (let i = 0; i < 20; i++) {
        const newdiv = document.createElement('div')
        newSec.appendChild(newdiv)
        newdiv.style.backgroundColor = 'gray'
        newdiv.style.height = '20px'
        newdiv.style.width = '100px'

    }


}

function kataBonus2() {
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    meuHome.appendChild(newSec)
    let newh = document.createElement('h4')
    newh.innerText = 'kata Bonus 2'
    newSec.appendChild(newh)
    larg = 100

    for (let i = 0; i < 20; i++) {
        const newdiv = document.createElement('div')
        newSec.appendChild(newdiv)
        newdiv.style.backgroundColor = 'gray'
        newdiv.style.height = '20px'
        newdiv.style.width = `${larg}px`
        larg = larg + 5

    }
}

function kataBonus3() {
    const meuHome = document.getElementById('Alpha')
    const newSec = document.createElement('Section')
    meuHome.appendChild(newSec)
    let newh = document.createElement('h4')
    newh.innerText = 'kata Bonus 3'
    newSec.appendChild(newh)


    for (let i = 0; i < 20; i++) {
        const newdiv = document.createElement('div')
        newSec.appendChild(newdiv)
        newdiv.style.backgroundColor = 'gray'
        newdiv.style.height = '20px'
        newdiv.style.width = `${sampleArray[i]}px`


    }
}

function kataBonus4() {
    let meuHome = document.getElementById('Alpha')
    let newSec = document.createElement('Section')
    meuHome.appendChild(newSec)
    let newh = document.createElement('h4')
    newh.innerText = 'kataBonus4'
    newSec.appendChild(newh)
    let verCinza = true


    for (let i = 0; i < 20; i++) {

        if (i % 2 == 0) {
            const newdiv = document.createElement('div')
            newSec.appendChild(newdiv)
            newdiv.style.backgroundColor = 'gray'
            newdiv.style.height = '20px'
            newdiv.style.width = `${sampleArray[i]}px`
        }
        else {
            const newdiv = document.createElement('div')
            newSec.appendChild(newdiv)
            newdiv.style.backgroundColor = 'red'
            newdiv.style.height = '20px'
            newdiv.style.width = `${sampleArray[i]}px`

        }

        
    }

}



function kataBonus5() {
    let meuHome = document.getElementById('Alpha')
    let newSec = document.createElement('Section')
    meuHome.appendChild(newSec)
    let newh = document.createElement('h4')
    newh.innerText = 'kata Bonus 5'
    newSec.appendChild(newh)
    


    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 == 0) {
            const newdiv = document.createElement('div')
            newdiv.innerText = sampleArray[i]
            newSec.appendChild(newdiv)
            newdiv.style.backgroundColor = 'red'
            newdiv.style.height = '20px'
            newdiv.style.width = `${sampleArray[i]}px`
        }
        else {
            const newdiv = document.createElement('div')
            newdiv.innerText = sampleArray[i]
            newSec.appendChild(newdiv)
            newdiv.style.backgroundColor = 'Gray'
            newdiv.style.height = '20px'
            newdiv.style.width = `${sampleArray[i]}px`

        }
    
}
}

kata1()
kata2()
kata3()
kata4()
kata5()
kata6()
kata7()
kata8()
kata9()
kata10()
kata11()
kata12()
kata13()
kata14()
kata15()
kata16()
kata17()
kata18()
kataBonus1()
kataBonus2()
kataBonus3()
kataBonus4()
kataBonus5()
