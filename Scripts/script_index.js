const colors = {
    'F': 'red',
    'B': 'orange',
    'L': 'green',
    'R': 'blue',
    'U': 'white',
    'D': 'yellow'
};

const images = {
    "B": "Rotations/B.png",
    "B2": "Rotations/B2.png",
    "B'": "Rotations/B'.png",
    "D": "Rotations/D.png",
    "D2": "Rotations/D2.png",
    "D'": "Rotations/D'.png",
    "F": "Rotations/F.png",
    "F2": "Rotations/F2.png",
    "F'": "Rotations/F'.png",
    "L": "Rotations/L.png",
    "L2": "Rotations/L2.png",
    "L'": "Rotations/L'.png",
    "R": "Rotations/R.png",
    "R2": "Rotations/R2.png",
    "R'": "Rotations/R'.png",
    "U": "Rotations/U.png",
    "U2": "Rotations/U2.png",
    "U'": "Rotations/U'.png"
};

const rotateTexts = {
    "B": "B - Perform a CW rotation of the back face",
    "B2": "B2 - Perform a 180° rotation of the back face",
    "B'": "B' - Perform a CCW rotation of the back face",
    "D": "D - Perform a CW rotation of the bottom face",
    "D2": "D2 - Perform a 180° rotation of the bottom face",
    "D'": "D' - Perform a CCW rotation of the bottom face",
    "F": "F - Perform a CW rotation of the front face",
    "F2": "F2 - Perform a 180° rotation of the front face",
    "F'": "F' - Perform a CCW rotation of the front face",
    "L": "L - Perform a CW rotation of the left face",
    "L2": "L2 - Perform a 180° rotation of the left face",
    "L'": "L' - Perform a CCW rotation of the left face",
    "R": "R - Perform a CW rotation of the right face",
    "R2": "R2 - Perform a 180° rotation of the right face",
    "R'": "R' - Perform a CCW rotation of the right face",
    "U": "U - Perform a CW rotation of the top face",
    "U2": "U2 - Perform a 180° rotation of the top face",
    "U'": "U' - Perform a CCW rotation of the top face"
};

const elementIds = [
    'topr1c1', 'topr1c2', 'topr1c3',
    'topr2c1', 'topr2c2', 'topr2c3',
    'topr3c1', 'topr3c2', 'topr3c3',
    'rightr1c1', 'rightr1c2', 'rightr1c3',
    'rightr2c1', 'rightr2c2', 'rightr2c3',
    'rightr3c1', 'rightr3c2', 'rightr3c3',
    'frontr1c1', 'frontr1c2', 'frontr1c3',
    'frontr2c1', 'frontr2c2', 'frontr2c3',
    'frontr3c1', 'frontr3c2', 'frontr3c3',
    'downr1c1', 'downr1c2', 'downr1c3',
    'downr2c1', 'downr2c2', 'downr2c3',
    'downr3c1', 'downr3c2', 'downr3c3',
    'leftr1c1', 'leftr1c2', 'leftr1c3',
    'leftr2c1', 'leftr2c2', 'leftr2c3',
    'leftr3c1', 'leftr3c2', 'leftr3c3',
    'backr1c1', 'backr1c2', 'backr1c3',
    'backr2c1', 'backr2c2', 'backr2c3',
    'backr3c1', 'backr3c2', 'backr3c3'
];

function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function splitStringToArray(inputString) {
  return inputString.split(',');
}

