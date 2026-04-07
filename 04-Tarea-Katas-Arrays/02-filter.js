/* ==========================================================================
   02 — Katas de .filter() | 10 Katas de Filtrado
   Completá cada función usando OBLIGATORIAMENTE .filter().
   ⚠️  NO uses bucles for/while — retorná siempre un array nuevo.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — Solo Adultos
   Dado un array de edades, retorná solo las que sean >= 18.
   Ej: [15, 22, 12, 30] → [22, 30]
-------------------------------------------------------------------------- */
function soloAdultos(edades) {
  // TU CÓDIGO AQUÍ 👇
  return edades.filter(e => e >= 18);
};

/* --------------------------------------------------------------------------
   KATA 2 — Palabras Largas
   Dado un array de strings, retorná solo los que tengan más de 5 caracteres.
   Ej: ['hola','javascript','css'] → ['javascript']
-------------------------------------------------------------------------- */
function palabrasLargas(palabras) {
  // TU CÓDIGO AQUÍ 👇

  return palabras.filter((p) => p.length > 5);
};
  


/* --------------------------------------------------------------------------
   KATA 3 — Productos en Stock
   Dado un array de objetos { nombre, enStock }, retorná solo los disponibles.
   Ej: [{nombre:'TV',enStock:true},{nombre:'Radio',enStock:false}] → [{nombre:'TV',enStock:true}]
-------------------------------------------------------------------------- */
function enStock(productos) {
  // TU CÓDIGO AQUÍ 👇
  return productos.filter(p => p.enStock === true).map(p => ({nombre: p.nombre, enStock: p.enStock}));
};

/* --------------------------------------------------------------------------
   KATA 4 — Sin Negativos
   Dado un array de números, retorná solo los mayores o iguales a 0.
   Ej: [-3, 0, 5, -1, 8] → [0, 5, 8]
-------------------------------------------------------------------------- */
function sinNegativos(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.filter(n => n>= 0);

};

/* --------------------------------------------------------------------------
   KATA 5 — Emails Válidos
   Dado un array de strings, retorná solo los que contengan '@' y '.'.
   Ej: ['test@mail.com','noesmail','otro@x.co'] → ['test@mail.com','otro@x.co']
-------------------------------------------------------------------------- */
function emailsValidos(emails) {
  // TU CÓDIGO AQUÍ 👇
  return emails.filter(e => e.includes('@') && e.includes('.'));
};

/* --------------------------------------------------------------------------
   KATA 6 — Números Pares
   Dado un array de números, retorná solo los pares.
   Ej: [1, 2, 3, 4, 5, 6] → [2, 4, 6]
-------------------------------------------------------------------------- */
function solosPares(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.filter(n => n % 2 === 0);
};

/* --------------------------------------------------------------------------
   KATA 7 — Usuarios Activos
   Dado un array de objetos { nombre, activo }, retorná solo los activos.
   Ej: [{nombre:'Ana',activo:true},{nombre:'Luis',activo:false}] → [{nombre:'Ana',activo:true}]
-------------------------------------------------------------------------- */
function usuariosActivos(usuarios) {
  // TU CÓDIGO AQUÍ 👇
  return usuarios.filter(u => u.activo === true).map((u) => ({nombre: u.nombre, activo: u.activo}));
};

/* --------------------------------------------------------------------------
   KATA 8 — Eliminar Falsy
   Dado un array mixto, retorná solo los valores "truthy"
   (descarta null, undefined, 0, '', false, NaN).
   Ej: [0, 'hola', null, 42, false, 'js'] → ['hola', 42, 'js']
-------------------------------------------------------------------------- */
function eliminarFalsy(arr) {
  // TU CÓDIGO AQUÍ 👇
  return arr.filter(Boolean);
};

/* --------------------------------------------------------------------------
   KATA 9 — Rango de Precios
   Dado un array de precios y un rango { min, max }, retorná los precios
   que estén dentro del rango (inclusive).
   Ej: ([50,100,200,300], {min:80,max:250}) → [100, 200]
-------------------------------------------------------------------------- */
function filtroPrecio(precios, rango) {
  // TU CÓDIGO AQUÍ 👇

  return precios.filter((p) => p >= rango.min && p <= rango.max);
};

/* --------------------------------------------------------------------------
   KATA 10 — Únicos (sin duplicados)
   Dado un array de números, retorná un array sin valores repetidos
   manteniendo el orden de aparición. Usá .filter() con indexOf.
   Ej: [1, 2, 2, 3, 1, 4] → [1, 2, 3, 4]
-------------------------------------------------------------------------- */
function sinDuplicados(numeros) {
  // TU CÓDIGO AQUÍ 👇
  return numeros.filter((n, i, arr) => arr.indexOf(n) === i);};

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  soloAdultos,
  palabrasLargas,
  enStock,
  sinNegativos,
  emailsValidos,
  solosPares,
  usuariosActivos,
  eliminarFalsy,
  filtroPrecio,
  sinDuplicados,
};
