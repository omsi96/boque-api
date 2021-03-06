const express = require("express");

const defaultOptions = {
  listMW: [],
  createMW: [],
  updateMW: [],
  destroyMW: [],
};
class CRUDRouter extends express.Router {
  constructor(crudController, options = defaultOptions) {
    super();
    function next(req, res, next) {
      console.log("Next");
      next();
    }

    this.get(
      "/",
      options?.listMW ?? next,
      (req, res, next) => {
        console.log("Hello,?");
        next();
      },
      crudController.list
    );
    this.post("/", options?.createMW ?? next, crudController.create);
    this.put("/", options?.updateMW ?? next, crudController.update);
    this.delete("/", options?.destroyMW ?? next, crudController.destory);
  }
}
module.exports = CRUDRouter;
