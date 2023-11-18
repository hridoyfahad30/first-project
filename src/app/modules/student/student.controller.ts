import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { StudentModel } from '../student.model';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.body.student.id;
    const checkForExistingStudent = await StudentModel.findOne({
      id: studentId,
    });

    if (studentId === checkForExistingStudent?.id) {
      res.status(501).json({
        success: false,
        message: 'Student already exists against this student id',
        data: null,
      });
    } else {
      const { student: studentData } = req.body;

      const result = await StudentServices.createStudentIntoDB(studentData);

      res.status(200).json({
        success: true,
        message: 'Student is created successfully',
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllStudentsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students are retrieve',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudentFromDB = async (req: Request, res: Response) => {
  const studentId = req.params.studentId;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Students is retrieve',
    data: result,
  });
};

export const StudentController = {
  createStudent,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
