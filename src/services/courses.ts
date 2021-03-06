import coursesRepository from '../repositories/courses';

import NoContentError from '../errors/NoContent';
import NotFoundError from '../errors/NotFound';

async function findCourses() {
	const courses = await coursesRepository.findCourses();

	if (courses.length === 0) {
		throw new NoContentError('There are no courses');
	}

	return courses;
}

async function findCourseSubjects(courseId:number) {
	const course = await coursesRepository.findCourseSubjects(courseId);

	if (!course) {
		throw new NotFoundError(`There are no courses with id ${courseId}`);
	}

	const subjects = course.getSubjects();
	if (subjects.length === 0) {
		throw new NoContentError(`There are no courses with id ${courseId}`);
	}

	return subjects.sort((a, b) => (a.season < b.season ? -1 : 1));
}

async function findCourseTeachers(courseId:number) {
	const course = await coursesRepository.findCourseTeachers(courseId);

	if (!course) {
		throw new NotFoundError(`There are no courses with id ${courseId}`);
	}

	const teachers = course.getTeachers();
	if (teachers.length === 0) {
		throw new NoContentError('There are no professors for this course');
	}

	return teachers;
}

export default { findCourses, findCourseSubjects, findCourseTeachers };
