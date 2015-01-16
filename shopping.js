

//create array that will hold all ordered products
    var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects
        for(var product in shoppingCart){
            //add new row      
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties 
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
        }
        //fill total cost of our shopping cart 
        document.getElementById("cart_total").innerHTML=cart_total_price;
    }


    function AddtoCart(name,description,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //Add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

    }  


    //Add some products to our shopping cart via code or you can create a button with onclick event
    //AddtoCart("Table","Big red table",50);
    //AddtoCart("Door","Big yellow door",150);
    //AddtoCart("Car","Ferrari S23",150000);






<table cellpadding="4" cellspacing="4" border="1">
    <tr>
        <td valign="top">
            <table cellpadding="4" cellspacing="4" border="0">
                <thead>
                    <tr>
                        <td colspan="2">
                            Products for sale
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Table
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Table','Big red table',50)"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Door
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Door','Yellow Door',150)"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Car
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart('Ferrari','Ferrari S234',150000)"/>
                        </td>
                    </tr>
                </tbody>

            </table>
        </td>
        <td valign="top">
            <table cellpadding="4" cellspacing="4" border="1" id="orderedProductsTbl">
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Description
                        </td>
                        <td>
                            Price
                        </td>
                    </tr>
                </thead>
                <tbody id="orderedProductsTblBody">

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" align="right" id="cart_total">

                        </td>
                    </tr>
                </tfoot>
            </table>
        </td>
    </tr>
</table>

