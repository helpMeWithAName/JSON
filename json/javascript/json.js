// json er et text format som er brukt til å lagre og transportere data, vi bruker json fordi det er lett å lese for menesker og sende det mellom pc-er. 
// man skriver json som et objekt i javascript som dette her:


  let JSonExample = {"learere":[
    {"fag":"Naturfag","learer":"Partima"},
    {"fag":"Medie","learer":"Marthe"},
    {"fag":"It","learer":"Joakim"},
    {"fag":"HelseOgMat","learer":"Ida"},
    {"fag":"Engelsk","learer":"Walter"}
  ]}
  console.log(JSonExample.learere[1].learer)


const jsonString = `[{"fag":"Naturfag","learer":"Partima"},{"fag":"Medie","learer":"Marthe"},  {"fag":"It","learer":"Joakim"}, {"fag":"HelseOgMat","learer":"Ida"},{"fag":"Engelsk","learer":"Walter"}]`
  const obj = JSON.parse(jsonString);
//   .parse gjør en vanlig string som jsonString om til et javascript objekt uten å måtte skrive det som JSonExample    
  console.log(obj[3].fag);
  console.log(obj[4].learer);