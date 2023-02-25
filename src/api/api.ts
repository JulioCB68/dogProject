import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
	baseURL: "https://api.thedogapi.com/v1",
	headers: {
		"x-api-key":
			"live_niEzYtu1gfFs9QGdeG1fmdvHnxaOabI8tnJoxdg2dyXsr5h0HKYXtlSNwr0xRNRT",
	},
});
