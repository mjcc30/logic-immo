
const getAnnonce = (req, res, next) => {
  Annonce.find({})
    .then((annonce) => {
      res.send(annonce);
    })
    .catch(next);
};

const getAnnonceByID = (req, res, next) => {
  Annonce.findById(req.params.id)
    .then((annonce) => {
      res.send(annonce);
    })
    .catch(next);
};

const createAnnonce = (req, res, next) => {
  const newAnnonce = req.body;

  console.log(newAnnonce);

  Annonce.create(newAnnonce)
    .then((annonce) => {
      res.send(annonce);
    })
    .catch(next);
};

const deleteAnnonce = (req, res, next) => {
  const id = req.params.id;

  Annonce.findByIdAndDelete({ _id: id })
    .then((annonce) => {
      res.send(annonce);
    })
    .catch(next);
};

const updateAnnonce = (req, res, next) => {
  const { id } = req.params;

  Annonce.findByIdAndUpdate({ _id: id }, req.body)
    .then(() => {
      Annonce.findOne({ _id: id }).then((newAnnonce) => {
        res.send(newAnnonce);
      });
    })
    .catch(next);
};

module.exports = { getAnnonce, getAnnonceByID, createAnnonce, deleteAnnonce, updateAnnonce };
