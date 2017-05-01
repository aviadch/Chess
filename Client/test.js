function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}


function testPosition(){
    //Create Some positions
    var pos1= new Pos(1,2);
    assert((pos1.toString()=="(1,2)"));
    console.log(Pos.mapper("a1")); 
}

console.log("Hi, welcome to test");
testPosition();