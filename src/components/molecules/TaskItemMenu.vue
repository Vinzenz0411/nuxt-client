<template>
	<div>
		<v-menu
			bottom
			left
			offset-y
			attach
			@update:return-value="toggleMenu(false)"
		>
			<template v-slot:activator="{ on, attrs, value }">
				<v-btn
					v-show="show"
					id="task-menu-btn"
					v-bind="attrs"
					icon
					data-testid="task-menu"
					v-on="on"
					@click.prevent="toggleMenu(!value)"
					@keydown.space.stop="toggleMenu(!value)"
					@focus="handleFocus(true)"
					@blur="handleFocus(false)"
				>
					<v-icon>{{ mdiDotsVertical }}</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-if="isTeacher"
					id="task-action-edit"
					:href="editLink"
					class="task-action"
					data-testId="task-edit"
				>
					<v-list-item-title>
						<v-icon class="task-action-icon">
							{{ mdiPencilOutline }}
						</v-icon>
						{{ $t("common.actions.edit") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="isTeacher"
					id="task-action-copy"
					:href="copyLink"
					class="task-action"
					data-testId="task-copy"
				>
					<v-list-item-title>
						<v-icon class="task-action-icon">
							{{ mdiContentCopy }}
						</v-icon>
						{{ $t("common.actions.copy") }}
					</v-list-item-title>
				</v-list-item>
				<v-list-item
					id="task-action-finish"
					class="task-action"
					data-testId="task-finish"
					@click.stop.prevent="handleFinish"
				>
					<v-list-item-title>
						<template v-if="taskIsFinished">
							<v-icon class="task-action-icon">{{ mdiUndo }}</v-icon>
							{{ $t("components.molecules.TaskItemMenu.restore") }}
						</template>
						<template v-else>
							<v-icon class="task-action-icon"> $taskFinished </v-icon>
							{{ $t("components.molecules.TaskItemMenu.finish") }}
						</template>
					</v-list-item-title>
				</v-list-item>
				<v-list-item
					v-if="isTeacher"
					id="task-action-delete"
					class="task-action"
					data-testId="task-delete"
					@click.stop.prevent="() => (confirmDeleteDialogIsOpen = true)"
				>
					<v-list-item-title>
						<v-icon class="task-action-icon">
							{{ mdiTrashCanOutline }}
						</v-icon>
						{{ $t("common.actions.remove") }}
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<v-custom-dialog
			v-model="confirmDeleteDialogIsOpen"
			:size="375"
			has-buttons
			confirm-btn-title-key="common.actions.remove"
			@dialog-confirmed="handleDelete"
		>
			<h2 slot="title" class="text-h4 my-2">
				{{ $t("components.molecules.TaskItemMenu.confirmDelete.title") }}
			</h2>
			<template slot="content">
				<p class="text-md mt-2">
					{{
						$t("components.molecules.TaskItemMenu.confirmDelete.text", {
							taskTitle,
						})
					}}
				</p>
			</template>
		</v-custom-dialog>
	</div>
</template>

<script>
import {
	mdiDotsVertical,
	mdiPencilOutline,
	mdiUndo,
	mdiTrashCanOutline,
	mdiContentCopy,
} from "@mdi/js";
import FinishedTaskModule from "@/store/finished-tasks";
import TaskModule from "@/store/tasks";
import vCustomDialog from "@components/organisms/vCustomDialog";

export default {
	components: { vCustomDialog },
	props: {
		taskId: {
			type: String,
			required: true,
		},
		taskIsFinished: {
			type: Boolean,
			required: true,
		},
		taskTitle: {
			type: String,
			required: false,
			default: "",
		},
		show: {
			type: Boolean,
			required: true,
		},
		userRole: {
			type: String,
			required: true,
			validator: (role) => ["student", "teacher"].includes(role),
		},
	},
	data() {
		return {
			confirmDeleteDialogIsOpen: false,
			mdiDotsVertical,
			mdiPencilOutline,
			mdiUndo,
			mdiTrashCanOutline,
			mdiContentCopy,
		};
	},
	computed: {
		editLink() {
			return `/homework/${this.taskId}/edit`;
		},
		copyLink() {
			return `/homework/${this.taskId}/copy`;
		},
		isTeacher() {
			return this.userRole === "teacher";
		},
	},
	methods: {
		toggleMenu(value) {
			this.$emit("toggled-menu", value);
		},
		handleFocus(value) {
			this.$emit("focus-changed", value);
		},
		handleFinish() {
			if (this.taskIsFinished) {
				FinishedTaskModule.restoreTask(this.taskId);
			} else {
				TaskModule.finishTask(this.taskId);
			}
		},
		handleDelete() {
			TaskModule.deleteTask(this.taskId);
		},
	},
};
</script>

<style lang="scss" scoped>
// stylelint-disable sh-waqar/declaration-use-variable
.task-action {
	min-height: 25px;
}

.task-action-icon {
	width: 1rem;
	height: 1rem;
	margin-top: -2px;
	margin-right: 4px;
	font-size: 1rem;
	color: rgba(0, 0, 0, 0.87);
}
</style>
