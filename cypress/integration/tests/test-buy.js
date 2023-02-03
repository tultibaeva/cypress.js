
describe('Тестирование покупки', function () {
   
   it('Позитивный тест на покупку', function () {
        cy.visit('https://testqastudio.me');
        cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.contains('Ваша Корзина');
        cy.visit('https://testqastudio.me');
        cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.contains('Ваша Корзина');
        cy.get('.checkout');
        cy.visit('https://testqastudio.me/cart/');
        cy.get('.checkout-button').click();
        cy.get('#billing_first_name').type('Иван');
        cy.get('#billing_last_name').type('Иванов');
        cy.get('#billing_address_1').type('Пряничный проспект 91');
        cy.get('#billing_city').type('Иваново');
        cy.get('#billing_state').type('Ивановский район');
        cy.get('#billing_postcode').type('12345');
        cy.get('#billing_phone').type('123456789');
        cy.get('#billing_email_field').type('ivanov@email.ru');
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
    })
})
