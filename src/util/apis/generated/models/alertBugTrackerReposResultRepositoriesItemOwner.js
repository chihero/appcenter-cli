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
 * Repository owner object
 *
 */
class AlertBugTrackerReposResultRepositoriesItemOwner {
  /**
   * Create a AlertBugTrackerReposResultRepositoriesItemOwner.
   * @property {string} [name]
   * @property {string} [id]
   * @property {string} [login]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AlertBugTrackerReposResultRepositoriesItemOwner
   *
   * @returns {object} metadata of AlertBugTrackerReposResultRepositoriesItemOwner
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertBugTrackerReposResult_repositoriesItem_owner',
      type: {
        name: 'Composite',
        className: 'AlertBugTrackerReposResultRepositoriesItemOwner',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          login: {
            required: false,
            serializedName: 'login',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AlertBugTrackerReposResultRepositoriesItemOwner;
