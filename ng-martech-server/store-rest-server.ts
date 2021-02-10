var express = require('express');
const bodyParser = require('body-parser');
const app = express();

class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public image: string,
  ) { }
}

const products: Product[] = [
  new Product(
     0,
    "PcCom Bronze SP",
    631.99,
    "Entra en el mundo Gaming del PC con este equipo de relación calidad/precio inigualable. Con este equipo disfrutarás de los juegos Online de más éxito del momento",
    "https://thumb.pccomponentes.com/w-530-530/articles/34/345854/1903-pccom-bronze-sp-intel-core-i5-9400f-8gb-480gbssd-gtx1050ti.jpg"
  ),
  new Product(
    1,
    "PcCom Basic Home",
    243.09,
    "Pensado para un uso general en el hogar o en la oficina, el PcCom Basic Home y se presenta como un equipo equilibrado en el que su procesador, su RAM y el generoso SSD de 240GB que permiten trabajar de forma holgada en muy diferentes tareas",
    "https://thumb.pccomponentes.com/w-530-530/articles/26/262837/pccom-basic-home-intel-pentium-g5420-4gb-240gbssd.jpg"
  ),
  new Product(
    2,
    "Lenovo ThinkBook 15 IIL",
    639.15,
    "El portátil Lenovo ThinkBook de 38,1 cm (15), equipado de Windows 10 Pro y procesador Intel® Core™ de 10.ª generación, combina alto rendimiento con funciones intuitivas que ahorran tiempo",
    "https://thumb.pccomponentes.com/w-530-530/articles/31/311983/1846-lenovo-thinkbook-15-iil-intel-core-i3-1005g1-8gb-256gb-ssd-156.jpg"
  ),
]


function getProducts(): any[] {
  return products;
}

app.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.post('/products', bodyParser.json(), (req: any, res: any) => {

  let pNew = new Product(
    products.length + 1,
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.image,

  );
  products.push(pNew);
  res.status(200).send({ 
    id: pNew.id,
    title: pNew.name,
    price: pNew.price,
    description: pNew.description,
    image: pNew.image,
   });
 
})

app.get('/', (req: any, res: any) => {
  res.send('The URL of products is http://localhost:8000/products');
});

app.get('/products', (req: any, res: any) => {
  res.json(getProducts());
});


function getProductsById(productId: number): any {
  let p: any;
  p = products.find(p => p.id == productId);
  return p;
}

app.get('/products/:id', (req: any, res: any) => {
  res.json(getProductsById(parseInt(req.params.id)));
});


function updateProductsById(req:any, productId: number): any {
  let p: any;
  p = products.find(p => p.id == productId);
  let index = products.indexOf(p);

  p.name =  req.body.name,
  p.price =  req.body.price,
  p.description =  req.body.description,
  p.image =  req.body.image,

  products[index] = p;
  return p;
}

app.put('/products/:id', function (req:any, res:any) {
  res.json(updateProductsById(req, parseInt(req.params.id)));
  res.send('Got a UPDATE request at /user');
});


function deleteProductsById(productId: number): any {
  let p: any;
  p = products.find(p => p.id == productId);
  let index = products.indexOf(p);
  delete products[index];
  return p;
}

app.delete('/products/:id', function (req:any, res:any) {
  res.json(deleteProductsById(parseInt(req.params.id)));
  res.send('Got a DELETE request at /user');
});



const server = app.listen(8000, "localhost", () => {
  const { address, port } = server.address();

  console.log('Listening on %s %s', address, port);
});




