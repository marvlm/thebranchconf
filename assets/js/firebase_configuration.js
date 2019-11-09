// Initialize Firebase
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var config = {
    apiKey: "AIzaSyAzJ_jLgfQywn9APU2vSAO35Mr8VHbRpS0",
    authDomain: "the-branch-86e50.firebaseapp.com",
    databaseURL: "https://the-branch-86e50.firebaseio.com",
    projectId: "the-branch-86e50",
    storageBucket: "the-branch-86e50.appspot.com",
    messagingSenderId: "1017773154037",
    appId: "1:1017773154037:web:1b6aaa13039dc24853afbc",
    measurementId: "G-HKMWHJBC71"
};
firebase.initializeApp(config);
var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

$(document).ready(function () {

    $('#notifs-form-btn').click(function (e) {
        var is_present = false;
        email = $('#notifs-form-input').val();
        if (validateEmail(email)) {
            db.collection('Emails').get().then(function (qs) {
                qs.forEach(function (element) {
                    if (element.data()['ID'] == email) {
                        is_present = true;
                    }
                });

                if (is_present == false) {
                    db.collection("Emails").add({
                        'ID': email,
                    })
                        .then(function (docRef) {
                            console.log("Document written with ID: ", docRef.id);
                            $("#notifs-form-btn").text("Notified!");
                            $("#notifs-form").css("display","none");
                            $("h4.notified").text("Gracias por tu interés. Pronto te brindamos más información acerca de nosotros!");
                            $(location).attr('href', '/gracias')
                        })
                        .catch(function (error) {
                            console.error("Error adding document: ", error);
                        });
                }
            });

        }
        else {
            //alert('Invalid Email');
            $("label.invalid").text("El email no tiene el formato correcto.");
        }
    });

});