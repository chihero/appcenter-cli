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
 * Class representing a ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItem.
 */
class ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItem {
  /**
   * Create a ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItem.
   * @property {string} name Name of build configuration (the same as a build
   * type name)
   * @property {object} [signingConfig] Android signing config. Null if not
   * specified
   * @property {boolean} [signingConfig.hasStoreFile] Indicates if storeFile is
   * specified in the signing configuration
   */
  constructor() {
  }

  /**
   * Defines the metadata of ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItem
   *
   * @returns {object} metadata of ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ToolsetProjects_android_androidModulesItem_buildConfigurationsItem',
      type: {
        name: 'Composite',
        className: 'ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItem',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          signingConfig: {
            required: false,
            serializedName: 'signingConfig',
            type: {
              name: 'Composite',
              className: 'ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItemSigningConfig'
            }
          }
        }
      }
    };
  }
}

module.exports = ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItem;
