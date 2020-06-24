var information = {
  name: "Sushmit Rajaure",
  address: "Kuleshwor",
  emails: "sushmit.rajaure@gmail.com",
  interests: "Football, Games",
  education: [
    { name: "Gyankunj School", enrolledDate: "2069 B.S" },
    { name: "Kathmandu Model College", enrolledDate: "2012 A.D" },
    { name: "Pulchowk Engineering College", enrolledDate: "2019 A.D" },
  ],
};

information.education.forEach(function (institution, value = 0) {
  console.log(
    "Name:",
    institution.name,
    ",",
    "Date:",
    institution.enrolledDate
  );
});
