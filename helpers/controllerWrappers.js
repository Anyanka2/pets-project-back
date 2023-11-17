const controllerWrapper = (controller) => {
  const wrap = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return wrap;
};

module.exports = controllerWrapper;
