

class myclass {
  mydato = null;
  testThis() {
    let dati = [{}, {}, {}]
    let mydato = dati[0] as any;
    let $this = this;
    dati.forEach(i => {
      if (mydato == i) console.log('vero')
    })

  }

}

