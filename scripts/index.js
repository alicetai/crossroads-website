import {loadProductNames, loadProductPrice, loadProductImages} from './product.js';

window.onload = function() {
    loadProductNames();
    loadProductPrice();
    loadProductImages();
    loadBrands();
    showCartBadge(totalCartQuantity);
};
