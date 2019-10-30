/* eslint-disable global-require */
/* eslint-disable no-undef */

export const Link = CLIENT_SIDE_RENDERING
    ? require('./csr-link').CSRLink
    : require('./ssr-link').SSRLink;
