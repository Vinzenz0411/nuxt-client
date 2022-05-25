import base from "@@/src/themes/base/vuetify.options.js";
import { merge } from "lodash";

const custom = {
	theme: {
		themes: {
			light: {
				primary: "#E30614",
				secondary: "#54616e",
				accent: "#E98404",
			},
		},
	},
};

export default merge(base, custom);
