const getAllUsers = (req, res) => {
  const data = {
    id: '1',
    name: 'Almira Mahsa',
    email: 'almiramahsa9@gmail.com',
    address: 'Palu, Sulawesi Tengah',
  };

  res.json({
    message: 'GET all users success',
    data: data,
  });
};
const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'CREATE new user success',
    data: req.body,
  });
};

const updateDataUser = (req, res) => {
  const { idUser } = req.params;
  console.log('idUser :', idUser);
  res.json({
    message: 'UPDATE User Success',
    data: req.body,
  });
};

const deleteDataUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: 'DELETE user success',
    data: {
      id: idUser,
      name: 'Almira Mahsa',
      email: 'almiramahsa9@gmai.com',
      address: 'Palu, Sulawesi Tengah',
    },
  });
};
module.exports = {
  getAllUsers,
  createNewUser,
  updateDataUser,
  deleteDataUser,
};
