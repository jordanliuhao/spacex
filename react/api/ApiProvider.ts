import { DefaultService } from '../api/api/default.service'
import { IAPIConfiguration } from '../api/IAPIConfiguration'
import HttpClient from '../api/HttpClient'

const config: IAPIConfiguration = {
    basePath: "https://api.spacexdata.com/v3",
    withCredentials: false
}

const httpClient = new HttpClient()
const swagger = new DefaultService(httpClient, config)

export const getLaunches = () => 
    swagger.launchesQuery()

