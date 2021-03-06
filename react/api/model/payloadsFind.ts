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


export interface PayloadsFind { 
    apoapsisKm?: number;
    customer?: string;
    eccentricity?: number;
    epoch?: any;
    inclinationDeg?: number;
    lifespanYears?: number;
    longitude?: number;
    manufacturer?: string;
    meanMotion?: number;
    nationality?: string;
    noradId?: number;
    orbit?: string;
    payloadId?: any;
    payloadType?: string;
    periapsisKm?: number;
    periodMin?: number;
    raan?: number;
    referenceSystem?: string;
    regime?: string;
    reused?: boolean;
    semiMajorAxisKm?: number;
}
