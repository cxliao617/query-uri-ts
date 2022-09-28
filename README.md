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
QueryUriEncoder<T>(path: string, queryParams: T): string
```
### Example
```typescript
import { QueryUriEncoder } from 'query-uri-ts'

type UserFilterType = {
    gender: string,
    friends: Array<string>
}
const queryParams = { gender: 'female', friends: ['Jeff', 'Jack', 'Mary']} as UserFilterType

const encodeQueryUri = QueryUriEncoder('https://www.npmjs.com/package/query-uri-ts',queryParams)
```
## Decoder
```typescript
QueryUriDecoder<T>(path: string): T
```
### Example
```typescript
import { QueryUriDecoder } from 'query-uri-ts'

type UserFilterType = {
    gender: string,
    friends: Array<string>
}

const queryParams = QueryUriDecoder<UserFilterType>('https://www.npmjs.com/package/query-uri-ts?gender=female&friends=Jeff,Jack,Mary')
```

### Note: 
Query Params can includes none nested field and array.
