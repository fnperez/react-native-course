export interface BaseTodo {
	title?: string
	description?: string
	oneDate?: string
	cardColor?:string
	isCompleted?:boolean
	timestamps: {
		createdOn?: string
		modifiedOn?: string
		completedOn?: string
	}
}

export interface AddTodo extends BaseTodo {
	title: string
}

export interface EditTodo extends BaseTodo {
	_id: string
}

export interface Todo extends BaseTodo {
	title: string
	description: string
	oneDate: string
	cardColor:string
	isCompleted:boolean
	timestamps: {
		createdOn: string
		modifiedOn: string
		completedOn?: string
	}
}