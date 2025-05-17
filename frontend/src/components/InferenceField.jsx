import { Button, Form, Row } from "react-bootstrap";

export default function InferenceField() {

    return (
        <Form style={{ marginTop: "20px" }}>
            <div style={{ width: "100%", height: "100%"}}>
                <Row style={{ width: "100%", justifyContent: "center", marginBottom: "20px" }}>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter text to analyze"
                        style={{ width: "50%", height: "200px", marginTop: "20px" }}
                    />
                </Row>
                <Row style={{ width: "100%", justifyContent: "center"}}>
                    <div style={{ width: "51.5%", justifyContent: "center", display: "flex", gap: "16px" }}>
                        <Button
                            variant="primary"
                            type="submit"
                            style={{ flex: 1 }}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="danger"
                            type="submit"
                            style={{ flex: 1 }}
                        >
                            Clear
                        </Button>
                    </div>
                </Row>
            </div>
        </Form>
    )
}