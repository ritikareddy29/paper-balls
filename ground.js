class ground {
    constructor(x,y,width,height) {
		var options= {
			isStatic:true }
		this.x=x;
		this.y=y;
		this.width = width 
		this.height = height
		this.body = Bodies.rectangle(x, y, weight, height , options);
 		World.add(world,this.body);

	}
	display()
	{
        var groundPos=this.body.position;		
            push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}