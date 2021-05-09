
/*page accueil*/
exports.getadmin = async (req,res) => {
    
    res.render('admin_home')

}

/*page ajout voiture*/
exports.getaddcar = async (req,res) =>{
    const listCar = await querysql('SELECT marque_name, name, finition, motorisation, boite, energie, prix, immatriculation  FROM car INNER JOIN serie ON car.serie_id = serie.serie_id INNER JOIN modele ON serie.modele_id = modele.modele_id INNER JOIN marque ON modele.marque_id = marque.marque_id');
    const marque = await querysql('SELECT marque_name FROM marque;')
    console.log(listCar);
    res.render('ajout_voiture', {car: listCar, marque})
}