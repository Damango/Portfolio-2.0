import React, {useEffect, useRef}from 'react';


const Canvas = (props) => {

  
  const canvasRef = useRef(null)

  let mousePositionX = 0;
  let mousePositionY = 0;

 


  class Ball{
    constructor(radius, xPosition, yPosition,xVelocity, yVelocity){
        this.radius = radius;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xVelocity = xVelocity
        this.yVelocity = yVelocity
    }

    draw(ctx){
        
        ctx.beginPath()
        ctx.arc(this.xPosition,this.yPosition, this.radius, 0, Math.PI * 2);
       
        ctx.fill()
     
    }



    move(ctx){

        if((this.xPosition + this.radius) >= window.innerWidth ||this.xPosition - this.radius <= 0 ){
            this.xVelocity = -this.xVelocity
        }

        if(this.yPosition + this.radius >= window.innerHeight || this.yPosition - this.radius <= 0 ){
            this.yVelocity = -this.yVelocity 
        }

      /*  if(this.xPosition  === mousePositionX + 10  || this.xPosition === mousePositionX){
          console.log(this.xPosition + '' + mousePositionX)
          this.xVelocity = 10
        }*/
       
        this.xPosition += this.xVelocity;
        this.yPosition += this.yVelocity;
        ctx.fillStyle = 'rgb(' + Math.abs((this.xVelocity * 30) + (this.yVelocity * 30)) + ', 76, 60)'
        //ctx.fillStyle = '#e74c3c'
        this.draw(ctx)
       
    }

    follow(ctx){
      if(this.xPosition < mousePositionX){
        if(this.xPosition - mousePositionX)
        this.xVelocity -= 0.01
     
        console.log(mousePositionX)
      }

      else if( this.xPosition > mousePositionX){
        this.xVelocity += 0.01;
        
      }

      if(this.yPosition < mousePositionY){
        this.yVelocity -= 0.01
        
        console.log(mousePositionY)
      }

      else if( this.yPosition > mousePositionY){
        this.yVelocity += 0.01;
      
      }

    

    
      this.move(ctx)
      this.draw(ctx)
   
    }


    onCursor(ctx){
      this.xPosition = mousePositionX - 10
      this.yPosition = mousePositionY - 10
    }

    
}

let circleArray = []
let followBall = new Ball(20,100, 100, 1, 1)
for(let i =0; i < 100; i++){

    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random()* window.innerHeight;
    let randomVelocity = Math.random() * 0.5

    circleArray.push(new Ball(10, randomX, randomY, randomVelocity, randomVelocity))
    
  
}

const draw = (ctx, frameCount) => {
   ctx.fillStyle = 'white';
   ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
 // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
 
  ctx.beginPath()
  for(let i = 0; i < circleArray.length; i++){
   
      circleArray[i].draw(ctx)
      circleArray[i].follow(ctx)
     // circleArray[i].move(ctx)
    followBall.draw(ctx)
    followBall.onCursor(ctx)
  

  }


        

 
}

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    function resizeCanvas(canvas) {
        const { width, height } = canvas.getBoundingClientRect()
        
        if (canvas.width !== width || canvas.height !== height) {
          const { devicePixelRatio:ratio=1 } = window
          const context = canvas.getContext('2d')
          canvas.width = width*ratio
          canvas.height = height*ratio
          context.scale(ratio, ratio)
          return true
        }
    
        return false
      }
    
      resizeCanvas(canvas)
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])


 




  


    return ( <canvas onMouseMove={(e) => {mousePositionX = e.clientX; mousePositionY = e.clientY;}} ref={canvasRef}/> );
}
 
export default Canvas;