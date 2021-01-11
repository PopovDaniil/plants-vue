import firebase from "firebase/app";
import "firebase/database";
import { ref } from "vue";
const firebaseConfig = {
    apiKey: "AIzaSyDE0eRVuFlk7XAo7ViY3mvT-XZ07ybb3Aw",
    authDomain: "plants-vue.firebaseapp.com",
    databaseURL: "https://plants-vue-default-rtdb.firebaseio.com",
    projectId: "plants-vue",
    storageBucket: "plants-vue.appspot.com",
    messagingSenderId: "869916650932",
    appId: "1:869916650932:web:ef1c9422710b24ed9c16e1",
    measurementId: "G-910RHLBGR2",
};
const db = firebase.initializeApp(firebaseConfig).database();

const getItem = latin => new Promise((resolve) => {
    if (latin) {
        db.ref("catalog").equalTo(latin, "latinName").on("value", snapshot => resolve(snapshot.val()));
    } else {
        db.ref("catalog").on("value", snapshot => resolve(snapshot.val()))
    }
})
const getPage = url => new Promise(resolve => {
    db.ref("pages").on("value", snapshot =>
        resolve(snapshot.val().find(page =>
            page.url == url
    )))
})

export { ref, getItem, getPage }