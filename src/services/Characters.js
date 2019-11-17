export default class Characters {
    constructor(axios, defaultParms) {
        this._axios = axios;
        this._defaultParms = defaultParms;
    }

    getMyFavorites() {
        let promisses = []

        if (this._characters == undefined)
            throw new Error('Unspecified Character List');

        
        this._characters.forEach(value => {
            let params = {};
            Object.assign(params,this._defaultParms)
            params.name = value
            promisses.push(this._axios.get('/characters',  {params}))
        })

        return Promise.all(promisses)
    }

    setMyFavorites(characters) {
        this._characters = characters
    }

};