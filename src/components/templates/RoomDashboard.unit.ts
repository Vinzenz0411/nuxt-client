import { mount } from "@vue/test-utils";
import RoomDashboard from "./RoomDashboard.vue";
declare var createComponentMocks: Function;

const mockData = {
	roomId: "123",
	title: "Sample Course",
	displayColor: "black",
	elements: [
		{
			type: "task",
			content: {
				courseName: "Mathe",
				id: "59cce1d381297026d02cdc4b",
				name: "Private Aufgabe von Marla - mit Kurs, offen",
				createdAt: "2017-09-28T11:49:39.924Z",
				updatedAt: "2017-09-28T11:49:39.924Z",
				status: {
					submitted: 0,
					maxSubmissions: 2,
					graded: 0,
					isDraft: false,
					isSubstitutionTeacher: false,
				},
				availableDate: "2017-09-20T11:00:00.000Z",
				duedate: "2300-09-28T13:00:00.000Z",
				displayColor: "#54616e",
				description: "",
			},
		},
		{
			type: "task",
			content: {
				courseName: "Mathe",
				id: "59cce4c3c6abf042248e888e",
				name: "Private Aufgabe von Cord - mit Kurs, offen",
				createdAt: "2017-09-28T12:02:11.432Z",
				updatedAt: "2017-09-28T12:02:11.432Z",
				status: {
					submitted: 0,
					maxSubmissions: 2,
					graded: 0,
					isDraft: true,
					isSubstitutionTeacher: false,
				},
				availableDate: "2017-09-28T12:00:00.000Z",
				duedate: "2300-06-28T13:00:00.000Z",
				displayColor: "#54616e",
				description: "",
			},
		},
	],
};

const getWrapper: any = (props: object, options?: object) => {
	return mount(RoomDashboard, {
		...createComponentMocks({
			i18n: true,
			vuetify: true,
		}),
		propsData: props,
		...options,
	});
};

describe("@components/templates/RoomDashboard.vue", () => {
	beforeEach(() => {});

	it("should have props", async () => {
		const wrapper = getWrapper({ roomData: mockData, role: "teacher" });

		expect(wrapper.vm.roomData).toStrictEqual(mockData);
		expect(wrapper.vm.role).toStrictEqual("teacher");
	});

	it("should list teacher cards", async () => {
		const wrapper = getWrapper({ roomData: mockData, role: "teacher" });

		const listItemsTeacher = wrapper.findAll(".card-teacher");
		const listItemsStudent = wrapper.findAll(".card-student");
		expect(listItemsTeacher).toHaveLength(2);
		expect(listItemsStudent).toHaveLength(0);
	});

	it("should list student card", async () => {
		const wrapper = getWrapper({ roomData: mockData, role: "student" });

		const listItemsStudent = wrapper.findAll(".card-student");
		const listItemsTeacher = wrapper.findAll(".card-teacher");
		expect(listItemsStudent).toHaveLength(2);
		expect(listItemsTeacher).toHaveLength(0);
	});
});
