import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProductData implements InMemoryDbService {

  createDb() {
    let products = [
      {
        "id": 0,
        "name": "PcCom Bronze SP",
        "price": 631.99,
        "description": "Entra en el mundo Gaming del PC con este equipo de relación calidad/precio inigualable. Con este equipo disfrutarás de los juegos Online de más éxito del momento",
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/34/345854/1903-pccom-bronze-sp-intel-core-i5-9400f-8gb-480gbssd-gtx1050ti.jpg"
      },
      {
        "id": 1,
        "name": "PcCom Basic Home",
        "price": 243.09,
        "description": "Pensado para un uso general en el hogar o en la oficina, el PcCom Basic Home y se presenta como un equipo equilibrado en el que su procesador, su RAM y el generoso SSD de 240GB que permiten trabajar de forma holgada en muy diferentes tareas",
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/26/262837/pccom-basic-home-intel-pentium-g5420-4gb-240gbssd.jpg"
      },
      {
        "id": 2,
        "name": "Lenovo ThinkBook 15 IIL",
        "price": 639.15,
        "description": "El portátil Lenovo ThinkBook de 38,1 cm (15), equipado de Windows 10 Pro y procesador Intel® Core™ de 10.ª generación, combina alto rendimiento con funciones intuitivas que ahorran tiempo",
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/31/311983/1846-lenovo-thinkbook-15-iil-intel-core-i3-1005g1-8gb-256gb-ssd-156.jpg"
      }
    ];
    return { products: products };
  }
}
