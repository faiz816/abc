class persone{

    constructor(name,age){
        this.name = name
        this.age = age
    }

    data(){
        console.log("my name is" + this.name)
        console.log("my age is" + this.age)

    }

}

const persone1 = new persone("Faiz", 18)
persone1.data()   