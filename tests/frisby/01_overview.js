const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

describe('This test is copy from https://www.frisbyjs.com', () => {
    it('should return a status of 200', function() {
        return frisby
            .get('https://httpbin.org')
            .expect('status', 200)
    })

    it('should return a status of 200', function() {
        return frisby
            .get('https://jsonfeed.org/feed.json')
            .expect('status', 200)
            .expect('json', 'version', 'https://jsonfeed.org/version/1')
            .expect('json', 'title', 'JSON Feed')
            .expect('jsonTypes', 'items.*', { // Assert *each* object in 'items' array
                'id': Joi.string().required(),
                'url': Joi.string().uri().required(),
                'title': Joi.string().required(),
                'date_published': Joi.date().iso().required(),
            })
    })
})