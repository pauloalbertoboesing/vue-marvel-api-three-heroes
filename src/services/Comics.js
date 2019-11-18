export default class Comics {
    constructor(axios, defaultParms) {
        this._axios = axios;
        this._defaultParms = defaultParms;
    }

    getComicsByIdCharacter(id) {
        let params = {};
        Object.assign(params,this._defaultParms)
        params.orderBy = '-onsaleDate'
        params.limit = 5

        if (id == undefined)
            throw new Error('Unspecified Id Character');

        return this._axios.get(`/characters/${id}/comics`,  {params})

    }
};