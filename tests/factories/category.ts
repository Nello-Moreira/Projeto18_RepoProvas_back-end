import createNewName from './newName';

import ICategory from '../../src/protocols/Category';

function createCategory(name:string = null):ICategory {
	const newName = createNewName(name);

	return {
		name: newName,
	};
}

export { createCategory };
