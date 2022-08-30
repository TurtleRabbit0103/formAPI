import { Router } from 'express';

// project imports
//import user from 'stx-api/routes/user';
import form from './form'

// guaranteed to get dependencies
export default () => {

    const app = Router();

    form(app);
    // reservation(app);
    // contact_message(app);
    // lock_reservation(app);
    // review(app);
    // branch(app);
    // menu(app);

    return app
}