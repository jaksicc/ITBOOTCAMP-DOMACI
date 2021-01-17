class Korisnik {
    ime
    sifra
    korpa

    constructor(ime,sifra){
        this.ime = ime
        this.sifra = sifra
        this.korpa = []
    }

    dodajUkorpu (obj){
        this.korpa.push(obj)
    }

    obrisiItem (id){
        var a = this.korpa.filter(el => {el.id != id})
        return this.korpa.splice(this.korpa.indexOf(id),1)
    }
    
}

class Admin extends Korisnik {
    constructor(ime,sifra){
        super(ime,sifra)
    }
    dodajProizvod(obj){
        
    }

}


class Proizvod {
    static count = 0
    naziv
    cena
    dostupnaKolicina
    id

    constructor(naziv,cena,dostupnaKolicina){
        this.naziv = naziv
        this.cena = cena
        this.dostupnaKolicina = dostupnaKolicina
        this.id = Proizvod.count ++
    }
    izmeniKolicinu (num){
        this.dostupnaKolicina = this.dostupnaKolicina - num
    }

}

class PrehrambeniProizvod extends Proizvod {
    rokTrajanja

    constructor (naziv,cena,dostupnaKolicina,rokTrajanja,id){
        super(naziv,cena,dostupnaKolicina,id)
        this.rokTrajanja = rokTrajanja

    }
}

class BelaTehnika extends Proizvod {
    garancija

    constructor (naziv,cena,dostupnaKolicina,garancija,id){
        super(naziv,cena,dostupnaKolicina,id)
        this.garancija = garancija
    }

    
}


export default {
    Korisnik,
    Admin,
    Proizvod,
    PrehrambeniProizvod,
    BelaTehnika
}