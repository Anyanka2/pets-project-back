const getListContact = async (req, res, next) => {
  const { user } = req;
  const { contacts } = user;
  res.status(200).json({ data: { contacts } });
};
module.exports = getListContact;
