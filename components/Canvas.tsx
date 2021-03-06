import { count } from 'console';
import React, { useRef, useEffect } from 'react'


class Game {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    color: any;
    Player1: Player;
    Player2: Player;
    ball: Ball;
    Right_UpPressed: boolean;
    Right_DownPressed: boolean;
    Left_UpPressed: boolean;
    Left_DownPressed: boolean;
    Pause: boolean;
    // Bar: Player;
    MySpeech : string;
    P1: string = "";
    P2: string = "";

    constructor(canvas: HTMLCanvasElement) {

        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        //color: #0e101c;
        this.color = "#0e101c";
        this.Pause = false;
        this.MySpeech = "";

        this.canvas.style.backgroundColor = this.color;

        this.Right_UpPressed = false;
        this.Right_DownPressed = false;
        this.Left_UpPressed = false;
        this.Left_DownPressed = false;
        // this.Bar = new Player(this.width / 2 - 5, this.height / 2 - 80, 10, 80, "white", this.ctx, this.canvas, 0, "paddle.png");
        this.Player1 = new Player(10, (this.canvas.height - 80) / 2, 10, 80, "white", this.ctx, this.canvas, 0, "paddle.png");
        this.Player2 = new Player(this.canvas.width - 20, (this.canvas.height - 80) / 2, 10, 80, "white", this.ctx, this.canvas, 0, "paddle.png");
        this.ball = new Ball(this.canvas.width / 2, this.canvas.height / 2, 8, "red", this.ctx, this.canvas, this.Player1, this.Player2);
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        this.write_text("Welcome To ping pong you will know me better in this game");
        // this.write_text("nYou can play with [w] and [s]");
         this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("You can play with [w] and [s]", this.width / 2 - this.ctx.measureText("You can play with [w] and [s]").width / 2, this.height / 2 + 40);
        let counts = 0;
        setInterval(() => {

            if (counts === 5) {
                this.MySpeech=("My Name is Hamza Elkhatri");
            }
            else if(counts === 10){
                this.MySpeech=("I am a student of Computer Science");
            }
            else if(counts === 15){
                this.MySpeech=("and I am a web && mobile developer");
            }
            else if(counts === 20)
            {
                this.MySpeech=("From Morocco, i love to develop web and mobile applications\n");
            }
            counts++;
        }, 1000);

        setTimeout(() => {
            this.start();
        }, 4000);
    }

    ToJson() {
        return {
            "Player1": this.Player1.ToJson(),
            "Player2": this.Player2.ToJson(),
            "Ball": this.ball.ToJson(),
            // "Bar": this.Bar.ToJson(),
            "Pause": this.Pause,
        }
    }

    write_text(text: string) {
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(text, this.width / 2 - this.ctx.measureText(text).width / 2, this.height / 2);
    }


    show_score() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.Player1.Score.toString(), this.canvas.width / 2 - 50, 20);
        this.ctx.fillText(this.Player2.Score.toString(), this.canvas.width / 2 + 50, 20);
    }


    keyDownHandler(e: KeyboardEvent) {
        if ((e.key === "Up" || e.key === "ArrowUp")) {
            this.Right_UpPressed = true;
        }
        else if (e.key === "Down" || e.key === "ArrowDown") {
            this.Right_DownPressed = true;
        }

        if (e.key === "w" || e.key === "KeyW") {
            this.Left_UpPressed = true;
        }
        else if (e.key === "s" || e.key === "KeyS") {
            this.Left_DownPressed = true;
        }
        if ((e.key === "p" || e.key === "KeyP" || e.key === "P" || e.key === " " || e.key === "Space") && this.P1 === window.sessionStorage.getItem("email")) {
            this.Pause = !this.Pause;
        }
    }

    keyUpHandler(e: KeyboardEvent) {
        if (e.key === "Up" || e.key === "ArrowUp") {
            this.Right_UpPressed = false;
        }
        else if (e.key === "Down" || e.key === "ArrowDown") {
            this.Right_DownPressed = false;
        }
        if (e.key === "w" || e.key === "KeyW") {
            this.Left_UpPressed = false;
        }
        else if (e.key === "s" || e.key === "KeyS") {
            this.Left_DownPressed = false;
        }

    }

    ControleGame() {
        // console.log(window.sessionStorage.getItem("email"));
        // alert(this.P1 +" "+ this.P2);
        if (this.Left_DownPressed) {
            this.Player1.moveUp(4);
        }
        else if (this.Left_UpPressed) {
            this.Player1.moveDown(4);
        }
    }

    start() {
        this.update();

    }

    random_bar() {
        this.ball.bot(this.Player2);
    }

    update() {

        this.canvas.width = window.innerWidth / 2;
        this.canvas.height = window.innerHeight / 2;
        if (!this.Pause) {
            this.clear();
            this.show_score();
            this.write_text(this.MySpeech);
            this.draw();
            this.ControleGame();
            this.random_bar();
            this.ball.move();
            this.ball.collision(this.Player1, this.Player2);
        }
        requestAnimationFrame(() => this.update());

    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    center_line() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.canvas.width / 2, 0, 2, this.canvas.height);
    }

    paused() {
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("PAUSE", this.canvas.width / 2 - 50, this.canvas.height / 2);
    }

    cube()
    {
        // this.ctx.fillStyle = "white";
        // this.ctx.fillRect(this.canvas.width / 2 - 50, this.canvas.height / 2-130, 100, 100);
        let img = new Image();
        img.src = "/Photo.jpeg";
        this.ctx.drawImage(img, this.canvas.width / 2 - 50, this.canvas.height / 2-130, 100, 100);

    }

    draw() {
        this.cube();
        if (!this.Pause) {
            // this.center_line();
        }
        this.Player1.draw();
        this.Player2.draw();
        this.ball.draw();
    }

}

