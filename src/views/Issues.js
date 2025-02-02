import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { getIssues } from '../middleware/issues';
import * as XLSX from 'xlsx';

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    async function fetchIssues() {
      try {
        const fetchedIssues = await getIssues();
        setIssues(fetchedIssues);
      } catch (e) {
        console.error('Error fetching issues:', e);
      }
    }
    fetchIssues();
  }, []);

  const sortIssues = (field) => {
    const sortedIssues = [...issues].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setIssues(sortedIssues);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(issues);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Issues');
    XLSX.writeFile(workbook, 'issues.xlsx');
  };

  return (
    <Container className="mt-5">
      <h2>All Issues</h2>
      <Button variant="primary" onClick={downloadExcel} className="mb-3">
        Download as Excel
      </Button>
      <Row>
        <Col>
          <Button variant="secondary" onClick={() => sortIssues('title')}>
            Sort by Title
          </Button>
          <Button variant="secondary" onClick={() => sortIssues('status')} className="ms-2">
            Sort by Status
          </Button>
        </Col>
      </Row>
      <Row>
        {issues.map(issue => (
          <Col key={issue.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{issue.title}</Card.Title>
                <Card.Text>{issue.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">Status: {issue.status}</small>
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Created At: {new Date(issue.created_at.seconds * 1000).toLocaleString()}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Issues;