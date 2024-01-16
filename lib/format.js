module.exports = {
  amount,
  date,
  description,
  distance
};

function pad(n) {
  return n < 10 ? '0' + n : n;
}

function amount(amt, precision, currency) {
  precision = precision || 0;
  const result = amt.toFixed(precision);
  if (currency) {
    return `${result} ${currency}`;
  }
  return result;
}

function date(d) {
  return [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()].map(pad).join('-');
}

function description() {
  return Array.prototype.reduce.call(arguments, (r, v) => {
    if (v) {
      if (Array.isArray(v)) {
        r.push(...v);
      }
      else {
        r.push(v);
      }
    }
    return r;
  }, []).join(' / ');
}

function distance(dist, precision, units, withUnits) {
  const div = units === 'km' ? 1000 : 1609.344;
  precision = precision || 0;
  const result = (dist / div).toFixed(precision);
  if (withUnits) {
    return `${result} ${units}`;
  }
  return result;
}
