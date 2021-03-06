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
import { CapsuleMission } from './capsuleMission';


export interface Core { 
    asdsAttempts?: number;
    asdsLandings?: number;
    block?: number;
    id?: any;
    missions?: Array<CapsuleMission>;
    originalLaunch?: any;
    reuseCount?: number;
    rtlsAttempts?: number;
    rtlsLandings?: number;
    status?: string;
    waterLanding?: boolean;
}
