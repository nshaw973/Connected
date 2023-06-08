import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function SearchResults() {
  const { word } = useParams();

  const databaseSample = [
    {
      title: "jr-developer",
      company: "Dude Inc",
      description: "assist sr dev",
      salary: 50000,
      applicantNumber: 10,
    },
    {
        title: "jr-developer",
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
    const searchWords = word.split(" ").filter(Boolean);
    const data = databaseSample.filter((item) => item.title === word);
    
    // console.log(data);

    return data.length > 0 ? (
      data.map((content) => (
        <Card style={{ width: "18rem", marginBottom: "10px", marginTop: "10px", }}>
          <Card.Body>
            <Card.Title>{content.title}</Card.Title>
            <Card.Text>Company: {content.company}</Card.Text>
            <Card.Text>Description: {content.description}</Card.Text>
            <Card.Text>Salary: {content.salary}</Card.Text>
            <Card.Text>Number of Applicants: {content.applicantNumber}</Card.Text>
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