class Ball {
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
    ctx: CanvasRenderingContext2D;
    dx: number;
    dy: number;
    ballradius: number;
    canvas: HTMLCanvasElement;
    Player1: Player;
    Player2: Player;

    constructor(x: number, y: number, radius: number, color: string, ctx: CanvasRenderingContext2D, Canvas: HTMLCanvasElement, Player1: Player, Player2: Player) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 1;
        this.ctx = ctx;;
        this.ballradius = radius;
        this.canvas = Canvas;
        this.dx = -3;
        this.dy = 3;
        this.Player1 = Player1;
        this.Player2 = Player2;
        this.draw();
    }


    goal_sound() {
    }



    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.y + this.dy < 0) {// if ball hits the bottom
            this.dy = -this.dy;
        }
        if (this.y + this.dy > this.canvas.height) {// if ball hits the top
            this.dy = -this.dy;
        }
        if (this.y + this.dy > this.canvas.height || this.y + this.dy < 0) { // if ball hits the top or bottom
            this.dy = -this.dy;
        }

        if (this.x + this.dx < 0) {
            this.x = this.canvas.width / 2;
            this.y = this.canvas.height / 2;
            this.dx = -this.dx;
            this.Player2.score++;
            // this.goal_sound();
        }
        if (this.x + this.dx > this.canvas.width)// if ball hits the right
        {
            this.x = this.canvas.width / 2;
            this.y = this.canvas.height / 2;
            this.dx = -this.dx;
            this.Player1.score++;
        }

    }

    collision(Player1: Player, Player2: Player) {
        if (this.x + this.dx < this.Player1.x + this.Player1.width && this.x + this.dx > this.Player1.x && this.y + this.dy > this.Player1.y && this.y + this.dy < this.Player1.y + this.Player1.height) {
            this.dx = -this.dx;
            this.speed += 1;
        }
        if (this.x + this.dx < this.Player2.x + this.Player2.width && this.x + this.dx > this.Player2.x && this.y + this.dy > this.Player2.y && this.y + this.dy < this.Player2.y + this.Player2.height) {
            this.dx = -this.dx;
            this.speed += 1;
        }
    }


    calculate_coordinates_of_ball_on_paddle(Player: Player) {
        var paddle_center = Player.y + Player.height / 2;
        var ball_center = this.y + this.radius;
        var distance = paddle_center - ball_center;
        var y_coordinate_of_ball_on_paddle = distance / Player.height * this.canvas.height;
        return y_coordinate_of_ball_on_paddle;
    }

    bar_collision(Bar: Player) {
        if (this.x + this.dx < Bar.x + Bar.width && this.x + this.dx > Bar.x && this.y + this.dy > Bar.y && this.y + this.dy < Bar.y + Bar.height) {
            this.dx = -this.dx;
            this.dx += 0.5;
        }
    }

    bot(p: Player) {
        var y_coordinate_of_ball_on_paddle = this.calculate_coordinates_of_ball_on_paddle(p);
        if (y_coordinate_of_ball_on_paddle < this.y + this.radius) {
            p.moveUp(5);
        }
        else if (y_coordinate_of_ball_on_paddle > this.y + this.radius) {
            p.moveDown(5);
        }
        this.bar_collision(p);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.ballradius, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
    }

    ToJson() {
        return {
            "x": this.x,
            "y": this.y,
            "dx": this.dx,
            "dy": this.dy,
            "speed": this.speed,
            "radius": this.radius,
            "color": this.color,
            "ballradius": this.ballradius,
        }
    }
}

class Player {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    Canvas: HTMLCanvasElement;
    score: number;
    avatar: string;
    sound: any;


    constructor(x: number, y: number, width: number, height: number, color: string, ctx: CanvasRenderingContext2D, Canvas: HTMLCanvasElement, score: number, avatar: string) {
        this.x = x;
        this.y = y;
        this.color = color;//"rgb(" + Math.floor(Math.random() * 255 + 80) + "," + Math.floor(Math.random() * 255 + 80) + "," + 50 + Math.floor(Math.random() * 255 + 80) + ")";
        this.width = width;
        this.height = height;
        this.Canvas = Canvas;
        this.ctx = ctx;
        this.score = score;
        this.avatar = avatar;
        this.draw();
    }

    paddle_sound() {

    }

    get Height() {
        return this.height;
    }

    get Width() {
        return this.width;
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    get Score() {
        return this.score;
    }

    set Score(value: any) {
        this.score += value;
    }

    ToJson() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            color: this.color,
            score: this.score,
            avatar: this.avatar
        }
    }


    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        // var img = new Image();
        // img.src = this.avatar;
        this.ctx.closePath();
    }

    moveUp(direction: number) {
        this.y += direction;
        if (this.Canvas.height < this.y + this.height) {
            this.y = this.Canvas.height - this.height;
        }
    }

    moveDown(direction: number) {
        this.y -= direction;
        if (this.y < 0) {
            this.y = 0;
        }
    }
}



const Canvas = (props: any) => {
    const canvasRef = useRef(null)
    useEffect(() => {
        var game = new Game(canvasRef.current as any);
    }, []);
    return <canvas ref={canvasRef}  {...props} width={window.innerWidth / 2} height={window.innerHeight / 2} />
}
export default Canvas