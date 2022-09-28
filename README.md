# QueryUri(Typescript)
Query Uri Encoder & Decoder with provide query parameters

A library that builds a URL, including its path, query parameters. And support with decode with specific type

# Installation
```typescript
npm i query-uri-ts
```

# Usage
## Encoder
```typescript
QueryUri.encoder<T>(path: string, queryParams: T): string
```
### Example
```typescript
import { QueryUri } from 'query-uri-ts'

type UserFilterType = {
    gender: string,
    friends: Array<string>
}
const queryParams = { gender: 'female', friends: ['Jeff', 'Jack', 'Mary']} as UserFilterType

const encodeQueryUri = QueryUri.encoder('https://www.npmjs.com/package/query-uri-ts',queryParams)
```
## Decoder
```typescript
QueryUri.decoder<T>(path: string): T
```
### Example
```typescript
import { QueryUri } from 'query-uri-ts'

type UserFilterType = {
    gender: string,
    friends: Array<string>
}

const queryParams = QueryUri.decoder<UserFilterType>('https://www.npmjs.com/package/query-uri-ts?gender=female&friends=Jeff,Jack,Mary')
```

### Note: 
Query Params can includes none nested field and array.
