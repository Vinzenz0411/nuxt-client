/* eslint-disable max-lines */

/*
	Mockdata for tasks dashboards
	This data is also used for unit tests, to ensure that the store works properly.
	Do not tamper with this data.
*/

export const overDueTasks = [
	{
		id: "59cce4171113d1132c98dc07",
		_id: "59cce4171113d1132c98dc07",
		name: "Aufgabe an Marla (Mathe) - abgelaufen",
		duedate: "2017-07-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-07-28T11:58:46.601Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce2c61113d1132c98dc06",
		_id: "59cce2c61113d1132c98dc06",
		name: "Private Aufgabe von Marla - mit Kurs, abgelaufen",
		duedate: "2017-07-28T13:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:49:39.924Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce352c6abf042248e888c",
		_id: "59cce352c6abf042248e888c",
		name: "zu archivierende Aufgabe von Marla",
		duedate: "2017-06-07T09:30:00.000Z",
		courseName: "Chemie",
		createdAt: "2017-09-28T11:56:02.897Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
];
export const openTasksWithDueDate = [
	{
		id: "59cce4c3c6abf042248e888e",
		_id: "59cce4c3c6abf042248e888e",
		name: "Private Aufgabe von Cord - mit Kurs, offen",
		duedate: "2300-06-11T14:00:00.000Z",
		courseName: "Mathe",
		description: "Malen nach Zahlen",
		createdAt: "2017-09-28T12:02:11.432Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce1d381297026d02cdc4b",
		_id: "59cce1d381297026d02cdc4b",
		name: "Private Aufgabe von Marla - mit Kurs, offen",
		duedate: "2300-09-28T13:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:49:39.924Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce3f6c6abf042248e888d",
		_id: "59cce3f6c6abf042248e888d",
		name: "Aufgabe an Marla (Mathe) - offen",
		duedate: "2300-09-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:58:46.601Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce6c6d5e50214e47b601d",
		_id: "59cce6c6d5e50214e47b601d",
		name: "Archivierte Aufgaben von Cord - mit Kurs, offen",
		duedate: "2300-10-25T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T12:10:46.180Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
];
export const openTasksWithoutDueDate = [
	{
		id: "59cce4171113d1132c98dc08",
		_id: "59cce4171113d1132c98dc08",
		name: "Aufgabe an Marla (Mathe) - ohne Abgabedatum",
		courseName: "Mathe",
		createdAt: "2017-07-28T11:58:46.601Z",
		status: {
			submitted: 0,
			graded: 0,
			isDraft: false,
		},
	},
];

export const submittedTasks = [
	{
		id: "59cce4c3c6abf042248e968e",
		_id: "59cce4c3c6abf042248e968e",
		name: "Aufgabe von Cord - mit Kurs, abgegeben",
		displayColor: "#00E5FF",
		duedate: "2300-06-11T14:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T12:02:11.432Z",
		status: {
			submitted: 1,
			graded: 0,
			isDraft: false,
		},
	},
];

export const missedButGradedTasks = [
	{
		id: "59cce352c6abf001248e888c",
		_id: "59cce352c6abf001248e888c",
		name: "Aufgabe von Marla - abgelaufen, bewertet",
		displayColor: "#1DE9B6",
		duedate: "2017-06-07T09:30:00.000Z",
		courseName: "Biologie",
		createdAt: "2017-09-28T11:56:02.897Z",
		status: {
			submitted: 0,
			graded: 1,
			isDraft: false,
		},
	},
];

export const gradedTasks = [
	{
		id: "59cce7u6c6abf042248e888d",
		_id: "59cce7u6c6abf042248e888d",
		name: "Aufgabe an Marla (Mathe) - abgegeben, bewertet",
		displayColor: "#00E5FF",
		duedate: "2300-09-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:58:46.601Z",
		status: {
			submitted: 1,
			graded: 1,
			isDraft: false,
		},
	},
	{
		id: "59cce352c6abf001248e888c",
		_id: "59cce352c6abf001248e888c",
		name: "Aufgabe von Marla - abgelaufen, bewertet",
		displayColor: "#1DE9B6",
		duedate: "2017-06-07T09:30:00.000Z",
		courseName: "Biologie",
		createdAt: "2017-09-28T11:56:02.897Z",
		status: {
			submitted: 0,
			graded: 1,
			isDraft: false,
		},
	},
];

export const openTasks = [
	...openTasksWithDueDate,
	...overDueTasks,
	...openTasksWithoutDueDate,
];
export const completedTasks = [...submittedTasks, ...gradedTasks];
export const tasks = [...openTasks, ...completedTasks];

export const invalidTasks = [
	{
		_id: "59cce4c3c6abf042248e888e",
		name: "Private Aufgabe von Cord - mit Kurs, offen",
		duedate: "2300-06-11T14:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T12:02:11.432Z",
	},
	{
		id: "59cce1d381297026d02cdc4b",
		_id: "59cce1d381297026d02cdc4b",
		duedate: "2300-09-28T13:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:49:39.924Z",
	},
	{
		_id: "59cce3f6c6abf042248e888d",
		name: "Aufgabe an Marla (Mathe) - offen",
		duedate: "2300-09-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:58:46.601Z",
	},
	{
		id: "59cce6c6d5e50214e47b601d",
		_id: "59cce6c6d5e50214e47b601d",
		name: "Archivierte Aufgaben von Cord - mit Kurs, offen",
		duedate: "2300-10-25T15:00:00.000Z",
		courseName: "Mathe",
	},
	{
		id: "59cce4171113d1132c98dc08",
		_id: "59cce4171113d1132c98dc08",
		name: "Aufgabe an Marla (Mathe) - ohne Abgabedatum",
		createdAt: "2017-07-28T11:58:46.601Z",
	},
];

export const overDueTasksTeacher = [
	{
		id: "59cce352c6abf042248e888c",
		_id: "59cce352c6abf042248e888c",
		name: "Trigonometrie",
		duedate: "2017-06-07T09:30:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:56:02.897Z",
		status: {
			submitted: 1,
			maxSubmissions: 1,
			graded: 1,
			isDraft: false,
		},
	},
	{
		id: "59cce2c61113d1132c98dc06",
		_id: "59cce2c61113d1132c98dc06",
		name: "Schaubilder und Diagramme auswerten",
		duedate: "2017-07-28T13:00:00.000Z",
		courseName: "Deutsch",
		createdAt: "2017-09-28T11:49:39.924Z",
		status: {
			submitted: 5,
			maxSubmissions: 15,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce4171113d1132c98dc07",
		_id: "59cce4171113d1132c98dc07",
		name: "Schriftlich multiplizieren mit Dezimalzahlen",
		duedate: "2017-07-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-07-28T11:58:46.601Z",
		status: {
			submitted: 10,
			maxSubmissions: 10,
			graded: 9,
			isDraft: false,
		},
	},
];

export const dueDateTasksTeacher = [
	{
		id: "59cce4c3c6abf042248e888e",
		_id: "59cce4c3c6abf042248e888e",
		name: "Logarithmus",
		duedate: "2300-06-11T14:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T12:02:11.432Z",
		status: {
			submitted: 0,
			maxSubmissions: 1,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce3f6c6abf042248e888d",
		_id: "59cce3f6c6abf042248e888d",
		name: "Morphologie",
		duedate: "2300-09-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:58:46.601Z",
		status: {
			submitted: 10,
			maxSubmissions: 15,
			graded: 7,
			isDraft: false,
		},
	},
	{
		id: "59cce6c6d5e50214e47b601d",
		_id: "59cce6c6d5e50214e47b601d",
		name: "Nomen mit Wortbausteinen",
		duedate: "2300-10-25T15:00:00.000Z",
		courseName: "Deutsch",
		createdAt: "2017-09-28T12:10:46.180Z",
		status: {
			submitted: 3,
			maxSubmissions: 15,
			graded: 0,
			isDraft: false,
		},
	},
	{
		id: "59cce1d381297026d02cdc4b",
		_id: "59cce1d381297026d02cdc4b",
		name: "Bildung des Konjunktiv I",
		duedate: "2300-09-28T13:00:00.000Z",
		courseName: "Deutsch",
		createdAt: "2017-09-28T11:49:39.924Z",
		status: {
			submitted: 10,
			maxSubmissions: 12,
			graded: 4,
			isDraft: false,
		},
	},
];

export const noDueDateTasksTeacher = [
	{
		id: "59cce4171113d1132c98dc08",
		_id: "59cce4171113d1132c98dc08",
		name: "Analytischen Geometrie zusammen mit Vektorrechnung",
		courseName: "Mathe",
		createdAt: "2017-07-28T11:58:46.601Z",
		status: {
			submitted: 1,
			maxSubmissions: 1,
			graded: 0,
			isDraft: false,
		},
	},
];

export const tasksTeacher = [
	...overDueTasksTeacher,
	...dueDateTasksTeacher,
	...noDueDateTasksTeacher,
];

export const drafts = [
	{
		id: "59cce2c61113d1132c98dcw2",
		_id: "59cce2c61113d1132c98dcw2",
		name: "Der Buchstabe O",
		courseName: "Deutsch",
		description: "Das Alphabet",
		createdAt: "2017-09-28T11:49:39.924Z",
		status: {
			submitted: 0,
			maxSubmissions: 1,
			graded: 0,
			isDraft: true,
		},
	},
	{
		id: "59ccr252c6abf042248e888c",
		_id: "59ccr252c6abf042248e888c",
		name: "Das 1x1",
		courseName: "",
		description: "",
		createdAt: "2017-09-28T11:56:02.897Z",
		status: {
			submitted: 0,
			maxSubmissions: 1,
			graded: 0,
			isDraft: true,
		},
	},
	{
		id: "59ccr252c6t5f042248e888c",
		_id: "59ccr252c6t5f042248e888c",
		name: "Aufgabe ohne Kurs",
		courseName: "",
		createdAt: "2017-09-28T11:56:02.897Z",
		status: {
			submitted: 0,
			maxSubmissions: 1,
			graded: 0,
			isDraft: true,
		},
	},
];

export const allTasksTeacher = [...tasksTeacher, ...drafts];

export const coursesStudent = ["Mathe", "Chemie", "Biologie"];
export const coursesTeacher = ["Mathe", "Deutsch", ""];

export const tasksCountStudent = {
	open: { Mathe: 7, Chemie: 1, Biologie: 0 },
	completed: { Mathe: 2, Chemie: 0, Biologie: 1 },
};

export const tasksCountTeacher = {
	open: { Mathe: 5, Deutsch: 3, "": 0 },
	drafts: { Mathe: 0, Deutsch: 1, "": 2 },
};

export const mathTasks = [
	{
		id: "59cce352c6abf042248e888c",
		_id: "59cce352c6abf042248e888c",
		name: "Trigonometrie",
		duedate: "2017-06-07T09:30:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:56:02.897Z",
		status: {
			submitted: 1,
			maxSubmissions: 1,
			graded: 1,
		},
	},
	{
		id: "59cce4171113d1132c98dc07",
		_id: "59cce4171113d1132c98dc07",
		name: "Schriftlich multiplizieren mit Dezimalzahlen",
		duedate: "2017-07-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-07-28T11:58:46.601Z",
		status: {
			submitted: 10,
			maxSubmissions: 10,
			graded: 9,
		},
	},
	{
		id: "59cce4c3c6abf042248e888e",
		_id: "59cce4c3c6abf042248e888e",
		name: "Logarithmus",
		duedate: "2300-06-11T14:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T12:02:11.432Z",
		status: {
			submitted: 0,
			maxSubmissions: 1,
			graded: 0,
		},
	},
	{
		id: "59cce3f6c6abf042248e888d",
		_id: "59cce3f6c6abf042248e888d",
		name: "Morphologie",
		duedate: "2300-09-28T15:00:00.000Z",
		courseName: "Mathe",
		createdAt: "2017-09-28T11:58:46.601Z",
		status: {
			submitted: 10,
			maxSubmissions: 15,
			graded: 7,
		},
	},
	{
		id: "59cce4171113d1132c98dc08",
		_id: "59cce4171113d1132c98dc08",
		name: "Analytischen Geometrie zusammen mit Vektorrechnung",
		courseName: "Mathe",
		createdAt: "2017-07-28T11:58:46.601Z",
		status: {
			submitted: 1,
			maxSubmissions: 1,
			graded: 0,
		},
	},
];
