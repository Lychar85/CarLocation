exports.loginGet = async (req, res) => {
   const marque = await querysql('SELECT ?? FROM marque',
      ["marque_name"])

   res.render('./user/login', {
      marque
   });
};

exports.loginpost = async (req, res) => {
   const {
      email,
      password
   } = req.body

}









exports.registerGet = async (req, res) => {
   res.render('./user/register');
};