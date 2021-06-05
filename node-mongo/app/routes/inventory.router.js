module.exports = function(app) {

    var inventories = require('../controllers/inventory.controller.js');

    app.post('/api/inventory', inventories.createInventory);        //post an inventory to MongoDB database
    app.get('/api/inventory/:id', inventories.getInventory);        //retrieve an inventory from MongoDB database with a given id
    app.get('/api/inventories', inventories.inventories);           //retrieve all inventories from MongoDB database
    app.put('/api/inventory', inventories.updateInventory);         //update an inventory from MongoDB database
    app.delete('/api/inventory/:id', inventories.deleteInventory);  //remove an inventory based on an id from MongoDB database
}