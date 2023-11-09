const areaOfTraingle = (base,height) =>{
const area = 1/2*(base*height);
return area;
}

const findarea = areaOfTraingle(2,3);
console.log(`area of traingle is ${findarea}`);

// area of circle 

const areaOfCircle = (radius) =>{
    const circle = 3.14*radius*radius;
    return circle ;


}

const circle = areaOfCircle(2);
console.log(`area of circle is ${circle}`);