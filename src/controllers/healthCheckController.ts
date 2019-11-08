import { Request, Response } from "express";
import * as mongoose from "mongoose";


const mongooseConnectionStates = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting"
}

export class HealthCheckController {

    public check = (req: Request, res: Response) => {

        let isServerHealthy = true

        let mongooseState = mongoose.connection.readyState;
        if (mongooseState != 1)
            isServerHealthy = false

        // Add additional checks here

        let healthStatus = {
          'status': isServerHealthy ? 'healthy' : 'unhealthy',
          'services': {
            'db_connection': mongooseConnectionStates[mongooseState]
          }
        }

        if (isServerHealthy) {
            return res
                .status(200)
                .type('json')
                .send(healthStatus)
        } else {
            return res
                .status(500)
                .type('json')
                .send(healthStatus)
        }
    };

}

export const healthCheckController = new HealthCheckController();