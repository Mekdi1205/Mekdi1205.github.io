import { RequestHandler } from "express";
import { StandardResponse } from "../types/response";
import { Student, studentModel } from "./students.model";


export const get_students: RequestHandler<unknown, StandardResponse<Student[]>, unknown, unknown> = async (req, res, next) => {
    try {
        const results = await studentModel.find({});
        res.json({ success: true, data: results });

    } catch (error) {
        next(error);
    }
};

export const post_students: RequestHandler<unknown, StandardResponse<Student>, Student, unknown> = async (req, res, next) => {
    try {

        const results = await studentModel.create(req.body);
        res.json({ success: true, data: results });
    } catch (error) {
        next(error);
    }
};

export const get_student: RequestHandler<{ student_id: string; }, StandardResponse<Student>, unknown, unknown> = async (req, res, next) => {
    try {
        const { student_id } = req.params;   //student_id=req.params
        const results = await studentModel.findOne(
            { _id: student_id }
        );

    } catch (error) {
        next(error);
    }
};

export const put_student: RequestHandler<unknown, StandardResponse<number>, unknown, unknown> = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};

export const delete_student: RequestHandler<unknown, StandardResponse<number>, unknown, unknown> = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};