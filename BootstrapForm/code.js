function pizzaOrder()
{
    var output = "<h1>Pizza Order: ";

    //radio buttons
    if( document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if( document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else
    {
        output += " Large ";
    }

    //checkboxes
    if( document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni ";
    }

    if(document.getElementById("sausage").checked == true)
    {
        output = output + " sausage ";
    }

    if(document.getElementById("mushrooms").checked == true)
    {
        output = output + " mushrooms ";
    }
    //output statement
    document.getElementById("output").innerHTML = output + "</h3>";
}