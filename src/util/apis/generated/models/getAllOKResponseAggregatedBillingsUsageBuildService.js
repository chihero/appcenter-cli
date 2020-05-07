/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Resource usage for a single Mobile Center service
 *
 */
class GetAllOKResponseAggregatedBillingsUsageBuildService {
  /**
   * Create a GetAllOKResponseAggregatedBillingsUsageBuildService.
   * @property {object} [currentUsagePeriod] Usage for a single period
   * @property {string} [currentUsagePeriod.startTime] Inclusive start time of
   * the usage period
   * @property {string} [currentUsagePeriod.endTime] Exclusive end time of the
   * usage period.
   * @property {object} [currentUsagePeriod.byAccount] A collection of named
   * numeric values
   * @property {object} [currentUsagePeriod.byApp] A collection of  named
   * numeric values grouped by app
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetAllOKResponseAggregatedBillingsUsageBuildService
   *
   * @returns {object} metadata of GetAllOKResponseAggregatedBillingsUsageBuildService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetAllOKResponse_aggregatedBillings_usage_buildService',
      type: {
        name: 'Composite',
        className: 'GetAllOKResponseAggregatedBillingsUsageBuildService',
        modelProperties: {
          currentUsagePeriod: {
            required: false,
            serializedName: 'currentUsagePeriod',
            type: {
              name: 'Composite',
              className: 'GetAllOKResponseAggregatedBillingsUsageBuildServiceCurrentUsagePeriod'
            }
          }
        }
      }
    };
  }
}

module.exports = GetAllOKResponseAggregatedBillingsUsageBuildService;