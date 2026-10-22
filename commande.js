const nomClient = "Awa";
const nomProduit = "Ordinateur";
const prixunitaire = 250000;
const quantite = 2;
const fraislivraison = 50000;
const TVA = 18;
const montantproduits = prixunitaire*quantite
const montantTVA = montantproduits*TVA /100
const montantTTC = montantproduits+montantTVA
const montantfinal =  montantTTC+fraislivraison
const prixmoyenTTC = montantTTC/quantite
console.log("====RECU DE COMMANDE====");
console.log("Produit:", nomProduit)
console.log("Prix unitaire:", prixunitaire)
console.log("Quantité:", quantite)
console.log("")
console.log("Montant des produits:", montantproduits)
console.log("TVA(18%):", montantTVA, "FCFA")
console.log("Montant TTC:", montantTTC, "FCFA")
console.log("Livraison:", fraislivraison, "FCFA")
console.log("TOTAL A PAYER:", montantfinal, "FCFA")
console.log("")
console.log("Prix moyen TTC par produit :", prixmoyenTTC, "FCFA")