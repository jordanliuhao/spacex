/**
 * SpaceX REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ShipLocation } from './shipLocation';
import { ShipMission } from './shipMission';


export interface Ship { 
    abs?: number;
    active?: boolean;
    attemptedLandings?: number;
    _class?: number;
    courseDeg?: number;
    homePort?: string;
    id?: any;
    image?: string;
    imo?: number;
    missions?: Array<ShipMission>;
    mmsi?: number;
    model?: string;
    name?: string;
    position?: ShipLocation;
    roles?: Array<string>;
    speedKn?: number;
    status?: string;
    successfulLandings?: number;
    type?: string;
    url?: string;
    weightKg?: number;
    weightLbs?: number;
    yearBuilt?: number;
}
