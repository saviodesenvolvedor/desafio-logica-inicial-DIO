let nomeHeroi = "Super Medroso"
let xp = -200

switch (true) {
    case (xp === 1000):
        nivel = "Ferro"
        console.log("Se XP for menor do que 1.000 = Ferro")
        break;
    case (xp >= 1001 && xp <= 2000):
        nivel = "Bronze"
        console.log("Se XP for entre 1.001 e 2.000 = Bronze")
        break;
    case(xp >= 2001 && xp <= 5000):
        nivel = "Prata"
        console.log("Se XP for entre 2.001 e 5.000 = Prata")
        break;
    case(xp >= 5001 && xp <= 7000):
        nivel = "Ouro"
        console.log("Se XP for entre 5.001 e 7.000 = Ouro")
        break;
    case(xp >= 7001 && xp <= 8000):
        nivel = "Platina"
        console.log("Se XP for entre 7.001 e 8.000 = Platina")
        break; 
    case(xp >= 8001 && xp <= 9000):
        nivel = "Ascendente"
        console.log("Se XP for entre 8.001 e 9.000 = Ascendente")
        break; 
    case(xp >= 9001 && xp <= 10000):
        nivel = "Imortal"
        console.log("Se XP for entre 9.001 e 10.000 = Imortal")
        break;  
    case(xp >= 10001):
        nivel = "Radiante"
        console.log("Se XP for maior ou igual a 10.001 = Radiante")
        break;
    default:
        console.log("Você não tem XP suficiente para entrar no rank!")
    break;
}


if(xp >= 1000){
    console.log("O Herói de nome: " + nomeHeroi + " está no nível de " + nivel)
}else{
    falta = xp -= 1000
    console.log("O Herói de nome: " + nomeHeroi + " não tem XP suficiente, falta " + falta + " para entrar no ranque")
}

