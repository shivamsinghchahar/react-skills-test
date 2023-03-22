import http from "./axios";

export const trait = () => http.get("/trait.json");
export const traits = () => http.get("/traits.json");
