import * as admin from 'firebase-admin';

import serviceAccount from '../../service-account.json';

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default firebase.auth();
