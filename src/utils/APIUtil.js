const API_BASE_URL = "https://opentdb.com";

const request = (options) => {
    
    options = Object.assign({}, options);

    return fetch(options.url, options)
    .then(response =>
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCategory() {
    return request({
        url: API_BASE_URL + "/api_category.php",
        method: 'GET'
    })
}

export function getQuestionByCategoryAndDifficulty(category, difficulty) {
    return request({
        url: API_BASE_URL + "/api.php?amount=10&category=" + category + "&difficulty=" + difficulty + "&type=multiple",
        method: 'GET'
    })
}