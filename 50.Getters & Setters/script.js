// Getters & Setters
// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle {
  // Constructor method - called when creating a new instance of the class
  constructor(width, height) {
    // These assignments will actually use the setters below
    this.width = width;  // Calls the 'width' setter
    this.height = height; // Calls the 'height' setter
  }

  // Setters - special methods that control how properties are assigned/updated
  // They are called whenever you try to set the property value with '='

  // Width setter
  set width(newWidth) {
    // Validation - ensure width is positive
    if (newWidth > 0) {
      // Note: We use '_width' (with underscore) to avoid naming conflict with the setter
      // This is a common convention for "private" properties (though not truly private in JavaScript)
      this._width /*_(parameter)=private property*/ = newWidth
    }
    else {
      console.error("Width must be a positive number")
    }
  }

  // Height setter - similar to width setter
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight
    }
    else {
      console.error("Height must be a positive number")
    }
  }

  // Getters - special methods that control how properties are read/accessed
  // They are called whenever you try to access the property

  // Width getter
  get width() {
    // Returns the width formatted as a string with 1 decimal place and 'cm' unit
    return `${this._width.toFixed(1)}cm`;
  }

  // Height getter
  get height() {
    // Returns the height formatted similarly to width
    return `${this._height.toFixed(1)}cm`;
  }

  // Area getter - a calculated property (not stored directly)
  get area() {
    // Calculates area by multiplying width and height, then formats the result
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

// Testing the class

// This would trigger the error messages in the setters:
//const rectangle = new Rectangle(-1000000 , "pizza");

// Create a valid rectangle with width 3 and height 4
const rectangle = new Rectangle(3, 4);

// These attempts to set invalid values will trigger the error messages:
rectangle.width = -10;      // Triggers "Width must be a positive number"
rectangle.height = 'hello'; // JavaScript will coerce 'hello' to NaN, which fails the > 0 check

// These calls use the getters to retrieve formatted values:
console.log(rectangle.width);  // "3.0cm" - formatted by the width getter
console.log(rectangle.height); // "4.0cm" - formatted by the height getter
console.log(rectangle.area);   // "12.0cm^2" - calculated by the area getter