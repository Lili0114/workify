import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getIssues } from '../middleware/issues';
import '../App.css'; 

const MyIssues = () => {
  const [issues, setIssues] = useState([]);
  const [expandedIssueIds, setExpandedIssueIds] = useState(new Set());

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

  const toggleDescription = (issueId) => {
    const newExpandedIssueIds = new Set(expandedIssueIds);
    if (newExpandedIssueIds.has(issueId)) {
      newExpandedIssueIds.delete(issueId);
    } else {
      newExpandedIssueIds.add(issueId);
    }
    setExpandedIssueIds(newExpandedIssueIds);
  };

  return (
    <div className="container mt-5">
      <h2>My Issues</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(issue => (
            <tr key={issue.id}>
              <td>{issue.title}</td>
              <td className="wrap-text">
                {expandedIssueIds.has(issue.id) ? (
                  <>
                    {issue.description}
                    <Button variant="link" onClick={() => toggleDescription(issue.id)}>
                      Less
                    </Button>
                  </>
                ) : (
                  <>
                    {issue.description.length > 30 ? `${issue.description.substring(0, 30)}...` : issue.description}
                    {issue.description.length > 30 && (
                      <Button variant="link" onClick={() => toggleDescription(issue.id)}>
                        More
                      </Button>
                    )}
                  </>
                )}
              </td>
              <td>{issue.status}</td>
              <td>{new Date(issue.created_at.seconds * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyIssues;