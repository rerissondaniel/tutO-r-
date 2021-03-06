'use strict';
import _ from "lodash";

const authObj = firebase.auth();

let userInfo = {};

export const login = function login(email, password, callback) {
  authObj.signInWithEmailAndPassword(email, password).then(function success(user) {
    configUser(user);
    callback(user);
  }).catch(function error(error) {
    console.error(error);
  });
};

export const create = function create(email, password, callback) {
  authObj.createUserWithEmailAndPassword(email, password).then(function success(user) {
    configUser(user);
    callback(user);
  }).catch(function error(error) {
    console.error(error);
  });
};

export const logout = function logout() {
  authObj.signOut().then(() => {
    delete window.localStorage.userInfo;
  });
};

export const getCurrentUser = function getCurrentUser() {
  return authObj.currentUser;
};

export const configUser = function configUser(user) {
  _.extend(userInfo, user);
  saveUser();
};

function saveUser() {
  window.localStorage.userInfo = JSON.stringify(userInfo);
}
