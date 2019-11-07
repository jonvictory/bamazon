# bamazon
This is homework assignment number 12. It is a mock up of the back end of an internet retail site using MYSQL to manipulate data.
The app prompts users with two messages.

   * The first asks them the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.

7. Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and then prevents the order from going through.

8. However, if the store _does_ have enough of the product, it fulfills the customer's order.
   * This updates the SQL database to reflect the remaining quantity.
   * Once the update goes through, the app shows the total cost of the purchase.

- - -