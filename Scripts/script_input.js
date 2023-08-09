const server = 'localhost:8000'

var face_front = [['R', 'R', 'R'], ['R', 'R', 'R'], ['R', 'R', 'R']];
var face_back = [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']];
var face_left =  [['G', 'G', 'G'], ['G', 'G', 'G'], ['G', 'G', 'G']];
var face_right = [['B', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']];
var face_top = [['W', 'W', 'W'], ['W', 'W', 'W'], ['W', 'W', 'W']];
var face_bottom = [['Y', 'Y', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'Y', 'Y']]; 

const colors = {
    'Y': 'yellow',
    'B': 'blue',
    'O': 'orange',
    'R': 'red',
    'W': 'white',
    'G': 'green'
};

colors_face = {
    'Y' : 'D', 
    'B' : 'R', 
    'R' : 'F', 
    'O' : 'B', 
    'W' : 'U', 
    'G' : 'L' 
}

//Makes the API call
async function makeAPIRequest(literal) {
    const url = `http://localhost:8000/get-face/?literal=${literal}`;
    const options = {
        method: 'POST',
        headers: {
        'accept': 'application/json',
        },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
}

//Concatenates the elements of a list into a string
function concatenateListElements(list) {
    let concatenatedString = "";
  
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        concatenatedString += list[i][j];
      }
    }
  
    return concatenatedString;
  }  


  function convertColorsToCode(inputString) {
    const result = [];
    for (const char of inputString) {
        const code = colors_face[char];
        if (code) {
            result.push(code);
        } else {
            // Handle invalid character if needed
            result.push('?');
        }
    }
    return result.join('');
}

document.addEventListener('DOMContentLoaded', function () {
    var text = document.getElementById('face_piece');
    var buttons = document.getElementsByClassName('buttons')[0].getElementsByTagName('button');
    var i = 1;
    var currentFace = face_front;

    function handleButtonClick(event) {
        var color = event.target.textContent.toLowerCase();
        var colorCode = getColorCode(color);
        currentFace[Math.floor((i-1)/3)][(i-1)%3] = colorCode;
        front_colors(currentFace);

        if (i < 9) {
            i++;
            text.innerHTML = 'What is the color of piece ' + i + ' of the ' + getFaceName(currentFace) + ' face?';
        } else {
            // All pieces of the current face have been processed
            if (currentFace === face_front) {
                currentFace = face_back;
                text.innerHTML = 'What is the color of piece 1 of the ' + getFaceName(currentFace) + ' face?';
            } else if (currentFace === face_back) {
                currentFace = face_left;
                text.innerHTML = 'What is the color of piece 1 of the ' + getFaceName(currentFace) + ' face?';
            } else if (currentFace === face_left) {
                currentFace = face_right;
                text.innerHTML = 'What is the color of piece 1 of the ' + getFaceName(currentFace) + ' face?';
            } else if (currentFace === face_right) {
                currentFace = face_top;
                text.innerHTML = 'What is the color of piece 1 of the ' + getFaceName(currentFace) + ' face?';
            } else if (currentFace === face_top) {
                currentFace = face_bottom;
                text.innerHTML = 'What is the color of piece 1 of the ' + getFaceName(currentFace) + ' face?';
            } else {
                // All faces have been processed, you can continue with your logic
                console.log(face_front);
                console.log(face_back);
                console.log(face_left);
                console.log(face_right);
                console.log(face_top);
                console.log(face_bottom);

                var face_front_string = concatenateListElements(face_front);
                var face_back_string = concatenateListElements(face_back);
                var face_left_string = concatenateListElements(face_left);
                var face_right_string = concatenateListElements(face_right);
                var face_top_string = concatenateListElements(face_top);
                var face_bottom_string = concatenateListElements(face_bottom);

                console.log(face_front_string);
                console.log(face_back_string);
                console.log(face_left_string);
                console.log(face_right_string);
                console.log(face_top_string);
                console.log(face_bottom_string);

                //Order = Up, Right, Front, Down, Left, Back
                var stringfinal = face_top_string + face_right_string + face_front_string + face_bottom_string + face_left_string + face_back_string;
                console.log(stringfinal);
                var stringfinalcode = convertColorsToCode(stringfinal);
                console.log(stringfinalcode);
                makeAPIRequest(stringfinalcode)
                .then(op => {
                  localStorage.setItem('moveList', op);
                  window.location.href = `index.html?input=${encodeURIComponent(stringfinalcode)}`;
                })
                .catch(error => {
                  console.error('Error while making API request:', error);
                  window.location.href = 'error.html';
                });
            }

            i = 1;
        }
    }

    function getColorCode(color) {
        switch (color) {
            case 'red':
                return 'R';
            case 'blue':
                return 'B';
            case 'green':
                return 'G';
            case 'orange':
                return 'O';
            case 'white':
                return 'W';
            case 'yellow':
                return 'Y';
            default:
                return '';
        }
    }

    function getFaceName(face) {
        if (face === face_front) {
            return 'front';
        } else if (face === face_back) {
            return 'back';
        } else if (face === face_left) {
            return 'left';
        } else if (face === face_right) {
            return 'right';
        } else if (face === face_top) {
            return 'top';
        } else if (face === face_bottom) {
            return 'bottom';
        } else {
            return '';
        }
    }

    for (var j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', handleButtonClick);
    }

    front_colors(face_front); // Call front_colors() initially for the front face
});

function front_colors(face) {
    var r1c1 = document.getElementById('r1c1');
    r1c1.style.backgroundColor = colors[face[0][0]];
    var r1c2 = document.getElementById('r1c2');
    r1c2.style.backgroundColor = colors[face[0][1]];
    var r1c3 = document.getElementById('r1c3');
    r1c3.style.backgroundColor = colors[face[0][2]];
    var r2c1 = document.getElementById('r2c1');
    r2c1.style.backgroundColor = colors[face[1][0]];
    var r2c2 = document.getElementById('r2c2');
    r2c2.style.backgroundColor = colors[face[1][1]];
    var r2c3 = document.getElementById('r2c3');
    r2c3.style.backgroundColor = colors[face[1][2]];
    var r3c1 = document.getElementById('r3c1');
    r3c1.style.backgroundColor = colors[face[2][0]];
    var r3c2 = document.getElementById('r3c2');
    r3c2.style.backgroundColor = colors[face[2][1]];
    var r3c3 = document.getElementById('r3c3');
    r3c3.style.backgroundColor = colors[face[2][2]];
};

