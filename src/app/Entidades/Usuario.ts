export class Usuario {

    name : string ="";
    pass : string = "";

    Validar(){
    if(this.name == "mariano" && this.pass == "1234")
    {
        alert("login ok");
    }
    else{
        alert("Error");
    }
}
}