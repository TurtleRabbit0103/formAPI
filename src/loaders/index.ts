import expressLoader from '@bonk-loaders/express'

import viewLoader from '@bonk-views/index'

import logger from '@bonk-core/logger'

export default async ({ expressApp }: any) => {
    await expressLoader({ app: expressApp })
    logger.info('Express Initialized')

    await viewLoader({ app: expressApp })
    logger.info('Views Initialized')
    // ... more loaders can be here

    // ... Initialize agenda
    // ... or Redis, or whatever you want
}