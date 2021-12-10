import { default as RoomsPage } from "./rooms-overview.vue";
import RoomsModule from "@/store/rooms";
import flushPromises from "flush-promises";

const mockStoreData = [
	{
		id: "1",
		title: "First",
		shortTitle: "Ma",
		displayColor: "purple",
		url: "/api/xxxx/1234w",
		xPosition: 1,
		yPosition: 1,
	},
	{
		id: "2",
		title: "Second",
		shortTitle: "Ma",
		displayColor: "#EC407A",
		url: "/api/xxxx/1234w",
		notification: true,
		xPosition: 2,
		yPosition: 2,
	},
	{
		id: "3",
		title: "Third",
		shortTitle: "Ma",
		displayColor: "#EC407A",
		url: "/api/xxxx/1234w",
		xPosition: 0,
		yPosition: 0,
	},
	{
		id: "4",
		title: "Fourth",
		shortTitle: "Bi",
		displayColor: "#EC407A",
		url: "/api/xxxx/1234w",
		xPosition: 2,
		yPosition: 3,
		groupElements: [
			{
				id: "5",
				title: "Math 7a",
				displayColor: "yellow",
			},
			{
				id: "6",
				title: "Bio 3a",
				displayColor: "green",
				notification: true,
			},
			{
				id: "7",
				title: "Geo 7b",
				displayColor: "yellow",
			},
		],
	},
];

const spyMocks = {
	storeRoomAlignMock: jest
		.spyOn(RoomsModule, "align")
		.mockImplementation(() => {}),
	storeModuleFetchMock: jest
		.spyOn(RoomsModule, "fetch")
		.mockImplementation(() => {}),
	storeModuleFetchAllMock: jest
		.spyOn(RoomsModule, "fetchAllElements")
		.mockImplementation(() => {}),
	getElementNameByRefMock: jest.spyOn(RoomsPage.methods, "getElementNameByRef"),
	openDialogMock: jest.spyOn(RoomsPage.methods, "openDialog"),
	getDataObjectMock: jest.spyOn(RoomsPage.methods, "getDataObject"),
	hasGroupMock: jest.spyOn(RoomsPage.methods, "hasGroup"),
	findDataByPosMock: jest.spyOn(RoomsPage.methods, "findDataByPos"),
	getDeviceDimsMock: jest.spyOn(RoomsPage.methods, "getDeviceDims"),
	setDropElementMock: jest.spyOn(RoomsPage.methods, "setDropElement"),
	setGroupElementsMock: jest.spyOn(RoomsPage.methods, "setGroupElements"),
	addGroupElementsMock: jest.spyOn(RoomsPage.methods, "addGroupElements"),
	savePositionMock: jest.spyOn(RoomsPage.methods, "savePosition"),
	dragFromGroupMock: jest.spyOn(RoomsPage.methods, "dragFromGroup"),
};

const getWrapper = (device = "desktop") => {
	return mount(RoomsPage, {
		...createComponentMocks({
			i18n: true,
			vuetify: true,
		}),
		computed: {
			$mq: () => device,
		},
	});
};

