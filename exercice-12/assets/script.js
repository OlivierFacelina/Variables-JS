// Exo 12
var yearsOld = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
yearsOld.sort();
console.log(yearsOld)
var min = Math.min.apply(null, yearsOld), max = Math.max.apply(null, yearsOld);
console.log(min, max);

// Calcul médiane
function numMedian(a) {
    a = a.slice(0).sort(function(x, y) {
      return x - y;
    });
    var b = (a.length + 1) / 2;
    return (a.length % 2) ? a[b - 1] : (a[b - 1.5] + a[b - 0.5]) / 2;
  }
  var med = numMedian(yearsOld)
  console.log(med)
  
  // Calcul écart type

  let écart = max - min
  console.log(`Ecart : ${écart}`)