import app from 'app';
import supertest from 'supertest';

const request = supertest(app);
const userId = 'userId1';

jest.mock('config/firebase', () => ({
  verifyIdToken: jest.fn(() => ({
    uid: userId,
  })),
}));

test('/api/health', async () => {
  await request.get('/api/health').expect(200);
});

test('/api/users', async () => {
  await request
    .get('/api/users')
    .set('Authorization', `Bearer valid-token`)
    .expect(200);
});
