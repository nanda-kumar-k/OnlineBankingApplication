import http from "../http-common";

class RLNDataService {
    getAll() {
        return http.get("/rln");
    }

    get(id) {
        return http.get(`/rln/${id}`);
    }

    create(data) {
        return http.post("/rln", data);
    }

    update(id, data) {
        return http.put(`/rln/${id}`, data);
    }

    delete(id) {
        return http.delete(`/rln/${id}`);
    }

    deleteAll() {
        return http.delete(`/rln`);
    }

    findByTitle(title) {
        return http.get(`/rln?title=${title}`);
    }
}

export default new RLNDataService();