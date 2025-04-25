'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Profile } from '@prisma/client';
import { EditProfileSchema } from '@/lib/validationSchemas';
import { editProfile } from '@/lib/dbActions';

const onSubmit = async (data: Profile) => {
  console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editProfile(data);
  swal('Success', 'Your item has been updated', 'success', {
    timer: 2000,
  });
};

const EditProfileForm = ({ profile }: { profile: Profile }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Profile>({
    resolver: yupResolver(EditProfileSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Edit Profile</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={profile.id} />
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    defaultValue={profile.name}
                    required
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <input
                    type="text"
                    {...register('image')}
                    defaultValue={profile.image}
                    required
                    className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.image?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Classes</Form.Label>
                  <input
                    type="text"
                    {...register('classes')}
                    defaultValue={profile.classes}
                    className={`form-control ${errors.classes ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.classes?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Grade</Form.Label>
                  <select
                    {...register('grade')}
                    className={`form-control ${errors.grade ? 'is-invalid' : ''}`}
                    defaultValue={profile.grade}
                  >
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                  </select>
                  <div className="invalid-feedback">{errors.grade?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>About Me</Form.Label>
                  <input
                    type="text"
                    {...register('aboutme')}
                    defaultValue={profile.aboutme}
                    className={`form-control ${errors.aboutme ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.aboutme?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('userId')} value={profile.userId} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="success">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="danger" className="float-right">
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

export default EditProfileForm;
