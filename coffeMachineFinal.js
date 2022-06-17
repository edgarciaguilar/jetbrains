const input = require('sync-input');

let machine =
    {
      water: 400,
      milk: 540,
      beans: 120,
      cups: 9,
      money: 550
    };

function legend(water1,milk1,beans1,cups1,money1) {
  console.log("\nThe coffee machine has:");
  console.log(water1+" ml of water");
  console.log(milk1+" ml of milk");
  console.log(beans1+" g of coffee beans");
  console.log(cups1+" disposable cups");
  console.log("$"+money1+" of money\n");
}

//function actions() {
  let repeat = true;
  let name = input("Hi, for a better service please tell me what's your name: ");
  do {
    let action = input("Write action (buy, fill, take, remaining, exit):\n");
    switch (action) {
      case "remaining":
        legend(machine.water, machine.milk, machine.beans, machine.cups, machine.money);
        break;
      case "take":
        console.log(`I gave you ${machine.money}\n`);
        machine.money = 0;
        break;
      case "fill":
        let water2 = Number(input("Write how many ml of water you want to add:\n"));
        let milk2 = Number(input("Write how many ml of milk you want to add:\n"));
        let beans2 = Number(input("Write how many grams of coffee beans you want to add:\n"));
        let cups2 = Number(input("Write how many disposable coffee cups you want to add:\n"));
        //legend(machine.water+water2,machine.milk+milk2,machine.beans+beans2,machine.cups+cups2,machine.money);
        machine.water+=water2;
        machine.milk+=milk2;
        machine.beans+=beans2;
        machine.cups+=cups2;
        //machine.money;
        break;
      case "buy":
        let answer = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
        let water = 0;
        let milk = 0;
        let beans = 0;

        if (answer === 1){
          water = Math.floor(machine.milk / 250);
          milk = Math.floor(machine.milk / 540);
          beans = Math.floor(machine.beans / 16);
          if (water < 1) {
            console.log("Sorry, not enough water!\n");
          } else if (milk < 1) {
            console.log("Sorry, not enough milk!\n");
          } else if (beans < 1) {
            console.log("Sorry, not enough coffee beans!\n");
          } else {
            console.log("I have enough resources, making you a coffee!\n");
            machine.water-=250;
            machine.beans-=16;
            machine.cups--;
            machine.money+=4;
          }
          //legend(machine.water-250, machine.milk,machine.beans-16,machine.cups-1,machine.money+4);
        }
        if (answer===2){
          water = Math.floor(machine.milk / 350);
          milk = Math.floor(machine.milk / 75);
          beans = Math.floor(machine.beans / 20);
          if (water < 1) {
            console.log("Sorry, not enough water!\n");
          } else if (milk < 1) {
            console.log("Sorry, not enough milk!\n");
          } else if (beans < 1) {
            console.log("Sorry, not enough coffee beans!\n");
          } else {
            console.log("I have enough resources, making you a coffee!\n");
            machine.water-=350;
            machine.milk-=75;
            machine.beans-=20;
            machine.cups--;
            machine.money+=7;
          }
          //legend(machine.water-350,machine.milk-75,machine.beans-20,machine.cups-1,machine.money+7);
        }
        if (answer===3){
          water = Math.floor(machine.milk / 200);
          milk = Math.floor(machine.milk / 100);
          beans = Math.floor(machine.beans / 12);
          if (water < 1) {
            console.log("Sorry, not enough water!\n");
          } else if (milk < 1) {
            console.log("Sorry, not enough milk!\n");
          } else if (beans < 1) {
            console.log("Sorry, not enough coffee beans!\n");
          } else {
            console.log("I have enough resources, making you a coffee!\n");
            machine.water-=200;
            machine.milk-=100;
            machine.beans-=12;
            machine.cups--;
            machine.money+=6;
          }
          //legend(machine.water-200,machine.milk-100,machine.beans-12,machine.cups-1,machine.money+6);
        }
        if (answer=="back"){
          break;
        }
        break;

      case  "exit":
        console.log("thanks for your buying bye");
        repeat = false;
        break;
    }
  }while (repeat == true);

//actions();
//legend(machine.water, machine.milk, machine.beans, machine.cups, machine.money);