import axios from "axios";

async function find() {
    const response = await axios.get(process.env.GATSBY_CMS_HOST + "/blog-posts?_sort=dateWritten:DESC", {
    }).then(response => {
        return response;
    }).catch(error => {
        return false;
    });

    return response;
}

async function findOne(id) {
    const response = await axios.get(`${process.env.GATSBY_CMS_HOST}/blog-posts/${id}`, {
    }).then(response => {
        return response;
    }).catch(error => {
        return false;
    });

    return response;
}

export const blogService = {
    find,
    findOne
};