const createRoutes = (app) => {
  app.get("/", getAnnonce);

  app.get("/:id", getAnnonceByID);

  app.post("/", (req, res, next) => createAnnonce(req, res, next));

  app.put("/:id", updateAnnonce);

  app.delete("/:id", deleteAnnonce);
};

module.exports = createRoutes;
