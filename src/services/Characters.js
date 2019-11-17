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
            this._defaultParms.name = value
            promisses.push(this._axios.get('/characters',  {params: this._defaultParms}))
        })

        return Promise.all(promisses)
    }

    setMyFavorites(characters) {
        this._characters = characters
    }

};