var Mango{
        constructer=(x,y,r)
{
    var options={
        isStatic:true,
        restitution:0,
        friction:1,
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.Image=loadImage("images/mango.png")
        this.body=bodies,circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
}

}