describe("RoomPage", () => {
	beforeEach(() => {
		RoomsModule.setRoomData(mockStoreData);
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	it(...isValidComponent(RoomsPage));

	it("should fetch the room data", async () => {
		const wrapper = getWrapper();
		await flushPromises();
		expect(spyMocks.storeModuleFetchMock).toHaveBeenCalled();
		expect(wrapper.vm.items).toStrictEqual(mockStoreData);
	});

	it("should display 6 avatars component", async () => {
		const wrapper = getWrapper();
		await flushPromises();
		const avatarComponents = wrapper.findAll(".room-avatar");
		expect(avatarComponents).toHaveLength(6);
	});

	it("should display 2 avatars component in 'mobile' device", async () => {
		const wrapper = getWrapper("mobile");
		await flushPromises();
		const avatarComponents = wrapper.findAll(".room-avatar");
		expect(avatarComponents).toHaveLength(6);
	});

	it("should display 1 group-avatar component", async () => {
		const wrapper = getWrapper();
		await flushPromises();
		const groupAvatarComponents = wrapper.findAll(".room-group-avatar");
		expect(groupAvatarComponents).toHaveLength(1);
	});

	it("should call 'openDialog' event if groupAvatar component clicked", async () => {
		const wrapper = getWrapper();
		await flushPromises();
		const cardComponent = wrapper.find(".card-component");
		await cardComponent.trigger("click");
		expect(spyMocks.openDialogMock).toHaveBeenCalled();
	});

	it("custom-dialog component should be visible", async () => {
		const wrapper = getWrapper();
		await flushPromises();
		const cardComponent = wrapper.find(".card-component");
		await cardComponent.trigger("click");
		await flushPromises();
		const customDialog = wrapper.find(".room-dialog");
		await flushPromises();
		const headline = customDialog.find("h2");
		expect(customDialog.vm.isOpen).toBe(true);
		expect(headline.element.innerHTML).toContain("Fourth");
	});

	it("should call the necessary methods for positioning while the page loading", async () => {
		getWrapper();
		await flushPromises();
		expect(spyMocks.getDataObjectMock).toHaveBeenCalled();
		expect(spyMocks.findDataByPosMock).toHaveBeenCalled();
		await flushPromises();
		expect(spyMocks.getDeviceDimsMock).toHaveBeenCalled();
		expect(spyMocks.hasGroupMock).toHaveBeenCalled();
	});

	it("'$refs' should be placed correctly for the components", async () => {
		const wrapper = getWrapper();
		await flushPromises();
		expect(wrapper.vm.$refs["1-1"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);
		expect(wrapper.vm.$refs["2-2"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);
		expect(wrapper.vm.$refs["0-0"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);
		expect(wrapper.vm.$refs["3-2"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomGroupAvatar"
		);
		expect(wrapper.vm.$refs["3-3"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomEmptyAvatar"
		);
	});

	it("should set the column count '4' if the device is 'mobile'", async () => {
		const wrapper = getWrapper("mobile");
		await flushPromises();
		expect(spyMocks.getDeviceDimsMock).toHaveBeenCalled();
		expect(wrapper.vm.dimensions.colCount).toBe(4);
	});

	it("should set the column count '4' if the device is 'tablet'", async () => {
		const wrapper = getWrapper("tablet");
		await flushPromises();
		expect(spyMocks.getDeviceDimsMock).toHaveBeenCalled();
		expect(wrapper.vm.dimensions.colCount).toBe(4);
	});

	it("should set the column count '4' if the device is 'desktop'", async () => {
		const wrapper = getWrapper();
		await flushPromises();
		expect(spyMocks.getDeviceDimsMock).toHaveBeenCalled();
		expect(wrapper.vm.dimensions.colCount).toBe(4);
	});

	it("should call 'setDropElement' method after avatar-to-emptyAvatar drag&drop", async () => {
		const wrapper = getWrapper();
		const expectedPayload = {
			from: {
				x: 0,
				y: 0,
			},
			item: {
				id: "3",
				title: "Third",
				shortTitle: "Ma",
				displayColor: "#EC407A",
				url: "/api/xxxx/1234w",
				xPosition: 0,
				yPosition: 0,
			},
			to: {
				x: 3,
				y: 2,
			},
		};
		await flushPromises();
		expect(wrapper.vm.$refs["0-0"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);
		expect(wrapper.vm.$refs["2-3"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomEmptyAvatar"
		);
		const avatarComponent = wrapper.findComponent({ ref: "0-0" });
		avatarComponent.trigger("dragstart");

		const emptyAvatarComponent = wrapper.findComponent({ ref: "2-3" });
		emptyAvatarComponent.trigger("drop");

		expect(spyMocks.setDropElementMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock).toHaveBeenCalled();
		expect(spyMocks.getElementNameByRefMock).toHaveBeenCalled();
		expect(spyMocks.savePositionMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock.mock.calls[0][0]).toStrictEqual(
			expectedPayload
		);
	});

	it("should call 'setGroupElements' method for grouping after avatar-to-avatar drag&drop", async () => {
		const wrapper = getWrapper();
		const expectedPayload = {
			from: {
				x: 1,
				y: 1,
			},
			item: {
				id: "1",
				title: "First",
				shortTitle: "Ma",
				displayColor: "purple",
				url: "/api/xxxx/1234w",
				xPosition: 1,
				yPosition: 1,
			},
			to: {
				x: 2,
				y: 2,
			},
		};
		await flushPromises();
		expect(wrapper.vm.$refs["1-1"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);
		expect(wrapper.vm.$refs["2-2"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);

		const fromAvatarComponent = wrapper.findComponent({ ref: "1-1" });
		fromAvatarComponent.trigger("dragstart");

		const toAvatarComponent = wrapper.findComponent({ ref: "2-2" });
		toAvatarComponent.trigger("drop");

		expect(spyMocks.setGroupElementsMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock).toHaveBeenCalled();
		expect(spyMocks.getElementNameByRefMock).toHaveBeenCalled();
		expect(spyMocks.savePositionMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock.mock.calls[0][0]).toStrictEqual(
			expectedPayload
		);
	});

	it("should call 'addGroupElements' method for grouping after avatar-to-groupAvatar drag&drop", async () => {
		const wrapper = getWrapper();
		const expectedPayload = {
			from: {
				x: 1,
				y: 1,
			},
			item: {
				id: "1",
				title: "First",
				shortTitle: "Ma",
				displayColor: "purple",
				url: "/api/xxxx/1234w",
				xPosition: 1,
				yPosition: 1,
			},
			to: {
				x: 2,
				y: 3,
			},
		};
		await flushPromises();
		expect(wrapper.vm.$refs["1-1"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);
		expect(wrapper.vm.$refs["3-2"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomGroupAvatar"
		);

		const fromAvatarComponent = wrapper.findComponent({ ref: "1-1" });
		fromAvatarComponent.trigger("dragstart");

		const toAvatarComponent = wrapper.findComponent({ ref: "3-2" });
		toAvatarComponent.trigger("drop");

		expect(spyMocks.addGroupElementsMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock).toHaveBeenCalled();
		expect(spyMocks.getElementNameByRefMock).toHaveBeenCalled();
		expect(spyMocks.savePositionMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock.mock.calls[0][0]).toStrictEqual(
			expectedPayload
		);
	});

	it("should call 'setDropElement' method for grouping after ungroup action", async () => {
		const wrapper = getWrapper();
		const expectedPayload = {
			from: {
				x: 2,
				y: 3,
				groupIndex: 0,
			},
			item: {
				id: "5",
				title: "Math 7a",
				displayColor: "yellow",
			},
			to: {
				x: 2,
				y: 1,
			},
		};

		await wrapper.setData({
			groupDialog: {
				isOpen: true,
				groupData: {
					id: "4",
					title: "Fourth",
					shortTitle: "Bi",
					displayColor: "#EC407A",
					url: "/api/xxxx/1234w",
					xPosition: 2,
					yPosition: 3,
					groupElements: [
						{
							id: "5",
							title: "Math 7a",
							displayColor: "yellow",
						},
						{
							id: "6",
							title: "Bio 3a",
							displayColor: "green",
							notification: true,
						},
						{
							id: "7",
							title: "Geo 7b",
							displayColor: "yellow",
						},
					],
				},
			},
		});

		await flushPromises();
		wrapper.vm.$refs.roomModal.$emit(
			"drag-from-group",
			wrapper.vm.groupDialog.groupData.groupElements[0]
		);

		await flushPromises();
		expect(spyMocks.dragFromGroupMock).toHaveBeenCalled();

		const emptyAvatarComponent = wrapper.findComponent({ ref: "1-2" });
		emptyAvatarComponent.trigger("drop");

		expect(spyMocks.setDropElementMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock).toHaveBeenCalled();
		expect(spyMocks.savePositionMock).toHaveBeenCalled();
		expect(spyMocks.storeRoomAlignMock.mock.calls[0][0]).toStrictEqual(
			expectedPayload
		);
	});

	it("should search elements on dashboard", async () => {
		const wrapper = getWrapper();
		await flushPromises();

		expect(wrapper.vm.$refs["1-1"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);

		const searchInput = wrapper.vm.$refs["search"];
		searchInput.$emit("input", "thi");
		await flushPromises();

		expect(wrapper.vm.$refs["2-2"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomEmptyAvatar"
		);
		const avatarComponents = wrapper.findAll(".room-avatar");
		expect(avatarComponents).toHaveLength(1);
	});

	it("should reset search text while dragging", async () => {
		const wrapper = getWrapper();
		await flushPromises();

		expect(wrapper.vm.$refs["1-1"][0].$options["_componentTag"]).toStrictEqual(
			"vRoomAvatar"
		);

		const searchInput = wrapper.vm.$refs["search"];
		searchInput.$emit("input", "thi");
		await flushPromises();
		const avatarComponents = wrapper.findAll(".room-avatar");
		expect(avatarComponents).toHaveLength(1);

		const avatarComponent = wrapper.findComponent({ ref: "0-0" });
		avatarComponent.trigger("dragstart");
		await flushPromises();
		const avatarComponentsAfterDragging = wrapper.findAll(".room-avatar");
		expect(avatarComponentsAfterDragging).toHaveLength(6);
		expect(wrapper.vm.$data.searchText).toStrictEqual("");
	});

	it("should NOT be 'draggable' on mobile devices as default", async () => {
		const wrapper = getWrapper("mobile");
		await flushPromises();

		expect(wrapper.vm.$data.allowDragging).toBe(false);

		const avatarComponent = wrapper.findComponent({ ref: "1-1" });
		const groupComponent = wrapper.findComponent({ ref: "3-2" });
		expect(avatarComponent.vm.$props.draggable).toBe(false);
		expect(groupComponent.vm.$props.draggable).toBe(false);

		avatarComponent.trigger("dragstart");
		expect(wrapper.vm.$data.draggedElement.from).toBeNull();
		groupComponent.trigger("dragstart");
		expect(wrapper.vm.$data.draggedElement.from).toBeNull();
	});

	it("should be 'draggable' on mobile devices if dragging active", async () => {
		const wrapper = getWrapper("mobile");
		await flushPromises();

		wrapper.setData({ allowDragging: true });

		expect(wrapper.vm.allowDragging).toBe(true);
		await wrapper.vm.$nextTick();

		const avatarComponent = wrapper.findComponent({ ref: "1-1" });
		const groupComponent = wrapper.findComponent({ ref: "3-2" });
		expect(avatarComponent.vm.$props.draggable).toBe(true);
		expect(groupComponent.vm.$props.draggable).toBe(true);

		avatarComponent.trigger("dragstart");
		expect(wrapper.vm.$data.draggedElement.from).toStrictEqual({ x: 1, y: 1 });
		groupComponent.trigger("dragstart");
		expect(wrapper.vm.$data.draggedElement.from).toStrictEqual({ x: 2, y: 3 });
	});
});
