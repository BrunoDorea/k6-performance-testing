import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    stages: [
        { duration: "5s", target: 20 },
        { duration: "5s", target: 10 },
        { duration: "5s", target: 0 },
    ],
};

export default function () {
    const res = http.get("http://test.k6.io/");
    check(res, {
        "is status 200": (r) => r.status === 200, //verifica se o código de resposta HTTP seja um 200
        "verify homepage text": (r) =>
            r.body.includes(
                "Collection of simple web-pages suitable for load testing"
            ), // verifica há o texto no corpo da resposta
        "body size is 11.010 bytes": (r) => r.body.length == 11010, // verifica o tamanho do corpo da resposta
    });
    sleep(1);
}
