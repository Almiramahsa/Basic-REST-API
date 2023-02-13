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
const createNewUser = async (req, res) => {
  console.log(req.body);
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.json({
      message: 'CREATE new user success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateDataUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateDataUser(body, id);
    res.json({
      message: 'UPDATE User Success',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteDataUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteDataUser(id);
    res.json({
      message: 'DELETE user success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateDataUser,
  deleteDataUser,
};
