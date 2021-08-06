import React, {useEffect, useRef}from 'react';


const Canvas = (props) => {

  
  let mousePositionX = 0;
  let mousePositionY = 0;
  let sizeOfSquare = 30;

  const canvasRef = useRef(null)



 


  class Square{
    constructor(xPosition, yPosition){
     
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.color = '#e74c3c'
      
    }

    draw(ctx){
        
        ctx.beginPath()
        ctx.rect(this.xPosition,this.yPosition, sizeOfSquare, sizeOfSquare);
       
        ctx.fill()
        ctx.fillStyle = this.color
     
    }

    onHover(ctx){

        if(this.xPosition === Math.floor(mousePositionX) && this.yPosition === Math.floor(mousePositionY)){
          this.color = 'red'
        }
    }



    


    
}

let grid = []


let i = 0;
let j = 0;


let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;


for(i = 0; i < windowWidth / sizeOfSquare; i++){
  grid.push([])
  for(j = 0; j < (windowHeight /2) / sizeOfSquare; j++){
    grid[i].push(new Square(i * (sizeOfSquare + 1), j * (sizeOfSquare + 1)))
  
  }

    
    
  
}

console.log(grid)

const draw = (ctx, frameCount) => {
   ctx.fillStyle = 'white';
   ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
 // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
 
  ctx.beginPath()
  for(let i = 0; i < grid.length; i++){
   for(let j = 0; j < grid[i].length; j++){
    grid[i][j].draw(ctx)
    grid[i][j].onHover(ctx)
    console.log('Drawing Square')
     
   }
     
   
  

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


 




  


    return ( <canvas onMouseMove={(e) => {mousePositionX = e.clientX; mousePositionY = e.clientY; console.log({x: mousePositionX, y:mousePositionY})}} ref={canvasRef}/> );
}
 
export default Canvas;