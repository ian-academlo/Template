// importar los modelos
const Users = require("./users.model");
const Roles = require("./roles.model");
const Answers = require("./answers.model");
const Posts = require("./posts.model");
const Categories = require("./categories.model");

const initModels = () => {
  Users.belongsTo(Roles, { foreignKey: "rolId" });
  Roles.hasMany(Users, { foreignKey: "rolId" });
};

module.exports = initModels;
// Un usuario tine un rol? 1 (belongsTo)
// Un rol lo pueden tener muchos? Muchos (hasMany)
// 1 - M
