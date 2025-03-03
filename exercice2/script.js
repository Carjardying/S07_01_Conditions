let chauffeur1 = "Mathieu a " + 22;
let chauffeur2 = "Léa a " + 15;
let chauffeur3 = "Jean a " + 17;
let legalAge = 17;

function isLegal (name,num){
if(name >= num){
    console.log('${name} ans. il·elle est autorisé·e à conduire' );
}else {
    console.log(name + " ans. il·elle n'est pas autorisé·e à conduire");
}
};
isLegal(chauffeur1,legalAge);
isLegal(chauffeur2,legalAge);
isLegal(chauffeur3,legalAge);