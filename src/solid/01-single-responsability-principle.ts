(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log('Product: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Saving in database', product);
    }
  }

  class Mailer {
    private masterEmail: string = 'test@google.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Sending mail to customers', template);
    }
  }

  // Usually, this is a class to control the view that is displayed to the user
  // Remember that we can have many views to do this same job.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['client@google.com'], 'to-clients');
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      console.log('Adding to the cart ', productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
