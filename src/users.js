//make id change to index
function createUser(form) {
  const user = {};
  user.id = form.id;
  user.username = form.username;
  user.password = form.password;
  user.bio = form.bio;
  user.fname = form.fname;
  user.lname = form.lname;
  user.email = form.email;
  user.country = form.country;
  user.address = form.address;
  user.city = form.city;
  user.state = form.state;
  user.zip = form.zip;

  return user;
}

export default createUser;