document.addEventListener('DOMContentLoaded', function() {
    const cubies = {
        'F1': document.getElementById('frontr1c1'), 'F2': document.getElementById('frontr1c2'), 'F3': document.getElementById('frontr1c3'),
        'F4': document.getElementById('frontr2c1'), 'F5': document.getElementById('frontr2c2'), 'F6': document.getElementById('frontr2c3'),
        'F7': document.getElementById('frontr3c1'), 'F8': document.getElementById('frontr3c2'), 'F9': document.getElementById('frontr3c3'),
        'R1': document.getElementById('rightr1c1'), 'R2': document.getElementById('rightr1c2'), 'R3': document.getElementById('rightr1c3'),
        'R4': document.getElementById('rightr2c1'), 'R5': document.getElementById('rightr2c2'), 'R6': document.getElementById('rightr2c3'),
        'R7': document.getElementById('rightr3c1'), 'R8': document.getElementById('rightr3c2'), 'R9': document.getElementById('rightr3c3'),
        'U1': document.getElementById('topr1c1'), 'U2': document.getElementById('topr1c2'), 'U3': document.getElementById('topr1c3'),
        'U4': document.getElementById('topr2c1'), 'U5': document.getElementById('topr2c2'), 'U6': document.getElementById('topr2c3'),
        'U7': document.getElementById('topr3c1'), 'U8': document.getElementById('topr3c2'), 'U9': document.getElementById('topr3c3'),
        'D1': document.getElementById('downr1c1'), 'D2': document.getElementById('downr1c2'), 'D3': document.getElementById('downr1c3'),
        'D4': document.getElementById('downr2c1'), 'D5': document.getElementById('downr2c2'), 'D6': document.getElementById('downr2c3'),
        'D7': document.getElementById('downr3c1'), 'D8': document.getElementById('downr3c2'), 'D9': document.getElementById('downr3c3'),
        'L1': document.getElementById('leftr1c1'), 'L2': document.getElementById('leftr1c2'), 'L3': document.getElementById('leftr1c3'),
        'L4': document.getElementById('leftr2c1'), 'L5': document.getElementById('leftr2c2'), 'L6': document.getElementById('leftr2c3'),
        'L7': document.getElementById('leftr3c1'), 'L8': document.getElementById('leftr3c2'), 'L9': document.getElementById('leftr3c3'),
        'B1': document.getElementById('backr1c1'), 'B2': document.getElementById('backr1c2'), 'B3': document.getElementById('backr1c3'),
        'B4': document.getElementById('backr2c1'), 'B5': document.getElementById('backr2c2'), 'B6': document.getElementById('backr2c3'),
        'B7': document.getElementById('backr3c1'), 'B8': document.getElementById('backr3c2'), 'B9': document.getElementById('backr3c3')
    };

    function rotate_R() {
        const temp1 = cubies['R1'].style.backgroundColor;
        const temp2 = cubies['R2'].style.backgroundColor;
        const temp3 = cubies['R3'].style.backgroundColor;
        const temp4 = cubies['R4'].style.backgroundColor;
        const temp5 = cubies['R5'].style.backgroundColor;
        const temp6 = cubies['R6'].style.backgroundColor;
        const temp7 = cubies['R7'].style.backgroundColor;
        const temp8 = cubies['R8'].style.backgroundColor;
        const temp9 = cubies['R9'].style.backgroundColor;
        cubies['R1'].style.backgroundColor = temp7;
        cubies['R2'].style.backgroundColor = temp4;
        cubies['R3'].style.backgroundColor = temp1;
        cubies['R4'].style.backgroundColor = temp8;
        cubies['R5'].style.backgroundColor = temp5;
        cubies['R6'].style.backgroundColor = temp2;
        cubies['R7'].style.backgroundColor = temp9;
        cubies['R8'].style.backgroundColor = temp6;
        cubies['R9'].style.backgroundColor = temp3;
        const temp10 = cubies['U3'].style.backgroundColor;
        const temp11 = cubies['U6'].style.backgroundColor;
        const temp12 = cubies['U9'].style.backgroundColor;
        cubies['U3'].style.backgroundColor = cubies['F3'].style.backgroundColor;
        cubies['U6'].style.backgroundColor = cubies['F6'].style.backgroundColor;
        cubies['U9'].style.backgroundColor = cubies['F9'].style.backgroundColor;
        cubies['F3'].style.backgroundColor = cubies['D3'].style.backgroundColor;
        cubies['F6'].style.backgroundColor = cubies['D6'].style.backgroundColor;
        cubies['F9'].style.backgroundColor = cubies['D9'].style.backgroundColor;
        cubies['D3'].style.backgroundColor = cubies['B7'].style.backgroundColor;
        cubies['D6'].style.backgroundColor = cubies['B4'].style.backgroundColor;
        cubies['D9'].style.backgroundColor = cubies['B1'].style.backgroundColor;
        cubies['B1'].style.backgroundColor = temp12;
        cubies['B4'].style.backgroundColor = temp11;
        cubies['B7'].style.backgroundColor = temp10;
    }

    function rotate_R2() {
        rotate_R();
        rotate_R();
    }

    function rotate_Rprime() {
        rotate_R();
        rotate_R();
        rotate_R();
    }

    function rotate_L() {
        const temp1 = cubies['L1'].style.backgroundColor;
        const temp2 = cubies['L2'].style.backgroundColor;
        const temp3 = cubies['L3'].style.backgroundColor;
        const temp4 = cubies['L4'].style.backgroundColor;
        const temp5 = cubies['L5'].style.backgroundColor;
        const temp6 = cubies['L6'].style.backgroundColor;
        const temp7 = cubies['L7'].style.backgroundColor;
        const temp8 = cubies['L8'].style.backgroundColor;
        const temp9 = cubies['L9'].style.backgroundColor;
        cubies['L1'].style.backgroundColor = temp7;
        cubies['L2'].style.backgroundColor = temp4;
        cubies['L3'].style.backgroundColor = temp1;
        cubies['L4'].style.backgroundColor = temp8;
        cubies['L5'].style.backgroundColor = temp5;
        cubies['L6'].style.backgroundColor = temp2;
        cubies['L7'].style.backgroundColor = temp9;
        cubies['L8'].style.backgroundColor = temp6;
        cubies['L9'].style.backgroundColor = temp3;
        const temp10 = cubies['U1'].style.backgroundColor;
        const temp11 = cubies['U4'].style.backgroundColor;
        const temp12 = cubies['U7'].style.backgroundColor;
        cubies['U1'].style.backgroundColor = cubies['B9'].style.backgroundColor;
        cubies['U4'].style.backgroundColor = cubies['B6'].style.backgroundColor;
        cubies['U7'].style.backgroundColor = cubies['B3'].style.backgroundColor;
        cubies['B9'].style.backgroundColor = cubies['D1'].style.backgroundColor;
        cubies['B6'].style.backgroundColor = cubies['D4'].style.backgroundColor;
        cubies['B3'].style.backgroundColor = cubies['D7'].style.backgroundColor;
        cubies['D1'].style.backgroundColor = cubies['F1'].style.backgroundColor;
        cubies['D4'].style.backgroundColor = cubies['F4'].style.backgroundColor;
        cubies['D7'].style.backgroundColor = cubies['F7'].style.backgroundColor;
        cubies['F1'].style.backgroundColor = temp10;
        cubies['F4'].style.backgroundColor = temp11;
        cubies['F7'].style.backgroundColor = temp12;
    }

    function rotate_L2() {
        rotate_L();
        rotate_L();
    }

    function rotate_Lprime() {
        rotate_L();
        rotate_L();
        rotate_L();
    }

    function rotate_U() {
        const temp1 = cubies['U1'].style.backgroundColor;
        const temp2 = cubies['U2'].style.backgroundColor;
        const temp3 = cubies['U3'].style.backgroundColor;
        const temp4 = cubies['U4'].style.backgroundColor;
        const temp5 = cubies['U5'].style.backgroundColor;
        const temp6 = cubies['U6'].style.backgroundColor;
        const temp7 = cubies['U7'].style.backgroundColor;
        const temp8 = cubies['U8'].style.backgroundColor;
        const temp9 = cubies['U9'].style.backgroundColor;
        cubies['U1'].style.backgroundColor = temp7;
        cubies['U2'].style.backgroundColor = temp4;
        cubies['U3'].style.backgroundColor = temp1;
        cubies['U4'].style.backgroundColor = temp8;
        cubies['U5'].style.backgroundColor = temp5;
        cubies['U6'].style.backgroundColor = temp2;
        cubies['U7'].style.backgroundColor = temp9;
        cubies['U8'].style.backgroundColor = temp6;
        cubies['U9'].style.backgroundColor = temp3;
        const temp10 = cubies['F1'].style.backgroundColor;
        const temp11 = cubies['F2'].style.backgroundColor;
        const temp12 = cubies['F3'].style.backgroundColor;
        cubies['F1'].style.backgroundColor = cubies['R1'].style.backgroundColor;
        cubies['F2'].style.backgroundColor = cubies['R2'].style.backgroundColor;
        cubies['F3'].style.backgroundColor = cubies['R3'].style.backgroundColor;
        cubies['R1'].style.backgroundColor = cubies['B1'].style.backgroundColor;
        cubies['R2'].style.backgroundColor = cubies['B2'].style.backgroundColor;
        cubies['R3'].style.backgroundColor = cubies['B3'].style.backgroundColor;
        cubies['B1'].style.backgroundColor = cubies['L1'].style.backgroundColor;
        cubies['B2'].style.backgroundColor = cubies['L2'].style.backgroundColor;
        cubies['B3'].style.backgroundColor = cubies['L3'].style.backgroundColor;
        cubies['L1'].style.backgroundColor = temp10;
        cubies['L2'].style.backgroundColor = temp11;
        cubies['L3'].style.backgroundColor = temp12;
    }

    function rotate_U2() {
        rotate_U();
        rotate_U();
    }

    function rotate_Uprime() {
        rotate_U();
        rotate_U();
        rotate_U();
    }

    function rotate_D() {
        const temp1 = cubies['D1'].style.backgroundColor;
        const temp2 = cubies['D2'].style.backgroundColor;
        const temp3 = cubies['D3'].style.backgroundColor;
        const temp4 = cubies['D4'].style.backgroundColor;
        const temp5 = cubies['D5'].style.backgroundColor;
        const temp6 = cubies['D6'].style.backgroundColor;
        const temp7 = cubies['D7'].style.backgroundColor;
        const temp8 = cubies['D8'].style.backgroundColor;
        const temp9 = cubies['D9'].style.backgroundColor;
        cubies['D1'].style.backgroundColor = temp7;
        cubies['D2'].style.backgroundColor = temp4;
        cubies['D3'].style.backgroundColor = temp1;
        cubies['D4'].style.backgroundColor = temp8;
        cubies['D5'].style.backgroundColor = temp5;
        cubies['D6'].style.backgroundColor = temp2;
        cubies['D7'].style.backgroundColor = temp9;
        cubies['D8'].style.backgroundColor = temp6;
        cubies['D9'].style.backgroundColor = temp3;
        const temp10 = cubies['F7'].style.backgroundColor;
        const temp11 = cubies['F8'].style.backgroundColor;
        const temp12 = cubies['F9'].style.backgroundColor;
        cubies['F7'].style.backgroundColor = cubies['L7'].style.backgroundColor;
        cubies['F8'].style.backgroundColor = cubies['L8'].style.backgroundColor;
        cubies['F9'].style.backgroundColor = cubies['L9'].style.backgroundColor;
        cubies['L7'].style.backgroundColor = cubies['B7'].style.backgroundColor;
        cubies['L8'].style.backgroundColor = cubies['B8'].style.backgroundColor;
        cubies['L9'].style.backgroundColor = cubies['B9'].style.backgroundColor;
        cubies['B7'].style.backgroundColor = cubies['R7'].style.backgroundColor;
        cubies['B8'].style.backgroundColor = cubies['R8'].style.backgroundColor;
        cubies['B9'].style.backgroundColor = cubies['R9'].style.backgroundColor;
        cubies['R7'].style.backgroundColor = temp10;
        cubies['R8'].style.backgroundColor = temp11;
        cubies['R9'].style.backgroundColor = temp12;
    }

    function rotate_D2() {
        rotate_D();
        rotate_D();
    }

    function rotate_Dprime() {
        rotate_D();
        rotate_D();
        rotate_D();
    }

    function rotate_F() {
        const temp1 = cubies['F1'].style.backgroundColor;
        const temp2 = cubies['F2'].style.backgroundColor;
        const temp3 = cubies['F3'].style.backgroundColor;
        const temp4 = cubies['F4'].style.backgroundColor;
        const temp5 = cubies['F5'].style.backgroundColor;
        const temp6 = cubies['F6'].style.backgroundColor;
        const temp7 = cubies['F7'].style.backgroundColor;
        const temp8 = cubies['F8'].style.backgroundColor;
        const temp9 = cubies['F9'].style.backgroundColor;
        cubies['F1'].style.backgroundColor = temp7;
        cubies['F2'].style.backgroundColor = temp4;
        cubies['F3'].style.backgroundColor = temp1;
        cubies['F4'].style.backgroundColor = temp8;
        cubies['F5'].style.backgroundColor = temp5;
        cubies['F6'].style.backgroundColor = temp2;
        cubies['F7'].style.backgroundColor = temp9;
        cubies['F8'].style.backgroundColor = temp6;
        cubies['F9'].style.backgroundColor = temp3;
        const temp10 = cubies['U7'].style.backgroundColor;
        const temp11 = cubies['U8'].style.backgroundColor;
        const temp12 = cubies['U9'].style.backgroundColor;
        cubies['U7'].style.backgroundColor = cubies['L9'].style.backgroundColor;
        cubies['U8'].style.backgroundColor = cubies['L6'].style.backgroundColor;
        cubies['U9'].style.backgroundColor = cubies['L3'].style.backgroundColor;
        cubies['L9'].style.backgroundColor = cubies['D3'].style.backgroundColor;
        cubies['L6'].style.backgroundColor = cubies['D2'].style.backgroundColor;
        cubies['L3'].style.backgroundColor = cubies['D1'].style.backgroundColor;
        cubies['D1'].style.backgroundColor = cubies['R7'].style.backgroundColor;
        cubies['D2'].style.backgroundColor = cubies['R4'].style.backgroundColor;
        cubies['D3'].style.backgroundColor = cubies['R1'].style.backgroundColor;
        cubies['R1'].style.backgroundColor = temp10;
        cubies['R4'].style.backgroundColor = temp11;
        cubies['R7'].style.backgroundColor = temp12;
    }

    function rotate_F2() {
        rotate_F();
        rotate_F();
    }

    function rotate_Fprime() {
        rotate_F();
        rotate_F();
        rotate_F();
    }

    function rotate_B() {
        const temp1 = cubies['B1'].style.backgroundColor;
        const temp2 = cubies['B2'].style.backgroundColor;
        const temp3 = cubies['B3'].style.backgroundColor;
        const temp4 = cubies['B4'].style.backgroundColor;
        const temp5 = cubies['B5'].style.backgroundColor;
        const temp6 = cubies['B6'].style.backgroundColor;
        const temp7 = cubies['B7'].style.backgroundColor;
        const temp8 = cubies['B8'].style.backgroundColor;
        const temp9 = cubies['B9'].style.backgroundColor;
        cubies['B1'].style.backgroundColor = temp7;
        cubies['B2'].style.backgroundColor = temp4;
        cubies['B3'].style.backgroundColor = temp1;
        cubies['B4'].style.backgroundColor = temp8;
        cubies['B5'].style.backgroundColor = temp5;
        cubies['B6'].style.backgroundColor = temp2;
        cubies['B7'].style.backgroundColor = temp9;
        cubies['B8'].style.backgroundColor = temp6;
        cubies['B9'].style.backgroundColor = temp3;
        const temp10 = cubies['U1'].style.backgroundColor;  
        const temp11 = cubies['U2'].style.backgroundColor;
        const temp12 = cubies['U3'].style.backgroundColor;
        cubies['U1'].style.backgroundColor = cubies['R3'].style.backgroundColor;
        cubies['U2'].style.backgroundColor = cubies['R6'].style.backgroundColor;
        cubies['U3'].style.backgroundColor = cubies['R9'].style.backgroundColor;
        cubies['R9'].style.backgroundColor = cubies['D7'].style.backgroundColor;
        cubies['R6'].style.backgroundColor = cubies['D8'].style.backgroundColor;
        cubies['R3'].style.backgroundColor = cubies['D9'].style.backgroundColor;
        cubies['D9'].style.backgroundColor = cubies['L7'].style.backgroundColor;
        cubies['D8'].style.backgroundColor = cubies['L4'].style.backgroundColor;
        cubies['D7'].style.backgroundColor = cubies['L1'].style.backgroundColor;
        cubies['L7'].style.backgroundColor = temp10;
        cubies['L4'].style.backgroundColor = temp11;
        cubies['L1'].style.backgroundColor = temp12;
    }

    function rotate_B2() {
        rotate_B();
        rotate_B();
    }

    function rotate_Bprime() {
        rotate_B();
        rotate_B();
        rotate_B();
    }


    const stringcube = getParameterByName('input');
    console.log(stringcube);

    const op = localStorage.getItem('moveList');
    const movelist = splitStringToArray(op);
    console.log(typeof movelist);
    console.log(movelist);
        
    for (let i = 0; i < elementIds.length; i++) {
      const element = document.getElementById(elementIds[i]);
      element.style.backgroundColor = colors[stringcube[i]];
    }

    var startIndex = 0;
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    function showRotates() {
        const img = document.getElementById("rotate");
        img.src = images[movelist[startIndex]];
        const roText = document.getElementById("instruction");
        roText.textContent = rotateTexts[movelist[startIndex]];
    };

    showRotates();
    if(movelist[startIndex] == 'B'){
        rotate_B();
    }
    else if(movelist[startIndex] == 'B2'){
        rotate_B2();
    }
    else if(movelist[startIndex] == "B'"){
        rotate_Bprime();
    }
    else if(movelist[startIndex] == 'F'){
        rotate_F();
    }
    else if(movelist[startIndex] == 'F2'){
        rotate_F2();
    }
    else if(movelist[startIndex] == "F'"){
        rotate_Fprime();
    }
    else if(movelist[startIndex] == 'L'){
        rotate_L();
    }
    else if(movelist[startIndex] == 'L2'){
        rotate_L2();
    }
    else if(movelist[startIndex] == "L'"){
        rotate_Lprime();
    }
    else if(movelist[startIndex] == 'R'){
        rotate_R();
    }
    else if(movelist[startIndex] == 'R2'){
        rotate_R2();
    }
    else if(movelist[startIndex] == "R'"){
        rotate_Rprime();
    }
    else if(movelist[startIndex] == 'U'){
        rotate_U();
    }
    else if(movelist[startIndex] == 'U2'){
        rotate_U2();
    }
    else if(movelist[startIndex] == "U'"){
        rotate_Uprime();
    }
    else if(movelist[startIndex] == 'D'){
        rotate_D();
    }
    else if(movelist[startIndex] == 'D2'){
        rotate_D2();
    }
    else if(movelist[startIndex] == "D'"){
        rotate_Dprime();
    }

    nextButton.addEventListener('click', function() {
        console.log('Next button clicked!');
        startIndex++;
        showRotates();
        if(movelist[startIndex] == 'B'){
            rotate_B();
        }
        else if(movelist[startIndex] == 'B2'){
            rotate_B2();
        }
        else if(movelist[startIndex] == "B'"){
            rotate_Bprime();
        }
        else if(movelist[startIndex] == 'F'){
            rotate_F();
        }
        else if(movelist[startIndex] == 'F2'){
            rotate_F2();
        }
        else if(movelist[startIndex] == "F'"){
            rotate_Fprime();
        }
        else if(movelist[startIndex] == 'L'){
            rotate_L();
        }
        else if(movelist[startIndex] == 'L2'){
            rotate_L2();
        }
        else if(movelist[startIndex] == "L'"){
            rotate_Lprime();
        }
        else if(movelist[startIndex] == 'R'){
            rotate_R();
        }
        else if(movelist[startIndex] == 'R2'){
            rotate_R2();
        }
        else if(movelist[startIndex] == "R'"){
            rotate_Rprime();
        }
        else if(movelist[startIndex] == 'U'){
            rotate_U();
        }
        else if(movelist[startIndex] == 'U2'){
            rotate_U2();
        }
        else if(movelist[startIndex] == "U'"){
            rotate_Uprime();
        }
        else if(movelist[startIndex] == 'D'){
            rotate_D();
        }
        else if(movelist[startIndex] == 'D2'){
            rotate_D2();
        }
        else if(movelist[startIndex] == "D'"){
            rotate_Dprime();
        }
        

        // console.log(startIndex)
        if(startIndex == movelist.length) {
            console.log("Redirecting");
            window.location.href = 'solved.html';
        }
    }
    );
    prevButton.addEventListener('click', function() {
        console.log('Prev button clicked!');
        showRotates();
        if(movelist[startIndex] == "B'"){
            rotate_B();
        }
        else if(movelist[startIndex] == 'B2'){
            rotate_B2();
        }
        else if(movelist[startIndex] == "B"){
            rotate_Bprime();
        }
        else if(movelist[startIndex] == "F'"){
            rotate_F();
        }
        else if(movelist[startIndex] == 'F2'){
            rotate_F2();
        }
        else if(movelist[startIndex] == "F"){
            rotate_Fprime();
        }
        else if(movelist[startIndex] == "L'"){
            rotate_L();
        }
        else if(movelist[startIndex] == 'L2'){
            rotate_L2();
        }
        else if(movelist[startIndex] == "L"){
            rotate_Lprime();
        }
        else if(movelist[startIndex] == "R'"){
            rotate_R();
        }
        else if(movelist[startIndex] == 'R2'){
            rotate_R2();
        }
        else if(movelist[startIndex] == "R"){
            rotate_Rprime();
        }
        else if(movelist[startIndex] == "U'"){
            rotate_U();
        }
        else if(movelist[startIndex] == 'U2'){
            rotate_U2();
        }
        else if(movelist[startIndex] == "U"){
            rotate_Uprime();
        }
        else if(movelist[startIndex] == "D'"){
            rotate_D();
        }
        else if(movelist[startIndex] == 'D2'){
            rotate_D2();
        }
        else if(movelist[startIndex] == "D"){
            rotate_Dprime();
        }

        if(startIndex == 0){
            return;
        }
        else{
            startIndex--;
        }
        // console.log(startIndex)
        if(startIndex == movelist.length) {
            console.log("Redirecting");
            window.location.href = 'solved.html';
        }
    }
    );

});