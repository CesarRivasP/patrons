// PointFree - Programacion Tacita

const f = (route, callback) => {
  const result = computacionPesada();

  callback(result);
}

const handleResult = (result) => {
  console.log(result);
};

f('/users', handleResult);