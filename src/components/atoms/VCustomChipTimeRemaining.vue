<template>
	<v-chip
		v-if="type === 'warning'"
		color="orange lighten-3"
		small
		data-test-id="dueDateHintLabel"
	>
		<v-icon left small> $hourglassBottomBlack </v-icon>
		{{ hintDueDate(dueDate, shortenUnit) }}
	</v-chip>
</template>

<script>
import { fromNowToFuture } from "@plugins/datetime";
import dayjs from "dayjs";

export default {
	props: {
		type: {
			type: String,
			required: true,
			validator: (value) => ["warning"].includes(value),
		},
		dueDate: {
			type: String,
			required: true,
			validator: (value) => dayjs(value).isValid(),
		},
		shortenUnit: {
			type: Boolean,
			required: false,
		},
	},
	methods: {
		hintDueDate(dueDate, shorten = false) {
			const diffHrs = fromNowToFuture(dueDate, "hours");
			if (diffHrs === 0) {
				const diffMins = fromNowToFuture(dueDate, "minutes");

				const label = shorten
					? this.$t("components.atoms.VCustomChipTimeRemaining.hintMinShort")
					: this.$tc(
							"components.atoms.VCustomChipTimeRemaining.hintMinutes",
							diffMins
					  );

				return `${this.$t(
					"components.atoms.VCustomChipTimeRemaining.hintDueTime"
				)} ${diffMins} ${label}`;
			} else {
				const label = shorten
					? this.$t("components.atoms.VCustomChipTimeRemaining.hintHoursShort")
					: this.$tc(
							"components.atoms.VCustomChipTimeRemaining.hintHours",
							diffHrs
					  );
				return `${this.$t(
					"components.atoms.VCustomChipTimeRemaining.hintDueTime"
				)} ${diffHrs} ${label}`;
			}
		},
	},
};
</script>
