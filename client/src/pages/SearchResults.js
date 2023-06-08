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
  ];

  function filterSearch() { 
    // TODO - add Regex for jr/sr/dev/developer/any other common searchs that come to mind
    const searchWords = word.split(" ").filter(Boolean);
    const regexes = searchWords.map((word) => {
      const regexPattern = word.replace(
        /\b(jr|sr)\b/gi,
        "(jr|sr|junior|senior)"
      );
      return new RegExp(regexPattern, "i");
    });
    const data = databaseSample.filter((item) =>
      regexes.some((regex) => regex.test(item.title))
    );

    return data.length > 0 ? (
      data.map((content, index) => (
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
      ))
    ) : (
      <h1>No search results found</h1>
    );
  }

  return <>{filterSearch()}</>;
}
