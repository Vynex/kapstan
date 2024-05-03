import { GetRequest } from "./net";

const BASE_URL = "https://retoolapi.dev/";

export async function fetchApplications() {
  const endpoint = new URL("/71NNjB/applications", BASE_URL);
  return await GetRequest(endpoint);
}

export async function fetchMemoryUtilization(appId?: number) {
  const endpoint = new URL("/ybFVVH/memoryutilization", BASE_URL);
  if (appId) endpoint.searchParams.append("applicationId", String(appId));
  return await GetRequest(endpoint);
}

export async function fetchCpuUtilization(appId?: number) {
  const endpoint = new URL("/Ymxfa2/cpuutilization", BASE_URL);
  if (appId) endpoint.searchParams.append("applicationId", String(appId));
  return await GetRequest(endpoint);
}

export async function fetchEventHistory(appId?: number) {
  const endpoint = new URL("/TYjDIe/eventhistory", BASE_URL);
  if (appId) endpoint.searchParams.append("applicationId", String(appId));
  return await GetRequest(endpoint);
}
