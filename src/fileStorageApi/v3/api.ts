/* tslint:disable */
/* eslint-disable */
/**
 * HPI Schul-Cloud Server API
 * This is v3 of HPI Schul-Cloud Server. Checkout /docs for v1.
 *
 * The version of the OpenAPI document: 3.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from "./configuration";
import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
	DUMMY_BASE_URL,
	assertParamExists,
	setApiKeyToObject,
	setBasicAuthToObject,
	setBearerAuthToObject,
	setOAuthToObject,
	setSearchParams,
	serializeDataIfNeeded,
	toPathString,
	createRequestFunction,
} from "./common";
// @ts-ignore
import {
	BASE_PATH,
	COLLECTION_FORMATS,
	RequestArgs,
	BaseAPI,
	RequiredError,
} from "./base";

/**
 *
 * @export
 * @interface FileRecordListResponse
 */
export interface FileRecordListResponse {
	/**
	 *
	 * @type {Array<FileRecordResponse>}
	 * @memberof FileRecordListResponse
	 */
	data: Array<FileRecordResponse>;
	/**
	 *
	 * @type {number}
	 * @memberof FileRecordListResponse
	 */
	total: number;
	/**
	 *
	 * @type {number}
	 * @memberof FileRecordListResponse
	 */
	skip: number;
	/**
	 *
	 * @type {number}
	 * @memberof FileRecordListResponse
	 */
	limit: number;
}
/**
 *
 * @export
 * @interface FileRecordResponse
 */
export interface FileRecordResponse {
	/**
	 *
	 * @type {string}
	 * @memberof FileRecordResponse
	 */
	id: string;
	/**
	 *
	 * @type {string}
	 * @memberof FileRecordResponse
	 */
	name: string;
	/**
	 *
	 * @type {string}
	 * @memberof FileRecordResponse
	 */
	parentId: string;
	/**
	 *
	 * @type {string}
	 * @memberof FileRecordResponse
	 */
	creatorId: string;
	/**
	 *
	 * @type {string}
	 * @memberof FileRecordResponse
	 */
	type: string;
	/**
	 *
	 * @type {string}
	 * @memberof FileRecordResponse
	 */
	parentType: string;
}
/**
 *
 * @export
 * @interface RenameFileParams
 */
export interface RenameFileParams {
	/**
	 *
	 * @type {string}
	 * @memberof RenameFileParams
	 */
	fileName: string;
}

/**
 * FileApi - axios parameter creator
 * @export
 */
