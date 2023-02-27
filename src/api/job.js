import Service from "../utils/HttpClient";

export const getJobListApi = async () => Service.get("/job");

export const createJob = async (apiBody) => Service.post('/job', apiBody)

export const editJob = async (apiBody, id) => Service.put(`/job/${id}`, apiBody)

export const deleteJob = async (id) => Service.delete(`/job/${id}`)