import { Schema, InferSchemaType, model } from "mongoose";

export const CourseSchema = new Schema({ course: String });
export type Course = InferSchemaType<typeof CourseSchema>;
