
import { RequestHandler } from "express";
import { StandardResponse } from "../../types/response";
import { Course } from "./courses.model";
import { Student, studentModel } from "../students.model";

export const get_courses: RequestHandler<{ student_id: string; }, StandardResponse<Course[]>, unknown, unknown> = async (req, res, next) => {
    try {
        const { student_id } = req.params;
    } catch (error) {
        next(error);
    }
};

export const post_courses: RequestHandler<unknown, StandardResponse<Course>, unknown, unknown> = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};

export const get_course: RequestHandler<{ student_id: string, course_id: string; }, StandardResponse<Course>, unknown, unknown> = async (req, res, next) => {
    try {

        const { course_id } = req.params;
    } catch (error) {
        next(error);
    }
};

export const put_course: RequestHandler<{ student_id: string, course_id: string; }, StandardResponse<number>, Student, unknown> = async (req, res, next) => {
    try {
        const student_id = req.params.student_id;
        const course_id = req.params.course_id;
        const results = await studentModel.findOne(
            { _id: student_id },
            { $addToSet: { courses: course_id } }
        );
        res.json();
    } catch (error) {
        next(error);
    }
};

export const delete_course: RequestHandler<{ student_id: string, course_id: string; }, StandardResponse<number>, Student, unknown> = async (req, res, next) => {
    try {
        const student_id = req.params.student_id;
        const course_id = req.params.course_id;
        const results = await studentModel.findOne(
            { _id: student_id },
            { $pull: { courses: { _id: course_id } } }

        );

    } catch (error) {
        next(error);
    }
};