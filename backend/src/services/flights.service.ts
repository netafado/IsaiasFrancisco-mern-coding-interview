import { FlightsModel } from '../models/flights.model'

export class FlightsService {
    async getAll() {
        const allFlights = await FlightsModel.find({})
        console.log(allFlights)
        return allFlights
    }
}
