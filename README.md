# QueryUri(Typescript)
Query Uri Encoder & Decoder with provide query parameters

A library that builds a URL, including its path, query parameters. And support with decode with specific type

# Installation

### UUIDv4 manager
```typescript
new IdManager().uuidManager()
```
### ObjectId Manager
```typescript
new IdManager().objectIdManager()
```
## Usage
```typescript
import {createServer,Factory,Model,Serializer} from 'miragejs'

import IdManager from 'miragejs-idmanager'

export function MockServer({environment = 'development'}){
    return createServer({
        environment,
        identityManagers: {
            todo: new IdManager().uuidManager(),
            user: new IdManager().objectIdManager(),
        } as any,
        ...
    })
}
```