// board / canvas setup
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// bird properties
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth / 8;  // bird starting x position (1/8 of board width)
let birdY = boardHeight / 2; // bird starting y position (middle of board)
let birdImage;               // bird image

// bird object
let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

// pipes properties
let pipeArray = [];          // array to hold all pipes
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;      // pipes start from the right side
let pipeY = 0;

let topPipeImg;              // top pipe image
let bottomPipeImg;           // bottom pipe image

// physics variables
let velocityX = -2;          // horizontal speed of pipes
let velocityY = 0;           // vertical speed of bird
let gravity = 0.4;           // gravity acceleration

let gameOver = false;        // game over status
let score = 0;               // player score

// window onload setup
window.onload = function () {
    // canvas setup
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    // clear initial bird position
    context.clearRect(bird.x, bird.y, bird.width, bird.height);

    // load bird image
    birdImage = new Image();
    birdImage.src = "./images/flappybird.png"

    birdImage.onload = function () {
        // draw bird once loaded
        context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)
    }

    // load pipe images
    topPipeImg = new Image();
    topPipeImg.src = "./images/toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./images/bottompipe.png"

    // start game loop
    requestAnimationFrame(update);
    // create new pipes every 1.5 seconds
    setInterval(placePipes, 1500);
    // listen for key press
    document.addEventListener("keydown", moveBird)
}

// main game loop
function update() {
    requestAnimationFrame(update); // call update each frame
    if (gameOver) return;          // stop updating if game over

    // clear entire canvas
    context.clearRect(0, 0, board.width, board.height)

    // bird physics
    velocityY += gravity;                // gravity effect
    bird.y = Math.max(bird.y + velocityY, 0); // move bird down, limit top boundary
    context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)

    // check if bird fell off screen
    if (bird.y > board.height) {
        gameOver = true
    }

    // move pipes & check collisions
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX; // move pipe left
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height)

        // update score if bird passed pipe
        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5; // two pipes counted separately
            pipe.passed = true;
        }

        // detect collision with pipe
        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    // remove pipes that went off-screen
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); // remove first element
    }

    // draw score
    context.fillStyle = "white";
    context.font = "45px sans-serif";
    context.fillText(score, 5, 45);

    // draw game over message
    if (gameOver) {
        context.fillText("GAME OVER", 5, 90)
    }
}

// create new pipes
function placePipes() {
    if (gameOver) return; // stop creating pipes if game over

    // randomize top pipe y position
    let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);

    let openingSpace = board.height / 4; // gap between top and bottom pipes

    // top pipe object
    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false // whether bird has passed this pipe
    }
    pipeArray.push(topPipe);

    // bottom pipe object
    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }
    pipeArray.push(bottomPipe);
}

// move bird on key press
function moveBird(key) {
    if (key.code == "Space" || key.code == "ArrowUp") {
        velocityY = -6 // jump

        // reset game if over
        if (gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

// detect collision between two rectangles
function detectCollision(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}