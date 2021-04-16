
exports.homeGet = async (req, res) => {
      const marque = await querysql('SELECT name from marque')

      res.render('home', {marque});
   };