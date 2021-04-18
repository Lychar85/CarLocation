
exports.homeGet = async (req, res) => {
      const car = await querysql('SELECT * FROM car INNER JOIN serie ON car.serie_id = serie.serie_id INNER JOIN modele ON serie.modele_id = modele.modele_id INNER JOIN marque ON modele.marque_id = marque.marque_id');
      console.log(car);
      res.render('home', {car});
   };