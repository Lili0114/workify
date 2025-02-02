import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createIssue } from '../middleware/issues';
import { useNavigate } from 'react-router-dom';

export const CreateIssue = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('1234');
  const [status, setStatus] = useState('Open');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const issueId = await createIssue(title, description, userId, status);
      console.log('Issue created with ID:', issueId);
      navigate("/issues");
    } catch (e) {
      console.error('Error creating issue:', e);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Create Issue</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBody" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Create Issue
        </Button>
      </Form>
    </Container>
  );
};