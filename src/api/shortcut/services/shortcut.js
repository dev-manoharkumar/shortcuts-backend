'use strict';

/**
 * shortcut service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shortcut.shortcut');
