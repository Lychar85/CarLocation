
exports.homeGet = async (req, res) => {
      const car = await querysql('SELECT car_id, name FROM car INNER JOIN modele ON car.modele_id = modele.modele_id INNER JOIN marque ON modele.marque_id = marque.marque_id;');
      const marque = await querysql('SELECT marque_name FROM marque;')
      res.render('home', {car, marque} );
   };