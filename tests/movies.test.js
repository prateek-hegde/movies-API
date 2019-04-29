const request = require('supertest')
const Movie = require('../api/models/movies_model')
const mongoose = require('mongoose')
const app = require('../app')

const movieOne = {
    _id: new mongoose.Types.ObjectId,
    title: 'Avengers: Infinity War',
    year: 2018,
    category: 'Action',
    summary: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
}


beforeAll(async () => {
    await Movie.deleteMany()
    await Movie.create(movieOne)
})

test('should add a movie', async () => {
    const response = await request(app).post('/api/add-movie').send({
        title: 'Avengers: End Game',
        year: 2019,
        category: 'Action',
        summary: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe."
    }).expect(200)

})

test('should not add a same movie', async () => {
    await request(app).post('/api/add-movie').send(movieOne).expect(403)
})

test('should fetch all movies', async () => {
    const response = await request(app).get('/api/all-movies')
        .expect(200)

    expect(response.body.length).toEqual(1)

})

test('should delete a movie', async () => {
    const response = await request(app).delete('/api/delete-movie/' + movieOne._id)
        .expect(200)
})