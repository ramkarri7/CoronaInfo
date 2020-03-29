document.write("helllllo");
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  const db = firebase.firestore();
  const mypost = db
    .collection("cases")
    .doc("0009bee0-7181-11ea-9c6a-875c186c5b4a");

  mypost.get().then(doc => {
    const data = doc.data();
    // document.write(data.FIPS + "<br>");
    //document.write(data.Lat);
    this.document.getElementById("txtZip").value = data.FIPS;
    this.document.getElementById("txtLong").value = data.Lat;

    alert(data.Lat);
  });
});
