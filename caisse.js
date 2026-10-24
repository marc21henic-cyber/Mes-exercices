const budgetclient = 20000
const prixcahier = 1500
let qtecahier = 20
const prixstylo = 500
let qtestylo = 8
const montantcahier = prixcahier*qtecahier
const montantstylo = prixstylo*qtestylo
const montanttotat = montantcahier+montantstylo
console.log("==== CAISSE ====")
console.log("Cahier :", montantcahier, "FCFA")
console.log("Stylos :", montantstylo, "FCFA")
console.log("Total :", montanttotat, "FCFA")
console.log("Budget :", budgetclient, "FCFA")
if ( montanttotat <= budgetclient){
console.log("Budget suffisant")
} else{
    console.log("Budget insuffisant")
}
console.log("")
for (let i = 1; i <= 5; i = 1+i) {
   console.log("Achat numero", i)
}