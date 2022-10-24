'use strict';

/**
 * shortcut router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shortcut.shortcut');
