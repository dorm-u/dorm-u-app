'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addEvent } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddEventSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: { name: string; description: string; location: string; month: string; day: number; year: number; host: string; }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addEvent(data);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

const AddEventForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddEventSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Add Stuff</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Event Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>
                <Form.Group style={{ maxHeight: '150px', overflowY: 'auto' }}>
                  <Form.Label>Description</Form.Label>
                  <input
                  type="text"
                  {...register('description')}
                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <input
                  type="text"
                  {...register('location')}
                  className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Month</Form.Label>
                  <input
                  type="text"
                  {...register('month')}
                  className={`form-control ${errors.month ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.month?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Day</Form.Label>
                  <input
                  type="number"
                  {...register('day')}
                  className={`form-control ${errors.day ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.day?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <input
                  type="number"
                  {...register('year')}
                  className={`form-control ${errors.year ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.year?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('host')} value={currentUser} />
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

export default AddEventForm;
