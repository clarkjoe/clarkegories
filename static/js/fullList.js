const tableHeaders = [
    "Category"
]
const catergories = [
    "A Boy's Name",
    "U.S. City",
    "Thing That Is Cold",
    "School Supply",
    "Pro Sports Team",
    "Insect",
    "Breakfast Food",
    "Furniture",
    "TV Show",
    "Thing Found In The Ocean",
    "President",
    "Product Name",

    "Famous Female",
    "Medicine/Drug",
    "Thing Made Of Metal",
    "Hobby",
    "People In Uniform",
    "Thing You Plug In",
    "Animal",
    "Language",
    "Name Used In The Bible",
    "Junk Food",
    "Thing That Grows",
    "Company",

    "Aritcle Of Clothing",
    "Dessert",
    "Car Part",
    "Thing Found On A Map",
    "Athlete",
    "4-Letter Word",
    "Item In The Refrigerator",
    "Farm Animal",
    "Street Name",
    "Thing At The Beach",
    "Color",
    "Tool",

    "Hero",
    "Gift/Present",
    "Term Of Endearment",
    "Kind Of Dance",
    "Thing That Is Black",
    "Vehicle",
    "Tropical Location",
    "College Major",
    "Dairy Product",
    "Thing In A Souvenir Shop",
    "Item In Your Purse/Wallet",
    "World Record",

    "Sandwich",
    "Item In A Catalog",
    "World Leader/Politician",
    "School Subject",
    "Excuse For Being Late",
    "Ice Cream Flavor",
    "Thing That Jumps/Bounces",
    "Television Star",
    "Thing In A Park",
    "Foreign City",
    "Stone/Gem",
    "Musical Instrument",

    "Nickname",
    "Thing In The Sky",
    "Pizza Topping",
    "College/University",
    "Fish",
    "Country",
    "Thing That Has Spots",
    "Historical Figure",
    "Something You're Afraid Of",
    "Term Of Measurement",
    "Item In This Room",
    "Book Title",

    "Fictional Character",
    "Menu Item",
    "Magazine",
    "Capital",
    "Kind Of Candy",
    "Item You Save Up To Buy",
    "Footwear",
    "Something You Keep Hidden",
    "Item In A Suitcase",
    "Thing With A Tail",
    "Sports Equipment",
    "Crime",

    "Thing That Is Sticky",
    "Award/Ceremony",
    "Car",
    "Spice/Herb",
    "Bad Habit",
    "Cosmetic/Toiletry",
    "Celebrity",
    "Cooking Utensil",
    "Reptile/Amphibian",
    "Park",
    "Leisure Activity",
    "Thing You're Allergic To",

    "Restaurant",
    "Notorious Person",
    "Fruit",
    "Thing In A Medicine Cabinet",
    "Toy",
    "Household Chore",
    "Body Of Water",
    "Author",
    "Halloween Costume",
    "Weapon",
    "Thing That Is Round",
    "Word Associated With Exercise",

    "Sport",
    "Song Title",
    "Part Of The Body",
    "Ethnic Food",
    "Thing You Shout",
    "Bird",
    "A Girl's Name",
    "Way To Get From Here To There",
    "Item In A Kitchen",
    "Villian/Monster",
    "Flower",
    "Thing You Replace",

    "Baby Food",
    "Famous Duo and Trio",
    "Thing Found At A Desk",
    "Vacation Spot",
    "Disease",
    "Word Associated With Money",
    "Item In A Vending Machine",
    "Movie Title",
    "Game",
    "Thing That You Wear",
    "Beer",
    "Thing At A Circus",

    "Vegetable",
    "State",
    "Thing You Throw Away",
    "Occupation",
    "Applicance",
    "Cartoon Character",
    "Type Of Drink",
    "Musical Group",
    "Store Name",
    "Thing Found At A Football Game",
    "Tree",
    "Personality Trait",
]

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let tableHeader of tableHeaders) {
        let th = document.createElement("th");
        let text = document.createTextNode(tableHeader);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTableRows(table) {
    for (let category of catergories) {
        let row = table.insertRow();
        let text = document.createTextNode(category)
        row.appendChild(text)
    }
}

let table = document.querySelector("table");
generateTableHead(table);
generateTableRows(table);
