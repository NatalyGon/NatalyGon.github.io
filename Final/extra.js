function item(id, name, price)
{
    this.id = id;
    this.name = name;
    this.price = price;
}

var items = [];

items[0] = new item(1, "Cinnamon Milk Boba Tea", 7.00);
items[1] = new item(2, "Special Cookies and Cram Boba Tea", 9.00);
items[2] = new item(3, "Honey Brown Sugar Boba Tea", 7.00);

items[3] = new item(4, "Strawberry Boba Tea", 7.00);
items[4] = new item(5, "Taro Boba Tea", 8.00);
items[5] = new item(6, "Mango Boba Tea", 7.00);

items[6] = new item(7, "Strawberry and Chocolate Ice Cream Waffle Cone", 10.00);
items[7] = new item(8, "Banana and Nutella Waffle Wrap", 10.00);
items[8] = new item(9, "Cookies and Cream Ice Cream Waffle Cone", 10.00);

items[9] = new item(10, "Oreo and Pudding Bubble Waffle", 12.00);
items[10] = new item(11, "KitKat and Nutella Waffle Cone", 10.00);
items[11] = new item(12, "Berry Special Bubble Waffle", 12.00);

items[12] = new item(13, "Rain Mood Glass Cup", 10.00);
items[13] = new item(14, "Cats Peeking Cup Set", 17.20);
items[14] = new item(15, "Boba Tea Lamp", 13.50);

items[15] = new item(16, "Floral Socks", 11.50);
items[16] = new item(17, "Strawberry Milk Sweater", 24.99);
items[17] = new item(18, "Boba Tea Sweater", 24.99);

function updateCarryout()
{
    document.getElementById("cart-link").innerHTML = "Carryout (" + sessionStorage.length + ")";
}

function getID(arg)
{
    var counter = 0;
    while( items[counter].name != arg)
    {
        counter++;
    }

    return items[counter].id;
}

function add(arg)
{
    sessionStorage.setItem(items[arg].name, items[arg].price);
    updateCarryout();
}

function remove(arg)
{
    sessionStorage.removeItem(arg);
    displayCart();
    updateCarryout();
}

function displayCart()
{
    var total = 0;
    var output = "<table class='table table-hover'>"

    if( sessionStorage.length == 0)
    {
        document.getElementById("cart").innerHTML = "<h3>Your pouch is empty, Adventurer!</h3>";
        document.getElementById("total").innerHTML = "<h3>Total: " + total + "</h3>";
    }
    else
    {
        output += "<tr><th>Image</th><th>Name</th><th>Price</th><th>Delete</th>";

        for( var x = 0; x < sessionStorage.length; x++)
        {
            var key = sessionStorage.key(x);
            output += "<tr><td><img src='images/image"+ getID(key) +".PNG' width='50px' height='50px'></td>";
            output += "<td>" + key + "</td><td>" + sessionStorage.getItem(key) + "</td>";
            output += "<td><input type='button' class='btn btn-primary' value='Delete' onclick='remove(\"" + key + "\")'></td></tr>";
            total += parseFloat(sessionStorage.getItem(key));
        }

        document.getElementById("cart").innerHTML = output;
        document.getElementById("total").innerHTML = "<h3>Total: " + total.toFixed(2) + "</h3>";
    }
}