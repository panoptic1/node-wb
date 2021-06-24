const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    res.render('index');
};

exports.addStore = (req, res) => {
    console.log(req.body);
    res.render('editStore', { title: 'Add Store'});
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`);
    res.redirect(`/store/${store.slug}`);
};

exports.getStores = async(req, res) => {
    // 1. Query the database for a list of all stores
    const stores = await Store.find();
    console.log(stores);
    //parameter 1 refers to the 'stores' template, parameter 2 indicates what should be rendered on the page?
    res.render('stores', { title: 'Stores', stores});
}

exports.editStore = async (req, res) => {
    //1. Find the store given the ID
    res.json(req.params);
    //2. Confirm that they are the owner of the store
    //3. Render the edit form so that the user can update their store
}