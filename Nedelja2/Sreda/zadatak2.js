let CenaProizvoda = 670
let Budzet = 1200

if (Budzet < CenaProizvoda){
    console.log("Nemate dovoljno novca","Trenutno stanje:",Budzet)
}
else {
    console.log("Uspesno ste kupili proizvod","Trenutno stanje:",Budzet-CenaProizvoda)
}