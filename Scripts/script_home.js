const colors = {
    0: "red",
    1: "yellow",
    2: "white",
    3: "green",
    4: "blue",
    5: "orange"
};


document.addEventListener("DOMContentLoaded", function(){
    var cubie1 = document.getElementById("r1c1");
    var cubie2 = document.getElementById("r1c2");
    var cubie3 = document.getElementById("r1c3");
    var cubie4 = document.getElementById("r2c1");
    var cubie5 = document.getElementById("r2c2");
    var cubie6 = document.getElementById("r2c3");
    var cubie7 = document.getElementById("r3c1");
    var cubie8 = document.getElementById("r3c2");
    var cubie9 = document.getElementById("r3c3");

    // Function to randomize the colors of the cubies
    function randomizeCubieColors() {
        const cubies = [
        cubie1, cubie2, cubie3,
        cubie4, cubie5, cubie6,
        cubie7, cubie8, cubie9
        ];
    
        cubies.forEach((cubie) => {
        cubie.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
        });
    }
    
    let counter = 0;
    const totalCalls = 5;
    const intervalTime = 500; // 1 second
    
    // Initially call randomizeCubieColors() so the website doesn't load with blue.
    randomizeCubieColors();
    
    const intervalId = setInterval(() => {
        randomizeCubieColors();
        counter++;
    
        if (counter === totalCalls) {
        clearInterval(intervalId);
        
        // Call solveCube() after 0.5 seconds delay
        setTimeout(() => {
            solveCube();
        }, 500);
        }
    }, intervalTime);
    
    // Function to slowly solve the cube
    function solveCube() {
        function setColorWithDelay(cubie, color, delay) {
            setTimeout(() => {
            cubie.style.backgroundColor = color;
            }, delay);
        }
        
        // First block of code
        setColorWithDelay(cubie1, "yellow", 0);
        setColorWithDelay(cubie2, "yellow", 0);
        setColorWithDelay(cubie3, "white", 0);
        setColorWithDelay(cubie4, "red", 0);
        setColorWithDelay(cubie5, "green", 0);
        setColorWithDelay(cubie6, "white", 0);
        setColorWithDelay(cubie7, "red", 0);
        setColorWithDelay(cubie8, "green", 0);
        setColorWithDelay(cubie9, "white", 0);
        
        // Second block of code with 0.5 seconds delay
        setTimeout(() => {
            setColorWithDelay(cubie1, "yellow", 0);
            setColorWithDelay(cubie2, "yellow", 0);
            setColorWithDelay(cubie3, "yellow", 0);
            setColorWithDelay(cubie4, "red", 0);
            setColorWithDelay(cubie5, "red", 0);
            setColorWithDelay(cubie6, "green", 0);
            setColorWithDelay(cubie7, "green", 0);
            setColorWithDelay(cubie8, "green", 0);
            setColorWithDelay(cubie9, "yellow", 0);
        }, 500); // 0.5 seconds (500 milliseconds) delay
        
        // Third block of code with 1 second delay
        setTimeout(() => {
            setColorWithDelay(cubie1, "yellow", 0);
            setColorWithDelay(cubie2, "yellow", 0);
            setColorWithDelay(cubie3, "yellow", 0);
            setColorWithDelay(cubie4, "yellow", 0);
            setColorWithDelay(cubie5, "yellow", 0);
            setColorWithDelay(cubie6, "yellow", 0);
            setColorWithDelay(cubie7, "yellow", 0);
            setColorWithDelay(cubie8, "yellow", 0);
            setColorWithDelay(cubie9, "yellow", 0);
        }, 1000); // 1 second (1000 milliseconds) delay

        //Call the translate function after a delay
        setTimeout(() => {
            translateAndDisappear();
          }, 2000);
    }

    // Function to translate cubie4 and cubie6 and make them disappear
    function translateAndDisappear() {
        // Add the class for left translation and disappearance to cubie4
        cubie4.classList.add('translate-left');
        // Add the class for right translation and disappearance to cubie6
        cubie6.classList.add('translate-right');
        // Make cubie5 disappear
        cubie5.style.backgroundColor = "#1e1e1e";
        
        // Function to display text inside the container
        function displayTextInsideContainer() {
            const textContent = "Solve My Rubik's Cube!";
            
            // Create a text element (span)
            const textElement = document.createElement('span');
            textElement.textContent = textContent;
            textElement.style.border = "2px solid #1e1e1e";
            textElement.style.backgroundColor = "#fff";
            textElement.style.borderRadius = "5px";
            textElement.style.cursor = "pointer";
            
            // Append the text element to the container
            cubie5.appendChild(textElement);
        }
        displayTextInsideContainer();

        function redirectToSolve() {
            window.location.href = "intermediate.html";
        }
        
        cubie5.addEventListener('click', redirectToSolve);
    }
    
})