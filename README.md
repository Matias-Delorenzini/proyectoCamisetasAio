Matías Delorenzini Proyecto Final

Éste proyecto es el front-end de una webapp de tipo e-commerce que usa Firestore como base de datos. Está basada en un ecommerce de camisetas de fútbol. 

Listado y detalle de productos:
    El componente ItemListContainer muestra el catálogo de camisetas adecuandose al contexto de categoría e ItemDetailContainer muestra el detalle de cada producto al usuario

Navegación:
    Se usa React Router para navegar a través de las diferentes partes de la página a través de enlaces en el NavBar, sin recargas de página en ningún momento

Carrito de compras:
    El CartContext almacena el estado del carrito, mostrado en el componente Cart. Al confirmar una compra se añade a Firestore

Experiencia de usuario:
    La sección de "Selecciones" actua como ejemplo de renderizado condicional donde, al no existir camisetas con la categoría adecuada, no renderiza ningún Item y solo muestra un mensaje predefinido "Recibiremos productos de ésta categoría proximamente."
    De la misma forma, de no haber stock de un producto, por ejemplo, la camiseta del Inter de Miami (se puede encontrar en otros), se muestra un mensaje que indica que no hay stock, y los controles de selección no se muestran. Lo mismo ocurre si no hay items en el Cart, ocultando el widget y los controles del Cart (de haberlo vaciado estando en la ruta /cart)
    Le es imposible al usuario solicitar más productos de los que hay en stock, ya que los controles de selección se bloquean al superar la cantidad de stock en el carrito (teniendo como referencia la cantidad de stock NO agregada). Por ejemplo, hay 20 camisetas en stock de Juventus. Si el usuario ingresa 15, ahora el máximo a lo que llega Itemcount es 5. Un cartel informa la cantidad que hay en stock. Al confirmar la compra se solicita nombre, apellido y tarjeta de crédito y se muestra una lista de los productos comprados junto al id de compra que se carga a Firestore. 