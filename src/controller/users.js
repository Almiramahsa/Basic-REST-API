const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: 'GET all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'server error',
      serverMessage: error,
    });
  }
};
const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'CREATE new user success',
    data: req.body,
  });
};

const updateDataUser = (req, res) => {
  const { id } = req.params;
  console.log('idUser :', id);
  res.json({
    message: 'UPDATE User Success',
    data: req.body,
  });
};

const deleteDataUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'DELETE user success',
    data: {
      id: id,
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
