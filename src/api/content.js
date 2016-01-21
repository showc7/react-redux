import { Router } from 'express';
import { join } from 'path';

const CONTENT_DIR = join(__dirname, './content');

const router = new Router();

router.get('/', async(req, res, next) => {
  let statusCode = 200;
  let content = "server API content";
  res.status(statusCode).send();
});

export default router;