export const FileApiAxiosParamCreator = function (
	configuration?: Configuration
) {
	return {
		/**
		 *
		 * @param {string} fileRecordId
		 * @param {string} fileName
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerDownload: async (
			fileRecordId: string,
			fileName: string,
			options: any = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'fileRecordId' is not null or undefined
			assertParamExists(
				"filesStorageControllerDownload",
				"fileRecordId",
				fileRecordId
			);
			// verify required parameter 'fileName' is not null or undefined
			assertParamExists("filesStorageControllerDownload", "fileName", fileName);
			const localVarPath = `/file/download/{fileRecordId}/{fileName}`
				.replace(
					`{${"fileRecordId"}}`,
					encodeURIComponent(String(fileRecordId))
				)
				.replace(`{${"fileName"}}`, encodeURIComponent(String(fileName)));
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: "GET",
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication bearer required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 *
		 * @param {string} schoolId
		 * @param {string} parentId
		 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
		 * @param {number} [skip] Number of elements (not pages) to be skipped
		 * @param {number} [limit] Page limit, defaults to 10.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerList: async (
			schoolId: string,
			parentId: string,
			parentType:
				| "users"
				| "schools"
				| "courses"
				| "teams"
				| "dashboard"
				| "tasks",
			skip?: number,
			limit?: number,
			options: any = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'schoolId' is not null or undefined
			assertParamExists("filesStorageControllerList", "schoolId", schoolId);
			// verify required parameter 'parentId' is not null or undefined
			assertParamExists("filesStorageControllerList", "parentId", parentId);
			// verify required parameter 'parentType' is not null or undefined
			assertParamExists("filesStorageControllerList", "parentType", parentType);
			const localVarPath = `/file/list/{schoolId}/{parentType}/{parentId}`
				.replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)))
				.replace(`{${"parentId"}}`, encodeURIComponent(String(parentId)))
				.replace(`{${"parentType"}}`, encodeURIComponent(String(parentType)));
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: "GET",
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication bearer required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			if (skip !== undefined) {
				localVarQueryParameter["skip"] = skip;
			}

			if (limit !== undefined) {
				localVarQueryParameter["limit"] = limit;
			}

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 *
		 * @param {string} fileRecordId
		 * @param {RenameFileParams} renameFileParams
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerPatchFilename: async (
			fileRecordId: string,
			renameFileParams: RenameFileParams,
			options: any = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'fileRecordId' is not null or undefined
			assertParamExists(
				"filesStorageControllerPatchFilename",
				"fileRecordId",
				fileRecordId
			);
			// verify required parameter 'renameFileParams' is not null or undefined
			assertParamExists(
				"filesStorageControllerPatchFilename",
				"renameFileParams",
				renameFileParams
			);
			const localVarPath = `/file/rename/{fileRecordId}`.replace(
				`{${"fileRecordId"}}`,
				encodeURIComponent(String(fileRecordId))
			);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: "PATCH",
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication bearer required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			localVarHeaderParameter["Content-Type"] = "application/json";

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				renameFileParams,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 *
		 * @param {string} schoolId
		 * @param {string} parentId
		 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
		 * @param {any} file
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerUpload: async (
			schoolId: string,
			parentId: string,
			parentType:
				| "users"
				| "schools"
				| "courses"
				| "teams"
				| "dashboard"
				| "tasks",
			file: any,
			options: any = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'schoolId' is not null or undefined
			assertParamExists("filesStorageControllerUpload", "schoolId", schoolId);
			// verify required parameter 'parentId' is not null or undefined
			assertParamExists("filesStorageControllerUpload", "parentId", parentId);
			// verify required parameter 'parentType' is not null or undefined
			assertParamExists(
				"filesStorageControllerUpload",
				"parentType",
				parentType
			);
			// verify required parameter 'file' is not null or undefined
			assertParamExists("filesStorageControllerUpload", "file", file);
			const localVarPath = `/file/upload/{schoolId}/{parentType}/{parentId}`
				.replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)))
				.replace(`{${"parentId"}}`, encodeURIComponent(String(parentId)))
				.replace(`{${"parentType"}}`, encodeURIComponent(String(parentType)));
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: "POST",
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;
			const localVarFormParams = new ((configuration &&
				configuration.formDataCtor) ||
				FormData)();

			// authentication bearer required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			if (file !== undefined) {
				localVarFormParams.append("file", file as any);
			}

			localVarHeaderParameter["Content-Type"] = "multipart/form-data";

			setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};
			localVarRequestOptions.data = localVarFormParams;

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	};
};

/**
 * FileApi - functional programming interface
 * @export
 */
export const FileApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator = FileApiAxiosParamCreator(configuration);
	return {
		/**
		 *
		 * @param {string} fileRecordId
		 * @param {string} fileName
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async filesStorageControllerDownload(
			fileRecordId: string,
			fileName: string,
			options?: any
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.filesStorageControllerDownload(
					fileRecordId,
					fileName,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 *
		 * @param {string} schoolId
		 * @param {string} parentId
		 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
		 * @param {number} [skip] Number of elements (not pages) to be skipped
		 * @param {number} [limit] Page limit, defaults to 10.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async filesStorageControllerList(
			schoolId: string,
			parentId: string,
			parentType:
				| "users"
				| "schools"
				| "courses"
				| "teams"
				| "dashboard"
				| "tasks",
			skip?: number,
			limit?: number,
			options?: any
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string
			) => AxiosPromise<FileRecordListResponse>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.filesStorageControllerList(
					schoolId,
					parentId,
					parentType,
					skip,
					limit,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 *
		 * @param {string} fileRecordId
		 * @param {RenameFileParams} renameFileParams
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async filesStorageControllerPatchFilename(
			fileRecordId: string,
			renameFileParams: RenameFileParams,
			options?: any
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string
			) => AxiosPromise<FileRecordResponse>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.filesStorageControllerPatchFilename(
					fileRecordId,
					renameFileParams,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 *
		 * @param {string} schoolId
		 * @param {string} parentId
		 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
		 * @param {any} file
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async filesStorageControllerUpload(
			schoolId: string,
			parentId: string,
			parentType:
				| "users"
				| "schools"
				| "courses"
				| "teams"
				| "dashboard"
				| "tasks",
			file: any,
			options?: any
		): Promise<
			(
				axios?: AxiosInstance,
				basePath?: string
			) => AxiosPromise<FileRecordResponse>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.filesStorageControllerUpload(
					schoolId,
					parentId,
					parentType,
					file,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
	};
};

/**
 * FileApi - factory interface
 * @export
 */
export const FileApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance
) {
	const localVarFp = FileApiFp(configuration);
	return {
		/**
		 *
		 * @param {string} fileRecordId
		 * @param {string} fileName
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerDownload(
			fileRecordId: string,
			fileName: string,
			options?: any
		): AxiosPromise<void> {
			return localVarFp
				.filesStorageControllerDownload(fileRecordId, fileName, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 *
		 * @param {string} schoolId
		 * @param {string} parentId
		 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
		 * @param {number} [skip] Number of elements (not pages) to be skipped
		 * @param {number} [limit] Page limit, defaults to 10.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerList(
			schoolId: string,
			parentId: string,
			parentType:
				| "users"
				| "schools"
				| "courses"
				| "teams"
				| "dashboard"
				| "tasks",
			skip?: number,
			limit?: number,
			options?: any
		): AxiosPromise<FileRecordListResponse> {
			return localVarFp
				.filesStorageControllerList(
					schoolId,
					parentId,
					parentType,
					skip,
					limit,
					options
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 *
		 * @param {string} fileRecordId
		 * @param {RenameFileParams} renameFileParams
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerPatchFilename(
			fileRecordId: string,
			renameFileParams: RenameFileParams,
			options?: any
		): AxiosPromise<FileRecordResponse> {
			return localVarFp
				.filesStorageControllerPatchFilename(
					fileRecordId,
					renameFileParams,
					options
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 *
		 * @param {string} schoolId
		 * @param {string} parentId
		 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
		 * @param {any} file
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		filesStorageControllerUpload(
			schoolId: string,
			parentId: string,
			parentType:
				| "users"
				| "schools"
				| "courses"
				| "teams"
				| "dashboard"
				| "tasks",
			file: any,
			options?: any
		): AxiosPromise<FileRecordResponse> {
			return localVarFp
				.filesStorageControllerUpload(
					schoolId,
					parentId,
					parentType,
					file,
					options
				)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * FileApi - interface
 * @export
 * @interface FileApi
 */
export interface FileApiInterface {
	/**
	 *
	 * @param {string} fileRecordId
	 * @param {string} fileName
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApiInterface
	 */
	filesStorageControllerDownload(
		fileRecordId: string,
		fileName: string,
		options?: any
	): AxiosPromise<void>;

	/**
	 *
	 * @param {string} schoolId
	 * @param {string} parentId
	 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
	 * @param {number} [skip] Number of elements (not pages) to be skipped
	 * @param {number} [limit] Page limit, defaults to 10.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApiInterface
	 */
	filesStorageControllerList(
		schoolId: string,
		parentId: string,
		parentType:
			| "users"
			| "schools"
			| "courses"
			| "teams"
			| "dashboard"
			| "tasks",
		skip?: number,
		limit?: number,
		options?: any
	): AxiosPromise<FileRecordListResponse>;

	/**
	 *
	 * @param {string} fileRecordId
	 * @param {RenameFileParams} renameFileParams
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApiInterface
	 */
	filesStorageControllerPatchFilename(
		fileRecordId: string,
		renameFileParams: RenameFileParams,
		options?: any
	): AxiosPromise<FileRecordResponse>;

	/**
	 *
	 * @param {string} schoolId
	 * @param {string} parentId
	 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
	 * @param {any} file
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApiInterface
	 */
	filesStorageControllerUpload(
		schoolId: string,
		parentId: string,
		parentType:
			| "users"
			| "schools"
			| "courses"
			| "teams"
			| "dashboard"
			| "tasks",
		file: any,
		options?: any
	): AxiosPromise<FileRecordResponse>;
}

/**
 * FileApi - object-oriented interface
 * @export
 * @class FileApi
 * @extends {BaseAPI}
 */
export class FileApi extends BaseAPI implements FileApiInterface {
	/**
	 *
	 * @param {string} fileRecordId
	 * @param {string} fileName
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApi
	 */
	public filesStorageControllerDownload(
		fileRecordId: string,
		fileName: string,
		options?: any
	) {
		return FileApiFp(this.configuration)
			.filesStorageControllerDownload(fileRecordId, fileName, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 *
	 * @param {string} schoolId
	 * @param {string} parentId
	 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
	 * @param {number} [skip] Number of elements (not pages) to be skipped
	 * @param {number} [limit] Page limit, defaults to 10.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApi
	 */
	public filesStorageControllerList(
		schoolId: string,
		parentId: string,
		parentType:
			| "users"
			| "schools"
			| "courses"
			| "teams"
			| "dashboard"
			| "tasks",
		skip?: number,
		limit?: number,
		options?: any
	) {
		return FileApiFp(this.configuration)
			.filesStorageControllerList(
				schoolId,
				parentId,
				parentType,
				skip,
				limit,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 *
	 * @param {string} fileRecordId
	 * @param {RenameFileParams} renameFileParams
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApi
	 */
	public filesStorageControllerPatchFilename(
		fileRecordId: string,
		renameFileParams: RenameFileParams,
		options?: any
	) {
		return FileApiFp(this.configuration)
			.filesStorageControllerPatchFilename(
				fileRecordId,
				renameFileParams,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 *
	 * @param {string} schoolId
	 * @param {string} parentId
	 * @param {'users' | 'schools' | 'courses' | 'teams' | 'dashboard' | 'tasks'} parentType
	 * @param {any} file
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileApi
	 */
	public filesStorageControllerUpload(
		schoolId: string,
		parentId: string,
		parentType:
			| "users"
			| "schools"
			| "courses"
			| "teams"
			| "dashboard"
			| "tasks",
		file: any,
		options?: any
	) {
		return FileApiFp(this.configuration)
			.filesStorageControllerUpload(
				schoolId,
				parentId,
				parentType,
				file,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}
}