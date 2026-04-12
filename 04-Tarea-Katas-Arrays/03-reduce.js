/* ==========================================================================
   03 — Katas de .reduce() | 10 Katas de Acumulación
   Completá cada función usando OBLIGATORIAMENTE .reduce().
   ⚠️  NO uses bucles for/while ni .forEach().
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — La Caja Registradora
   Dado un array de números (precios), retorná la suma total.
   Ej: [10, 20, 30] → 60
-------------------------------------------------------------------------- */
function sumarTotal(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.reduce((acc, item) => acc + item,0);
}

/* --------------------------------------------------------------------------
   KATA 2 — El Producto
   Dado un array de números, retorná la multiplicación de todos entre sí.
   Ej: [2, 3, 4] → 24
-------------------------------------------------------------------------- */
function multiplicarTodo(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.reduce((acc, item) => acc * item,1);
}

/* --------------------------------------------------------------------------
   KATA 3 — El Mayor
   Dado un array de números, retorná el valor máximo usando .reduce().
   (No vale Math.max con spread)
   Ej: [3, 7, 1, 9, 4] → 9
-------------------------------------------------------------------------- */
function encontrarMaximo(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.reduce((acc, item) => {
    return acc > item ? acc : item;
  },numeros[0]);
}

/* --------------------------------------------------------------------------
   KATA 4 — Contar Ocurrencias
   Dado un array de strings, retorná un objeto que cuente cuántas veces
   aparece cada string.
   Ej: ['a','b','a','c','b','a'] → { a: 3, b: 2, c: 1 }
-------------------------------------------------------------------------- */
function contarOcurrencias(arr) {
  // TU CÓDIGO AQUÍ 👇
  return arr.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  },{})
}

/* --------------------------------------------------------------------------
   KATA 5 — Aplanar Array (flatten)
   Dado un array de arrays, retorná todos los elementos en un array plano.
   Ej: [[1,2],[3,4],[5]] → [1, 2, 3, 4, 5]
-------------------------------------------------------------------------- */
function aplanar(arrayDeArrays) {
  // TU CÓDIGO AQUÍ 👇
  return arrayDeArrays.reduce((arr, item) => arr.concat(item) ,[]);
};

/* --------------------------------------------------------------------------
   KATA 6 — Total del Carrito con Objetos
   Dado un array de objetos { nombre, precio, cantidad }, retorná el importe
   total sumando precio * cantidad de cada item.
   Ej: [{nombre:'TV',precio:500,cantidad:2}] → 1000
-------------------------------------------------------------------------- */
function totalCarrito(items) {
  // TU CÓDIGO AQUÍ 👇
  return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
};

/* --------------------------------------------------------------------------
   KATA 7 — Agrupar por Categoría
   Dado un array de objetos { nombre, categoria }, retorná un objeto donde
   cada clave es una categoría y su valor es un array con los nombres.
   Ej: [{nombre:'Manzana',categoria:'fruta'},{nombre:'TV',categoria:'electro'}]
       → { fruta: ['Manzana'], electro: ['TV'] }
-------------------------------------------------------------------------- */
function agruparPorCategoria(productos) {
  // TU CÓDIGO AQUÍ 👇
  return productos.reduce((acc, item) => {
    if (!acc[item.categoria]) {
      acc[item.categoria]= [];
    }
    acc[item.categoria].push(item.nombre);
    return acc;
  }, {})
}

/* --------------------------------------------------------------------------
   KATA 8 — Promedio
   Dado un array de números, retorná el promedio (media aritmética).
   Redondeá a 2 decimales con Math.round(n * 100) / 100.
   Ej: [10, 20, 30] → 20
-------------------------------------------------------------------------- */
function promedio(numeros) {
  // TU CÓDIGO AQUÍ 👇
  const total = numeros.reduce((acc, n) => acc + n, 0);
  return Math.round((total / numeros.length) * 100) / 100;
}

/* --------------------------------------------------------------------------
   KATA 9 — Construir String desde Array
   Dado un array de palabras, construí una oración uniéndolas con espacio
   usando reduce (sin usar .join()).
   Ej: ['Hola','Mundo','JS'] → 'Hola Mundo JS'
-------------------------------------------------------------------------- */
function construirOracion(palabras) {
  // TU CÓDIGO AQUÍ 👇
  return palabras.reduce((acc, palabra) => {
  return acc ? acc + ' ' + palabra : palabra;
}, '');
}

/* --------------------------------------------------------------------------
   KATA 10 — Balance de Cuenta
   Dado un array de transacciones { tipo: 'ingreso'|'egreso', monto },
   calculá el saldo final. Los ingresos suman, los egresos restan.
   Ej: [{tipo:'ingreso',monto:1000},{tipo:'egreso',monto:300}] → 700
-------------------------------------------------------------------------- */
function calcularBalance(transacciones) {
  // TU CÓDIGO AQUÍ 👇
  return transacciones.reduce((acc, t) => {
  return t.tipo === 'ingreso'
    ? acc + t.monto
    : acc - t.monto;
}, 0);
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  sumarTotal,
  multiplicarTodo,
  encontrarMaximo,
  contarOcurrencias,
  aplanar,
  totalCarrito,
  agruparPorCategoria,
  promedio,
  construirOracion,
  calcularBalance,
};
