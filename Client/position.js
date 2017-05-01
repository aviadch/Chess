var LETTER_TO_NUM = {
    "a":0,
    "b":1,
    "c":2,
    "d":3,
    "e":4,
    "f":5,
    "g": 6,
    "h":7   
};
function Pos(row,col){
    this.row = row;
    this.col = col;
}

Pos.prototype.toString = function(){
    return "("+this.row+","+this.col+")";
} 

/*
Map from an alphanumer represention to normal position
Example: "a2" is equal to a- first col (0) and 2- second row (1) : (1,0)
*/
Pos.mapper = function(alphanumer){
    var row = alphanumer[1]-1;
    var col = alphanumer[0].charCodeAt(0)-"a".charCodeAt(0);
    return new Pos(row,col)
};
