import Vuetify from "vuetify";
import mocks from "@@/tests/test-utils/mockDataTasks";
import TaskItemStudent from "./TaskItemStudent";

const { tasks, openTasksWithoutDueDate, openTasksWithDueDate, invalidTasks } =
	mocks;

describe("@components/molecules/TaskItemStudent", () => {
	let vuetify;

	beforeEach(() => {
		vuetify = new Vuetify();
	});

	const getWrapper = (props, options) => {
		return mount(TaskItemStudent, {
			...createComponentMocks({
				i18n: true,
				vuetify: true,
			}),
			vuetify,
			propsData: props,
			...options,
		});
	};

	it(...isValidComponent(TaskItemStudent));

	it("Should link list item links to task/<id> page", () => {
		const wrapper = getWrapper({ task: tasks[0] });

		const firstLink = wrapper.find("a");

		expect(firstLink.exists()).toBe(true);
		expect(firstLink.attributes().href).toBe(`/homework/${tasks[0]._id}`);
	});

	it("Should display no due date label if task has no duedate", () => {
		const wrapper = getWrapper({ task: openTasksWithoutDueDate[0] });

		const dueDateLabel = wrapper.find("[data-test-id='dueDateLabel']");
		expect(dueDateLabel.text()).toBe("Kein Abgabedatum");
	});

	it("Should display due date label if task has duedate", () => {
		const wrapper = getWrapper({ task: tasks[0] });

		const dueDateLabel = wrapper.find("[data-test-id='dueDateLabel']");
		expect(dueDateLabel.text()).toBe("Abgabe 11.06.00 16:00");
	});

	it("Should render hint label, if task is close to due date", () => {
		const current = new Date();
		current.setHours(current.getHours() + 1);
		const closeToDueDate = current.toISOString();

		const taskCloseToDueDate = {
			id: "59cce2c61113d1132c98dc02",
			_id: "59cce2c61113d1132c98dc02",
			name: "Private Aufgabe von Marla - mit Kurs, abgelaufen",
			duedate: closeToDueDate,
			courseName: "Mathe",
			createdAt: "2017-09-28T11:49:39.924Z",
			status: {
				isFinished: false,
			},
		};

		const wrapper = getWrapper({ task: taskCloseToDueDate });

		expect(wrapper.find("[data-test-id='dueDateHintLabel']").exists()).toBe(
			true
		);
	});

	it("Should render no hint label if the task is due in the far future", () => {
		const wrapper = getWrapper({ task: openTasksWithDueDate[0] });

		expect(wrapper.find("[data-test-id='dueDateHintLabel']").exists()).toBe(
			false
		);
	});

	it("computedDueDateLabel() method should be able to render a shortened date", () => {
		const wrapper = getWrapper({ task: openTasksWithDueDate[0] });

		expect(wrapper.vm.dueDateLabel).toBe("Abgabe 11.06.00 16:00");

		/* 	expect(
			wrapper.vm.computedDueDateLabel(openTasksWithDueDate[0].duedate, true)
		).toBe("Abgabe 11.06.00"); */
	});

	it("accepts valid task props", () => {
		const { validator } = TaskItemStudent.props.task;
		const validTasks = tasks;

		validTasks.forEach((task) => {
			expect(validator(task)).toBe(true);
		});

		invalidTasks.forEach((task) => {
			expect(validator(task)).toBe(false);
		});
	});

	it("should display topic", () => {
		const wrapper = getWrapper({ task: openTasksWithDueDate[0] });

		expect(wrapper.text()).toContain("Thema Malen nach Zahlen");
	});
});
