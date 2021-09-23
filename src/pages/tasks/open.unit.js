import dashboard from "./open";
import Vuetify from "vuetify";

describe("Tasks/open", () => {
	let vuetify;

	beforeEach(() => {
		vuetify = new Vuetify();
	});

	it(...isValidComponent(dashboard));

	it("has correct page title set in <head>", () => {
		const wrapper = shallowMount(dashboard, {
			...createComponentMocks({
				i18n: true,
				vuetify: true,
				vueMeta: true,
			}),
			vuetify,
		});

		const title = wrapper.vm.$i18n.t("pages.tasks.title");
		expect(wrapper.vm.$metaInfo.title).toBe(title);
	});
});
