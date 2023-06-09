import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      firstName: "Anthony",
      lastName: "Vaquer",
      company: "Robert Half",
      email: "anthonyv@roberthalf.com",
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
    // takes string and splits it into separate words, removes spaces/blanks
    const searchWords = word.split(" ").filter(Boolean);
    // regex to match variations of jr, sr, senior, junior
    const regexes = searchWords.map((word) => {
      const regexFormula = word.replace(
        /\b(jr|sr|junior|senior|developer|dev)\b/gi,
        "(jr|sr|junior|senior|developer|dev)"
      );
      return new RegExp(regexFormula, "i");
    });

    const data = databaseSample.filter((item) =>
      regexes.some((regex) => {
        const searchableFields = ['title', 'firstName', 'lastName', 'company'];
        return searchableFields.some((field) => regex.test(item[field]));
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
        } else if (content.firstName && content.lastName && content.company) {
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
        } else if (content.skills) {
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
