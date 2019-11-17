export default class Comics {
    constructor(axios, defaultParms) {
        this._axios = axios;
        this._defaultParms = defaultParms;
    }

    getComicsByIdCharacters(listIdsCharacters) {
        let promisses = []

        if (listIdsCharacters == undefined)
            throw new Error('Unspecified Ids Characters List');

        
        listIdsCharacters.forEach(value => {
            let params = {};
            Object.assign(params,this._defaultParms)
            params.orderBy = '-onsaleDate'
            params.limit = 5
            promisses.push(this._axios.get(`/characters/${value}/comics`,  {params}))
        })

        return Promise.all(promisses)
    }
};