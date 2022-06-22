export default [
	{
		title: "global.sidebar.overview",
		href: "/dashboard",
		icon: "th-large",
		testId: "Übersicht",
	},
	{
		title: "global.sidebar.plans",
		href: "/plans",
		icon: "table",
		testId: "Pläne",
		children: [
			{
				title: "global.sidebar.calendar",
				icon: "table",
				href: "/calendar/",
				testId: "Stundenplan",
			},
			{
				title: "global.sidebar.vertretung",
				icon: "table",
				href: "/vertretung/",
				testId: "Vertretungsplan",
			},
			{
				title: "global.sidebar.mensa",
				href: "/mensa/",
				icon: "table",
				permission: "TEAMS_ENABLED",
				testId: "Mensaplan",
			},
		],
	}, 
	{
		title: "global.sidebar.courses",
		href: "/courses",
		icon: "graduation-cap",
		testId: "Kurse",
		linkType: "legacyCourse",
		visibility: "false",
	},
	{
		title: "global.sidebar.courses",
		to: "/rooms-overview",
		icon: "graduation-cap",
		testId: "Course-Overview",
		linkType: "nuxtCourse",
		visibility: "false",
	},
	{
		title: "global.sidebar.tasks",
		to: "/tasks",
		icon: "tasks",
		source: "custom",
		permission: "TASK_DASHBOARD_VIEW_V3",
		testId: "Aufgaben",
	},
	{
		title: "global.sidebar.teams",
		href: "/teams",
		icon: "users",
		permission: "TEAMS_ENABLED",
		testId: "Teams",
	},
	{
		title: "global.sidebar.tasks",
		to: "/tasks",
		icon: "tasks",
		source: "custom",
		permission: "TASK_DASHBOARD_TEACHER_VIEW_V3",
		testId: "Aufgaben",
	},
	{
		title: "global.sidebar.networking",
		href: "/networking/",
		icon: "newspaper-o",
		testId: "Meine Dateien",
		children: [
			{
				title: "global.sidebar.chat",
				icon: "folder-open-o",
				href: "/chat/",
				testId: "Chat",
			},
			{
				title: "global.sidebar.marktplatz",
				icon: "newspaper-o",
				href: "/marktplatz/",
				testId: "Marktplatz",
			},
			{
				title: "pages.news.title",
				href: "/news/",
				icon: "folder-open-o",
				testId: "Neuigkeiten",
			},
			{
				title: "global.sidebar.lernstore",
				to: "/content",
				icon: "search",
				permission: "LERNSTORE_VIEW",
				testId: "Lern-Store",
			},
		],
	},
	{
		title: "global.sidebar.files",
		href: "/files",
		icon: "folder-open",
		testId: "Meine Dateien",
		children: [
			{
				title: "global.sidebar.filesPersonal",
				icon: "folder-open-o",
				href: "/files/my/",
				testId: "persönliche Dateien",
			},
			{
				title: "global.sidebar.courses",
				icon: "folder-open-o",
				href: "/files/courses/",
				testId: "Kurse",
			},
			{
				title: "global.sidebar.teams",
				href: "/files/teams/",
				icon: "folder-open-o",
				permission: "TEAMS_ENABLED",
				testId: "Teams",
			},
			{
				title: "global.sidebar.filesShared",
				icon: "folder-open-o",
				href: "/files/shared/",
				testId: "geteilte Dateien",
			},
		],
	},
	{
		title: "global.sidebar.games",
		to: "/games/",
		icon: "puzzle-piece",
		testId: "Aufgaben",
	},
	{
		title: "global.sidebar.management",
		href: "/administration",
		icon: "cogs",
		permission: "TEACHER_LIST",
		excludedPermission: "ADMIN_VIEW",
		testId: "Verwaltung",
		children: [
			{
				title: "global.sidebar.student",
				icon: "odnoklassniki",
				to: "/administration/students/",
				permission: "STUDENT_LIST",
				testId: "Schüler:innen",
			},
			{
				title: "global.sidebar.teacher",
				icon: "user",
				to: "/administration/teachers/",
				testId: "Lehrkräfte",
			},
			{
				title: "global.sidebar.classes",
				icon: "users",
				href: "/administration/classes/",
				testId: "Klassen",
			},
		],
	},
	{
		title: "global.sidebar.management",
		href: "/administration/",
		icon: "cogs",
		permission: "ADMIN_VIEW",
		testId: "Verwaltung",
		children: [
			{
				title: "global.sidebar.student",
				icon: "odnoklassniki",
				to: "/administration/students/",
				testId: "Schüler:innen",
			},
			{
				title: "global.sidebar.teacher",
				icon: "user",
				to: "/administration/teachers/",
				testId: "Lehrkräfte",
			},
			{
				title: "global.sidebar.courses",
				icon: "graduation-cap",
				href: "/administration/courses/",
				testId: "Kurse",
			},
			{
				title: "global.sidebar.classes",
				icon: "users",
				href: "/administration/classes/",
				testId: "Klassen",
			},
			{
				title: "global.sidebar.teams",
				icon: "users",
				href: "/administration/teams/",
				testId: "Teams",
			},
			{
				title: "global.sidebar.school",
				icon: "building",
				href: "/administration/school/",
				testId: "Schule",
			},
		],
	},
	{
		title: "global.sidebar.helpArea",
		href: "/help",
		icon: "question-circle",
		testId: "Hilfebereich",
	},
	{
		title: "global.sidebar.myMaterial",
		href: "/my-material/",
		icon: "book",
		permission: "BETA_FEATURES",
		testId: "Meine Materialien",
	},
];
