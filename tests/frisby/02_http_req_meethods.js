const frisby = require('frisby');

describe('HTTP Request Method: https://www.frisbyjs.com/http.html ', () => {
    it('should be a teapot', function() {
        return frisby.get('http://httpbin.org/status/418')
            .expect('status', 418);
    });

    it('Get should return as status of 200 OK', () => {
        return frisby.get('http://httpbin.org/get')
            .expect('status', 200)
    })

    it(' POST should return a status of201 Created', () => {
        return frisby.post('http://httpbin.org/post', {
                content: 'unpoko',
            }).expect('status', 200)
            .inspectBody().done
    })
})