var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("[mysql error]",err);
  console.log("connected as id " + connection.threadId);
  queryProducts();
});

function queryProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("[mysql error]",err);
    console.log("ID | Prdct | Dpt | Price | QTY");
    console.log("-----------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].item_id +
          " | " +
          res[i].product_name +
          " | " +
          res[i].department_name +
          " | " +
          res[i].price +
          " | " +
          res[i].stock_quantity
      );
    }
    console.log("-----------------------------------");
    placeOrder();
  });
}


function placeOrder() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("[mysql error]",err);
    // prompt for info about the items desired for purchase
    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "Enter the ID of the item you would like to purchase: "
        },
        {
          name: "quant",
          type: "input",
          message: "What quantity would you like to purchase? "
        },
        
      ])
      .then(function(answer) {
        console.log(answer.id)
        
        // get the information about the desired item
        var selectedItem;
        for (var j = 0; j < res.length; j++) {
          if (res[j].item_id === parseInt(answer.id)) {
            selectedItem = res[j];
          }
          
        // console.log(res[i])
        }
        
        // console.log(selectedItem)
        // console.log(res[i])
        // determine if the warehouse has the stock to fulfill the purchase
    
        if (selectedItem.stock_quantity > parseInt(answer.quant)) {
          // The database showed an adequette quantity so update the the inventory with the purchase.
          //console.log(selectedItem.stock_quantity)
          console.log(selectedItem.item_id)
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: selectedItem.stock_quantity - parseInt(answer.quant)
              },
              {
                item_id: selectedItem.item_id
              }
            ],
            
            function(error) {
              if (error) throw err;
              console.log("[mysql error]",err);
              console.log("Your Order for item ID" + selectedItem.name + " was placed successfully.");
              console.log("The total for your order is: " + "$ " + answer.quant*selectedItem.price)
              placeOrder();
            }
          );
        }
        else {
          // the quantity on hand wasn't large enough.
          console.log("We're sorry, but our stock for item " + selectedItem.name + " was too low. We could not complete your order.");
          placeOrder();
        }
    })
      });
  }

// function queryDanceSongs() {
//   var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//   });

// logs the actual query being run
//   console.log(query.sql);
//   connection.end();
// }
