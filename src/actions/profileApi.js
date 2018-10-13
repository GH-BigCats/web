import {LOCAL_STORAGE_ACCESS_TOKEN}         from "../auth/UserAuth";
import {getOrgEndpoint}                     from "../utils/endpoints";
const superagent = require('superagent');

const examplePost = (orgId) => () => {
    superagent.post(`${getOrgEndpoint}/${orgId}/location`)
        .set('Authorization', `Bearer ${localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN)}`)
        .set('Accept', 'application/json')
        .send(
            {
                // json body
            }
        )
        .end((err, res) => {
        });
};