const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandConroller");
const checkRole = require("../middleware/chekRoleMiddleware");

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.getAll);
// router.delete('/',)

module.exports = router;
