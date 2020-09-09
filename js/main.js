const componentPrices = {
    coffee: .75,
    decaf_coffee: .75,
    sugar: .25,
    cream: .25,
    steamed_milk: .35
    // Inventory and price can be added here and amount will be updated
    // ex: esspresso: 50   will add on to price and give user drink.
};

const drinkListing = [
    {
        name: 'Coffee',
        units_of_coffee: 3,
        units_of_sugar: 1,
        units_of_cream: 1,
    },
    {
        name: 'Decaf Coffee',
        units_of_decaf_coffee: 3,
        units_of_sugar: 1,
        units_of_cream: 1
    },
    {
        name: 'Caffe Latte',
        units_of_espresso: 2,
        units_of_steamed_milk: 1
    },
    {
        name: 'Caffe Americano',
        units_of_espresso: 3
    },
    {
        name: 'Caffe Mocha',
        units_of_espresso: 1,
        units_of_cocoa: 1,
        units_of_steamed_milk: 1,
        units_of_whipped_cream: 1
    },
    {
        name: 'Cappuccino',
        units_of_espresso: 2,
        units_of_steamed_milk: 1,
        units_of_foamed_milk: 1
    }
];
const coffeeBtn = document.getElementById('drink-coffee');
const decafCoffeeBtn = document.getElementById('drink-decaf-coffee');
const caffeLatteBtn = document.getElementById('drink-caffe-latte');
const caffeAmericanoBtn = document.getElementById('drink-caffe-americano');
const caffeMochaBtn = document.getElementById('drink-caffe-mocha');
const cappuccinoBtn = document.getElementById('drink-cappuccino');

function multiplyUnits(price, units) {
    return price * units;
}

function checkSumAndWrite(s, text) {
    if (Number.isNaN(s)) {
        // If the ingredient is not in the object then user will get notice to choose a new drink
        document.getElementsByTagName('h2')[0].innerHTML = text + ' is not available. <br /> ' +
            'Choose a different drink.';
    } else {
        let spacedText = '<li>' + text + '</li>';
        document.getElementsByTagName('h2')[0].innerHTML = text + ' coming up! <br /> ' +
            'Please pay $' + s;
        document.getElementById('product-output').innerHTML += spacedText;
    }
}

function displayText() {
    let drinkText = this.innerHTML;
    let sum;

    switch (drinkText) {
        case drinkListing[0].name:
            let drink0 = drinkListing[0];
            let drink0Ing1 = multiplyUnits(componentPrices.coffee, drink0.units_of_coffee);
            let drink0Ing2 = multiplyUnits(componentPrices.sugar, drink0.units_of_sugar);
            let drink0Ing3 = multiplyUnits(componentPrices.cream, drink0.units_of_cream);
            sum = drink0Ing1 + drink0Ing2 + drink0Ing3;

            checkSumAndWrite(sum, drinkText);
            break;
        case drinkListing[1].name:
            let drink1 = drinkListing[1];
            let drink1Ing1 = multiplyUnits(componentPrices.decaf_coffee, drink1.units_of_decaf_coffee);
            let drink1Ing2 = multiplyUnits(componentPrices.sugar, drink1.units_of_sugar);
            let drink1Ing3 = multiplyUnits(componentPrices.cream, drink1.units_of_cream);
            sum = drink1Ing1 + drink1Ing2 + drink1Ing3;

            checkSumAndWrite(sum, drinkText);
            break;
        case drinkListing[2].name:
            let drink2 = drinkListing[2];
            let drink2Ing1 = multiplyUnits(componentPrices.espresso, drink2.units_of_espresso);
            let drink2Ing2 = multiplyUnits(componentPrices.steamed_milk, drink2.units_of_steamed_milk);
            sum = drink2Ing1 + drink2Ing2;

            checkSumAndWrite(sum, drinkText);
            break;
        case drinkListing[3].name:
            let drink3 = drinkListing[3];
            let drink3Ing1 = multiplyUnits(componentPrices.espresso, drink3.units_of_espresso);
            sum = drink3Ing1;

            checkSumAndWrite(sum, drinkText);
            break;
        case drinkListing[4].name:
            let drink4 = drinkListing[4];
            let drink4Ing1 = multiplyUnits(componentPrices.espresso, drink4.units_of_espresso);
            let drink4Ing2 = multiplyUnits(componentPrices.cocoa, drink4.units_of_cocoa);
            let drink4Ing3 = multiplyUnits(componentPrices.steamed_milk, drink4.units_of_steamed_milk);
            let drink4Ing4 = multiplyUnits(componentPrices.whipped_cream, drink4.units_of_whipped_cream);
            sum = drink4Ing1 + drink4Ing2 + drink4Ing3 + drink4Ing4;

            checkSumAndWrite(sum, drinkText);
            break;
        case drinkListing[5].name:
            let drink5 = drinkListing[5];
            let drink5Ing1 = multiplyUnits(componentPrices.espresso, drink5.units_of_espresso);
            let drink5Ing2 = multiplyUnits(componentPrices.steamed_milk, drink5.units_of_steamed_milk);
            let drink5Ing3 = multiplyUnits(componentPrices.foamed_milk, drink5.units_of_foamed_milk);
            sum = drink5Ing1 + drink5Ing2 + drink5Ing3;

            checkSumAndWrite(sum, drinkText);
            break;
        default:
            document.getElementsByTagName('h2')[0].innerHTML =  `Sorry, we are out of ${drinkText}.`;
    }
}

coffeeBtn.addEventListener('click', displayText);
decafCoffeeBtn.addEventListener('click', displayText);
caffeLatteBtn.addEventListener('click', displayText);
caffeAmericanoBtn.addEventListener('click', displayText);
caffeMochaBtn.addEventListener('click', displayText);
cappuccinoBtn.addEventListener('click', displayText);

for (let i = 0; i < drinkListing.length; i++) {
    document.getElementsByTagName('button')[i].innerHTML = (drinkListing[i].name);
}
