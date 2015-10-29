//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  function Person(name, age) {
    this.name = name;
    this.age = age;
  };

//Now create three instances of Person with data you make up

  //code here
  var person1 = new Person("Howard", 32);
  var person2 = new Person("Stepehn", 7);
  var person3 = new Person("Christine", 35);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
      alert(this.name);
    }
  };

  person1.name;
  person2.name;
  person3.name;
