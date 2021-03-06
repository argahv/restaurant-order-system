const roles = ['user', 'admin', 'super-admin'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[1], ['getUsers', 'manageUsers', 'manageMenuItems']);
roleRights.set(roles[2], ['getUsers', 'manageUsers', 'manageSite', 'manageMenuItems']);

module.exports = {
  roles,
  roleRights,
};
