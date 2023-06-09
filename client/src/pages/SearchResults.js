import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import userSchema from "../server/models/User";
// import developerSchema from "../server/models/Developer";
// import recruiterSchema from "../server/models/Recruiter";
// import jobSchema from "../server/models/Job";

export default function SearchResults() {
  const { word } = useParams();

  const databaseSample = [
    {
      title: "junior developer",
      company: "Dude Inc",
      description: "assist sr dev",
      salary: 50000,
      applicantNumber: 10,
    },
    {
      title: "jr developer",
      company: "Kramerica Industries",
      description: "build web apps",
      salary: 60000,
      applicantNumber: 5,
    },
    {
      title: "backend-developer",
      company: "dudette inc",
    },
    {
      firstName: "J",
      lastName: "Peterman",
      company: "Robert Half",
      email: "JPeterman@roberthalf.com",
    },
    {
      firstName: "Art",
      lastName: "Vandelay",
      githubUrl: "github.com/artvandelay",
      email: "art@bootcampspot.com",
      skills: "full stack dev",
    }
  ];
// TODO - create virtuals for dev/recruiter
// TODO - add regex for jr, sr, junior, senior, dev, development, any other common searches
  function filterSearch() {
    // takes string and splits it into separate words, removes spaces/blanks w/ filter(boolean)
    const searchWords = word.split(" ").filter(Boolean);
    // regex to match variations of jr, sr, senior, junior
    const regexes = searchWords.map((word) => {
      var regexFormula;
      if (word === "jr" || word === "junior") {
        regexFormula = "(jr|junior)";
      } else if (word === "sr" || word === "senior") {
        regexFormula = "(sr|senior)";
      } else if (word === "dev" || word === "developer") {
        regexFormula = "(dev|developer)";
      } else {
        regexFormula = word;
      }
      // Makes the search case-insensitive
      return new RegExp(regexFormula, "i");
    });

    

    const data = databaseSample.filter((item) =>
      regexes.some((regex) => {
        const searchFields = ['title', 'firstName', 'lastName', 'company'];
        return searchFields.some((field) => regex.test(item[field]));
      })
    );

    if (data.length > 0) {
      return data.map((content, index) => {
        if (content.title) {
          return (
            <Card
              style={{ width: "18rem", marginBottom: "10px", marginTop: "10px" }}
              key={index}
            >
              <Card.Body>
                <Card.Title>{content.title}</Card.Title>
                <Card.Text>Company: {content.company}</Card.Text>
                <Card.Text>Description: {content.description}</Card.Text>
                <Card.Text>Salary: {content.salary}</Card.Text>
                <Card.Text>
                  Number of Applicants: {content.applicantNumber}
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          );
        } else if (content.company) {
          return (
            <Card
              style={{ width: "18rem", marginBottom: "10px", marginTop: "10px" }}
              key={index}
            >
              <Card.Body>
                <Card.Title>{content.firstName} {content.lastName}</Card.Title>
                <Card.Text>Company: {content.company}</Card.Text>
                <Card.Text>Email: {content.email}</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          );
        } else if (content.githubUrl) {
          return (
            <Card
              style={{ width: "18rem", marginBottom: "10px", marginTop: "10px" }}
              key={index}
            >
              <Card.Body>
                <Card.Title>{content.firstName} {content.lastName}</Card.Title>
                <Card.Text>GitHub: {content.githubUrl}</Card.Text>
                <Card.Text>Email: {content.email}</Card.Text>
                <Card.Text>Skills: {content.skills}</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          );
        } else {
          return null;
        }
      });
    } else {
      return <h1>No search results found</h1>;
    }
  }

  return <>{filterSearch()}</>;
}
