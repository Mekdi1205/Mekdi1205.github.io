import { Schema, InferSchemaType, model } from "mongoose";
import { CourseSchema } from "./courses/courses.model";
const StudentSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    courses: [CourseSchema],
    deleted: { type: Boolean, default: false }
}, { timestamps: true });
export type Student = InferSchemaType<typeof StudentSchema>;
export const studentModel = model<Student>('student', StudentSchema);