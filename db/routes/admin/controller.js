const db = require("../../models")


const {Admin} = db

module.exports = {
  //create
  addAdmin: (req, res) => {
    Admin.create(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  },
  getAll: (req, res) => {
    Admin.findAll({
      include:[{
        model:db.blog
      }]
    })
      .then(result => {
        res.send(result);
      })
      //=> {
      // res.send(result.map(item => {
      //     return {
      //       name: item.name.toUpperCase()
      // }}))
      .catch(error => res.send(error));
  },
  updateAdmin: (req, res) => {
    Admin.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  },
  deleteAdmin: (req, res) => {
    Admin.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.status(200).send({ message: "your data is succes deleted" });
      })
      .catch(error => res.send(error));
  },
  getAdmin: (req, res) => {
    Admin.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  }
};
