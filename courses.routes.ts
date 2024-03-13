import express from "express";

import { get_course, post_courses, get_courses, put_course, delete_course } from "./courses.controllers";
const courseRouter = express.Router();

courseRouter.get('/', get_courses);
courseRouter.post('/', post_courses);
courseRouter.get('/:course_id', get_course);
courseRouter.put('/:course_id', put_course);
courseRouter.delete('/:course_id', delete_course);

export default courseRouter;