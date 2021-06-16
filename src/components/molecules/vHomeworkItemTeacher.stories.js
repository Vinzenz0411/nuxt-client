import { storiesOf } from "@storybook/vue";
import vHomeworkItemTeacher from "@components/molecules/vHomeworkItemTeacher";
import { homeworks } from "@@/stories/mockData/Homeworks";

storiesOf("0 Vuetify/Molecules", module).add("vHomeworkItemTeacher", () => ({
	components: {
		vHomeworkItemTeacher,
	},
	data: () => ({
		homework: homeworks[0],
	}),
	template: `
		<v-app>
			<h1 class="h4">VHomeworkItemTeacher</h1>
			<v-list subheader two-line>
				<v-homework-item-teacher :homework="homework"/>
			</v-list>
		</v-app>`,
}));
