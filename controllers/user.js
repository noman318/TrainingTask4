const fs = require("fs");
const express = require("express");

const registration = (req, res) => {
  let { name, uname, email, pass, conpass } = req.body;
  if (fs.existsSync(`./users/${email}.txt`)) {
    res.render("register", { errMsg: "Email already registered" });
  } else {
    fs.writeFile(
      `./users/${email}.txt`,
      `${name}\n${email}\n${uname}\n${pass}\n${conpass}`,
      (err) => {
        if (err) {
          res.render("register", { errMsg: "something went wrong" });
        } else {
          res.render("register", { succMsg: "Regsiterd Sucessfully" });
        }
      }
    );
  }
};

module.exports = registration;
