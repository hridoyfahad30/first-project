import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/all-students', StudentController.getAllStudentsFromDB);
router.get('/:studentId', StudentController.getSingleStudentFromDB);

export const StudentRoutes = router;
