function converterParaSegundos(hrs, mins, segs) {
  return hrs * 3600 + mins * 60 + segs;
}

function diferencaEntreHorarios(hrIni, minIni, segIni, hrFim, minFim, segFim) {
  const tempoEmSegsIni = converterParaSegundos(hrIni, minIni, segIni);
  const tempoEmSegsFim = converterParaSegundos(hrFim, minFim, segFim);

  let difTotal = tempoEmSegsFim - tempoEmSegsIni;
  const difEmHrs = Math.floor(difTotal / 3600);

  difTotal = difTotal % 3600;
  const difEmMins = Math.floor(difTotal / 60);

  difTotal = difTotal % 60;
  const difEmSegs = difTotal;

  return `${difEmHrs}h${difEmMins}min${difEmSegs}s`;
}

const parametros = process.argv.slice(2, 8).map(arg => Number(arg));
console.log(diferencaEntreHorarios(...parametros));
