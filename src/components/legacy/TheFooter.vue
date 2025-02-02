<template>
	<footer class="footer">
		<div>
			<template v-for="(link, index) in links">
				<span v-if="index !== 0" :key="index"> - </span>
				<template v-if="!link.innerlinks">
					<base-link :key="link.text" class="footer-link" v-bind="link">{{
						link.text
					}}</base-link>
				</template>
				<template v-else>
					<span :key="link.text">{{ link.text }}: </span>
					<template v-for="(innerlink, innerindex) in link.innerlinks">
						<span v-if="innerindex !== 0" :key="`${index}-${innerindex}`">
							/
						</span>
						<base-link
							:key="innerlink.text"
							v-bind="innerlink"
							class="footer-link"
							>{{ innerlink.text }}</base-link
						>
					</template>
				</template>
			</template>
		</div>
		<p class="bottom-line">
			<span>©{{ currentYear }} schulkaepsele</span>
			| Made with
			<span class="heart">❤</span> in Furtwangen |
		</p>
	</footer>
</template>

<script>
import AuthModule from "@/store/auth";
import FilePathsModule from "@/store/filePaths";
import EnvConfigModule from "@/store/env-config";

export default {
	data() {
		// This solely exists to appear in the coverage report
		return {};
	},
	computed: {
		school() {
			return AuthModule.getSchool;
		},
		currentYear() {
			return new Date().getFullYear();
		},
		links() {
			const links = [
				{
					to: "/imprint",
					text: this.$t("components.legacy.footer.imprint"),
				},
				{
					href: FilePathsModule.getSpecificFiles.termsOfUseSchool,
					text: this.$t("components.legacy.footer.terms"),
					target: "_blank",
					rel: "noopener",
				},
				{
					href: "/datenschutz",
					text: this.$t("components.legacy.footer.privacy_policy"),
					target: "_blank",
					rel: "noopener",
				},
				{
					href: "mailto:support@dbildungscloud.de",
					text: this.$t("components.legacy.footer.contact"),
				},
				{
					href: "https://github.com/hpi-schul-cloud",
					text: this.$t("components.legacy.footer.github"),
				},
			];
			if (EnvConfigModule.getEnv.ALERT_STATUS_URL) {
				links.push({
					href: EnvConfigModule.getEnv.ALERT_STATUS_URL,
					text: this.$t("components.legacy.footer.status"),
					target: "_blank",
					rel: "noopener",
				});
			}
			return links;
		},
	},
};
</script>

<style lang="scss" scoped>
.footer {
	width: 100%;
	padding: 0 var(--space-md);
	margin: var(--space-lg) 0 var(--space-md);
	color: var(--color-secondary-dark);
	text-align: center;
}
.top-line {
	display: flex;
	align-items: center;
	justify-content: center;

	.hpi-logo {
		display: block;
		height: var(--heading-3);
		margin: 0;
	}
}
.bottom-line {
	margin-top: var(--space-xs);

	.heart {
		color: var(--color-primary);
	}

	.poweredby-logo {
		height: 1em;
		vertical-align: middle;
	}
}
.footer-link {
	color: var(--color-primary);
	border: none;
	&:focus,
	&:hover {
		color: var(--color-primary-dark);
		text-decoration: underline;
	}
	&:visited {
		color: var(--color-primary);
	}
}
</style>
