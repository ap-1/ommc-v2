import { BackgroundSyncPlugin } from 'workbox-background-sync'
import { registerRoute } from 'workbox-routing'
import { NetworkOnly } from 'workbox-strategies'

// https://developers.google.com/web/tools/workbox/modules/workbox-background-sync
const bgSyncPlugin = new BackgroundSyncPlugin('myQueueName', {
  maxRetentionTime: 0.5 * 60, // Retry for 0.5 hours
})

registerRoute(
  /\*/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  'POST'
)
