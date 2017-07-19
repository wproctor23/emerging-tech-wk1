document.getElementById("zooBtn").addEventListener("click",function(){
  console.log("button clicked");

    class Marsupial {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' likes to eat leaves.');
      }
    }

    class Koala extends Marsupial {
      speak() {
        super.speak();
        console.log(this.name + ' is a marsupial.');
      }
    }

    var l = new Koala('Jim');
    l.speak();
    // Fuzzy makes a noise.
    // Jim yawns.
})
document.getElementById("zooBtn2").addEventListener("click",function(){
  console.log("button clicked");

    class Insect {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' loves to fly.');
      }
    }

    class Butterfly extends Insect {
      speak() {
        super.speak();
        console.log(this.name + ' is an insect.');
      }
    }

    var l = new Butterfly('Sammantha');
    l.speak();
    // Fuzzy makes a noise.
    // Jim yawns.
})
document.getElementById("zooBtn3").addEventListener("click",function(){
  console.log("button clicked");

    class Canine {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' likes to play fetch.');
      }
    }

    class Dog extends Canine {
      speak() {
        super.speak();
        console.log(this.name + ' is a canine.');
      }
    }

    var l = new Dog('Bernard');
    l.speak();
    // Fuzzy makes a noise.
    // Jim yawns.
})
document.getElementById("zooBtn4").addEventListener("click",function(){
  console.log("button clicked");

    class Mammal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' can jump really high.');
      }
    }

    class Dolphin extends Mammal {
      speak() {
        super.speak();
        console.log(this.name + ' is a mammal.');
      }
    }

    var l = new Dolphin('Jesse');
    l.speak();
    // Fuzzy makes a noise.
    // Jim yawns.
})
document.getElementById("zooBtn5").addEventListener("click",function(){
  console.log("button clicked");

    class Arachnid {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' likes to hang around.');
      }
    }

    class Spider extends Arachnid {
      speak() {
        super.speak();
        console.log(this.name + ' is a spider.');
      }
    }

    var l = new Spider('Frank');
    l.speak();
    // Fuzzy makes a noise.
    // Jim yawns.
})
document.getElementById("zooBtn6").addEventListener("click",function(){
  console.log("button clicked");

    class Feline {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' likes to play fight.');
      }
    }

    class Lion extends Feline {
      speak() {
        super.speak();
        console.log(this.name + ' is a feline.');
      }
    }

    var l = new Lion('Xena');
    l.speak();
    // Fuzzy makes a noise.
    // Jim yawns.
})
