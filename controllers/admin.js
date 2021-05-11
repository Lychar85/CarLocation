/*page accueil*/
exports.getadmin = async (req, res) => {

    res.render('admin_home')

}

/*page ajout voiture*/
exports.getaddcar = async (req, res) => {

    const marque = await querysql('SELECT ??, ?? FROM marque;',
        ["marque_name", "marque_id"])

    const modele = await querysql("SELECT ??,??,??,??,??,??,??,??,??,??,??,??,??,?? from modele",
    ["name", "date_lancement", "serie", "carroserie", "energie", "boite", "poids", "longueur", "largeur", "portes", "motorisation", "finition", "image", "marque_id"])

    const car = await querysql('SELECT * FROM car INNER JOIN modele ON car.modele_id = modele.modele_id INNER JOIN marque ON modele.marque_id = marque.marque_id')
    res.render('ajout_voiture', {car, marque, modele})
}


exports.postcar = async (req,res) =>{
const { name, date_lancement, serie, carroserie, energie, boite, poids, longueur, largeur, portes, motorisation, finition, image, marque_id } = req.body

    try{
        await querysql("INSERT INTO modele (name, date_lancement, serie, carroserie, energie, boite, poids, longueur, largeur, portes, motorisation, finition, image, marque_id) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [name, date_lancement, serie, carroserie, energie, boite, poids, longueur, largeur, portes, motorisation, finition, image, marque_id],
    
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/admin/addcar')
            }

        }
        )
    }

    catch (err) {
        res.status(400).json({
            message: err
        })
    }


}