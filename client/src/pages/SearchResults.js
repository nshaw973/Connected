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

  // TODO - add virtuals for recruiter and dev
  
  function filterSearch() {
// TODO - add regex for dev/developer, jr, junior, sr, senior, etc and any other common search entries
    const searchWords = word.split(" ").filter(Boolean);
    const regexes = searchWords.map((word) => {
      const regexFormula = word.replace(
        /\b(jr|sr)\b/gi,
        "(jr|sr|junior|senior)"
      );
      return new RegExp(regexFormula, "i");
    });

    const data = databaseSample.filter((item) =>
      regexes.some((regex) => {
        const searchableFields = ['title', 'firstName', 'lastName'];
        return searchableFields.some((field) => regex.test(item[field]));
      })
    );

    return data.length > 0 ? (
      data.map((content, index) => {
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
      })
    ) : (
      <h1>No search results found</h1>
    );
  }

  return <>{filterSearch()}</>;
}
