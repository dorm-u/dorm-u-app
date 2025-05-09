'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Event } from '@prisma/client';
import { EditEventSchema } from '@/lib/validationSchemas';
import { editEvent, deleteEvent } from '@/lib/dbActions';

const onSubmit = async (data: Event) => {
  console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editEvent(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const onDelete = async (data: Event) => {
  console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await deleteEvent(data.id);
  swal('Success', 'Your item has been deleted', 'success', {
    timer: 2000,
  });
};

const EditStuffForm = ({ event }: { event: Event }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Event>({
    resolver: yupResolver(EditEventSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Event</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={event.id} />
                <Form.Group>
                  <Form.Label>Event Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    required
                    defaultValue={event.name}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>
                <Form.Group style={{ maxHeight: '150px', overflowY: 'auto' }}>
                  <Form.Label>Description</Form.Label>
                  <input
                  type="text"
                  {...register('description')}
                  defaultValue={event.description}
                  required
                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <input
                  type="text"
                  {...register('location')}
                  defaultValue={event.location}
                  required
                  className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Month</Form.Label>
                  <input
                  type="text"
                  {...register('month')}
                  defaultValue={event.month}
                  required
                  className={`form-control ${errors.month ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.month?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Day</Form.Label>
                  <input
                  type="number"
                  {...register('day')}
                  defaultValue={event.day}
                  required
                  className={`form-control ${errors.day ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.day?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <input
                  type="number"
                  {...register('year')}
                  defaultValue={event.year}
                  required
                  className={`form-control ${errors.year ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.year?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('host')} value={event.host} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                    <Col>
                        <Button
                          type="button"
                          variant="danger"
                          className="float-end"
                          onClick={() => onDelete(event)}
                        >
                          Delete Event
                        </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditStuffForm;
