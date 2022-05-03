const Paint = function(quantity){
    this.quantity = quantity;
}

Paint.prototype.isEmpty = function (){
    return this.quantity === 0;
}

Paint.prototype.emptyPaint = function () {
  this.quantity = 0;
}

module.exports = Paint; 