// arrow function
const message = () => {
  // question
  const question = "Name : ";
  const question = "Age : ";
  const question = "Status : ";
  const question = "Major : ";
  const question = "Faculty : ";
  const question = "Address : ";
  const question = "Interest : ";
  // respons
  const respons = "Bill Elan Samuel Manueke";
  const respons = " 23 Years old";
  const respons = " Single";
  const respons = " Information Systems";
  const respons = " Computer Science";
  const respons = " Sulawesi Utara, Manado, Paaldua";
  const respons = " Automotive, Badminton";

  // gunakan backtics (`)
  return `
        <h2>${question}</h2>
        <hr />
        <ul>
            <li><strong>Jawaban :</strong>${respons}</li>
        </ul>
    `;
};

//export
export default message;
