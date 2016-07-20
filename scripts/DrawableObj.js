/**
 * Created by xaleth on 7/13/2016.
 */
class DrawableObj{
    constructor(){
        if(this.constructor === DrawableObj) {
            throw new TypeError('Abstract class "DrawableObj" cannot be instantiated directly.');
        }

        if(this.draw === DrawableObj.prototype.draw){
            throw new TypeError('Please implement abstract method draw()');
        }
    }

    draw(){
        throw new TypeError("Do not call abstract method draw from child.");
    }
}