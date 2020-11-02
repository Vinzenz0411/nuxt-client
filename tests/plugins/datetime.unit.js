import {
	printDate,
	currentDate,
	fromInputDateTime,
	fromNow,
	createInputDateTime,
	inputRangeDate,
	inputDateFromDeUTC,
	printDateFromDeUTC,
	setDefaultTimezone,
	getUtcOffset,
	setDefaultFormats,
	DATETIME_FORMAT,
} from "@plugins/datetime";
import datetime from "@plugins/datetime";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"; // dependent on utc plugin
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

const TEST_DATETIME_TIMEZONE = "America/New_York";
const TEST_DATETIME_OFFSET = "-04:00";
const TEST_USER_TIMEZONE = "Europe/Berlin";
const TEST_USER_OFFSET = "+01:00";
const TEST_CURRENT_LOCALE = "en";

const translations = {
	en: require("@locale/en.json"),
	de: require("@locale/de.json"),
};

const defaultFormats = {
	...DATETIME_FORMAT,
};

const localizedFormats = {
	de: {
		...defaultFormats,
		date: translations["de"]["format.date"],
		dateTime: translations["de"]["format.dateTime"],
		dateLong: translations["de"]["format.dateLong"],
		time: translations["de"]["format.time"],
	},
	en: {
		...defaultFormats,
		date: translations["en"]["format.date"],
		dateTime: translations["en"]["format.dateTime"],
		dateLong: translations["en"]["format.dateLong"],
		time: translations["en"]["format.time"],
	},
};

setDefaultTimezone(TEST_DATETIME_TIMEZONE);

describe("@plugins/datetime", () => {
	const dateString = "2019-01-25T02:00:00.000Z";
	const dateUTC = dayjs(dateString);
	const dateLocal = dayjs(dateString).tz(TEST_DATETIME_TIMEZONE);
	const dateNow = dayjs().tz(TEST_DATETIME_TIMEZONE);

	const dateUTCString = dateUTC.format("DD.MM.YYYY");
	const dateLocalString = dateLocal.format("DD.MM.YYYY");

	const dateFormat = dateLocal.format("YYYY-MM-DD");
	const time = dateLocal.format("HH:mm");

	it("getUtcOffset", () => {
		const result = getUtcOffset();
		expect(result).toBe(TEST_DATETIME_OFFSET);
	});

	it("currentDate", () => {
		// to avoid diffrence in milliseconds slice was used
		const result = currentDate().toISOString().slice(0, -5);
		expect(result).toBe(new Date().toISOString().slice(0, -5));
	});

	it("printDateFromDeUTC", () => {
		const result = printDateFromDeUTC(dateUTCString);
		expect(result).toBe(dateLocalString);
		expect(printDateFromDeUTC(null)).toBeNull();
		expect(printDateFromDeUTC("")).toBeNull();
	});

	it("inputDateFromDeUTC", () => {
		const result = inputDateFromDeUTC(dateUTCString);
		expect(result).toBe(dateLocal.format("YYYY-MM-DD"));
		expect(inputDateFromDeUTC(null)).toBeNull();
		expect(inputDateFromDeUTC("")).toBeNull();
	});

	it("printDate", () => {
		const result = printDate(dateNow.format("YYYY-MM-DD HH:mm"));
		expect(result).toBe(dateNow.format("DD.MM.YYYY"));
	});

	it("inputRangeDate", () => {
		const result1 = inputRangeDate(10, "y");
		expect(result1).toBe(dateNow.clone().add(10, "years").format("YYYY-MM-DD"));

		const result2 = inputRangeDate(5);
		expect(result2).toBe(dateNow.clone().add(5, "years").format("YYYY-MM-DD"));

		const result3 = inputRangeDate();
		expect(result3).toBe(dateNow.clone().format("YYYY-MM-DD"));
	});

	it("fromNow", () => {
		const result = fromNow(dateNow.clone().add(7, "days"));
		expect(result).toBe("in 7 days");
	});

	it("fromInputDateTime", () => {
		const result1 = fromInputDateTime(dateFormat, time);
		expect(result1.format()).toStrictEqual(dateLocal.format());

		const expectDate = dayjs.tz(dateFormat, TEST_DATETIME_TIMEZONE);
		const result2 = fromInputDateTime(dateFormat);
		expect(result2.format()).toStrictEqual(expectDate.format());
	});

	it("createInputDateTime", () => {
		const [resultDate, resultTime] = createInputDateTime(dateString);
		expect(resultDate).toStrictEqual(dateFormat);
		expect(resultTime).toStrictEqual(time);
	});

	const mockApp = {
		$cookies: {
			get: jest
				.fn()
				.mockReturnValueOnce(null)
				.mockReturnValueOnce(TEST_USER_TIMEZONE)
				.mockReturnValue(TEST_DATETIME_TIMEZONE),
		},
		$datetime: {
			currentTimezone: TEST_USER_TIMEZONE,
		},
		i18n: {
			t: (key) => translations[TEST_CURRENT_LOCALE]?.[key] || key,
		},
	};

	const mockStore = {
		state: { auth: { school: { timezone: TEST_DATETIME_TIMEZONE } } },
		getters: {
			"auth/getLocale": () => {
				return TEST_CURRENT_LOCALE;
			},
		},
	};

	it("init", () => {
		datetime({ app: mockApp, store: mockStore });
		expect(mockApp.$datetime).toStrictEqual({
			currentTimezone: TEST_DATETIME_TIMEZONE,
			currentTimezoneOffset: TEST_DATETIME_OFFSET,
			userTimezone: undefined,
			userHasSchoolTimezone: false,
		});

		datetime({ app: mockApp, store: mockStore });
		expect(mockApp.$datetime).toStrictEqual({
			currentTimezone: TEST_DATETIME_TIMEZONE,
			currentTimezoneOffset: TEST_DATETIME_OFFSET,
			userTimezone: TEST_USER_TIMEZONE,
			userHasSchoolTimezone: false,
		});

		datetime({ app: mockApp, store: mockStore });
		expect(mockApp.$datetime).toStrictEqual({
			currentTimezone: TEST_DATETIME_TIMEZONE,
			currentTimezoneOffset: TEST_DATETIME_OFFSET,
			userTimezone: TEST_DATETIME_TIMEZONE,
			userHasSchoolTimezone: true,
		});

		datetime({ app: mockApp, store: { ...mockStore, getters: {} } });
		expect(mockApp.$datetime).toStrictEqual({
			currentTimezone: TEST_DATETIME_TIMEZONE,
			currentTimezoneOffset: TEST_DATETIME_OFFSET,
			userTimezone: TEST_DATETIME_TIMEZONE,
			userHasSchoolTimezone: true,
		});

		datetime({ app: mockApp, store: { ...mockStore, state: {} } });
		expect(mockApp.$datetime).toStrictEqual({
			currentTimezone: TEST_USER_TIMEZONE,
			currentTimezoneOffset: TEST_USER_OFFSET,
			userTimezone: TEST_DATETIME_TIMEZONE,
			userHasSchoolTimezone: true,
		});
	});

	it("setDefaultFormats", () => {
		expect(setDefaultFormats(mockApp)).toStrictEqual(
			localizedFormats[TEST_CURRENT_LOCALE]
		);
		expect(setDefaultFormats({ ...mockApp, i18n: null })).toStrictEqual(
			localizedFormats[TEST_CURRENT_LOCALE]
		);
	});
});