import express from "express";

import { get_students, post_students, get_student, put_student, delete_student } from "./students.controllers";
import courseRouter from "./courses/courses.routes";
const studentRouter = express.Router({ mergeParams: true });

studentRouter.get('/', get_students);
studentRouter.post('/', express.json(), post_students);
studentRouter.get('/:student_id', get_student);
studentRouter.put('/:student_id', express.json(), put_student);
studentRouter.delete('/:student_id', delete_student);

studentRouter.use('/:student_id/courses', courseRouter);
export default studentRouter;