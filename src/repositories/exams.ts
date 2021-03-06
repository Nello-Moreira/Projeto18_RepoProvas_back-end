import { getRepository } from 'typeorm';
import Category from './entities/Category';
import Exam from './entities/Exam';

export interface PostedExam {
	name: string;
	fileUrl: string;
	categoryId: number;
	subjectId: number;
	professorId: number;
}

async function insertExam(exam: PostedExam) {
	const newExam = getRepository(Exam).create({
		name: exam.name,
		fileUrl: exam.fileUrl,
		categoryId: exam.categoryId,
		subjectId: exam.subjectId,
		teacherId: exam.professorId,
	});

	return getRepository(Exam).save(newExam);
}

async function findExamByFileUrl(fileUrl: string) {
	return getRepository(Exam).findOne({ fileUrl });
}

async function findCategories(): Promise<Category[]> {
	return getRepository(Category).find();
}

export default { insertExam, findExamByFileUrl, findCategories };
