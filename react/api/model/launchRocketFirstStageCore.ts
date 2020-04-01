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
import { Core } from './core';


export interface LaunchRocketFirstStageCore { 
    block?: number;
    core?: Core;
    flight?: number;
    gridfins?: boolean;
    landSuccess?: boolean;
    landingIntent?: boolean;
    landingType?: string;
    landingVehicle?: string;
    legs?: boolean;
    reused?: boolean;
}
