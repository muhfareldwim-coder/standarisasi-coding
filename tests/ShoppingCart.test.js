const ShoppingCart = require('../src/ShoppingCart');

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  // addItem
  describe('addItem', () => {
    test('should add item when valid item given', () => {
      // Arrange
      const item = { name: 'Book', price: 50000 };

      // Act
      cart.addItem(item);

      // Assert
      expect(cart.items).toHaveLength(1);
      expect(cart.items[0].name).toBe('Book');
    });

    test('should increment quantity when same item added twice', () => {
      cart.addItem({ name: 'Book', price: 50000 });
      cart.addItem({ name: 'Book', price: 50000 });

      expect(cart.items[0].quantity).toBe(2);
    });

    test('should throw error when item has no name', () => {
      expect(() => cart.addItem({ price: 1000 })).toThrow('Invalid item');
    });

    test('should throw error when price is negative', () => {
      expect(() => cart.addItem({ name: 'X', price: -1 })).toThrow(
        'Price cannot be negative'
      );
    });
  });

  // removeItem
  describe('removeItem', () => {
    test('should remove item when existing item name given', () => {
      cart.addItem({ name: 'Book', price: 50000 });
      cart.removeItem('Book');

      expect(cart.items).toHaveLength(0);
    });

    test('should throw error when removing non-existent item', () => {
      expect(() => cart.removeItem('Ghost')).toThrow('Item not found');
    });
  });

  // calculateSubtotal
  describe('calculateSubtotal', () => {
    test('should return 0 when cart is empty', () => {
      expect(cart.calculateSubtotal()).toBe(0);
    });

    test('should sum price times quantity for all items', () => {
      cart.addItem({ name: 'Book', price: 50000, quantity: 2 });
      cart.addItem({ name: 'Pen', price: 10000 });

      expect(cart.calculateSubtotal()).toBe(110000);
    });
  });

  // calculateTotal
  describe('calculateTotal', () => {
    test('should return subtotal when no discount and no tax', () => {
      cart.addItem({ name: 'Book', price: 100000 });

      expect(cart.calculateTotal()).toBe(100000);
    });

    test('should apply discount correctly', () => {
      cart.addItem({ name: 'Book', price: 100000 });

      expect(cart.calculateTotal(0.1)).toBe(90000);
    });

    test('should apply discount then tax correctly', () => {
      cart.addItem({ name: 'Book', price: 100000 });

      expect(cart.calculateTotal(0.1, 0.11)).toBe(99900);
    });

    test('should throw error when discount out of range', () => {
      expect(() => cart.calculateTotal(1.5)).toThrow('Invalid discount rate');
    });

    test('should throw error when tax out of range', () => {
      expect(() => cart.calculateTotal(0, -0.1)).toThrow('Invalid tax rate');
    });
  });

  // getItemCount
  describe('getItemCount', () => {
    test('should return 0 when cart empty', () => {
      expect(cart.getItemCount()).toBe(0);
    });

    test('should sum all quantities', () => {
      cart.addItem({ name: 'A', price: 1, quantity: 3 });
      cart.addItem({ name: 'B', price: 1, quantity: 2 });

      expect(cart.getItemCount()).toBe(5);
    });
  });

  // clear
  describe('clear', () => {
    test('should empty the cart', () => {
      cart.addItem({ name: 'A', price: 1 });
      cart.clear();

      expect(cart.items).toHaveLength(0);
    });
  });
});
