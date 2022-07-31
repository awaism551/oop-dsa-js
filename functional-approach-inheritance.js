function Shape(sideLength) {
    console.log(`in function Shape this ${JSON.stringify(this)}`);
    this.eachSideLength = sideLength;
    console.log(`in function Shape this ${JSON.stringify(this)}`);
}
let newShape = Shape.bind({
    eachSideLength: 45
}, 7);
newShape();

Shape.call({
    eachSideLength: 30
}, 12)

Shape.apply({
    eachSideLength: 11
}, [12])