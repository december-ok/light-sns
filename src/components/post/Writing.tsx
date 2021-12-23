import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useWritePost } from "../../hooks/postHooks";

export default function Writing() {
  const [onContentChange, doWrite, loading, error] = useWritePost();

  return (
    <Form onSubmit={doWrite}>
      <Form.Group className="mb-3">
        <Form.Label>Write Your Thinking!</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={onContentChange} />
      </Form.Group>
      {error && (
        <Alert variant="danger">
          ⚠ Write something! (Or something is wrong!)
        </Alert>
      )}
      <Button type="submit" variant="primary" disabled={loading}>
        Write
      </Button>
      {loading && (
        <Spinner
          animation="border"
          role="status"
          className="ms-3 align-middle"
        />
      )}
    </Form>
  );
}
