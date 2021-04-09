import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC3BKPk8vqPEJyXycXtQZ9FlDWX4U2W_Rs",
    authDomain: "rest-cluster.firebaseapp.com",
    projectId: "rest-cluster",
    storageBucket: "rest-cluster.appspot.com",
    messagingSenderId: "164838810405",
    appId: "1:164838810405:web:9028a2258504f382a5b0cc",
    measurementId: "G-9L6QTDLDBQ"
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics()
export default fire
