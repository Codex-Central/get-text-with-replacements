# get-text-with-replacements
This library aims to retrieve a specific text message from a data object and replace placeholders within the text with provided values. 

It allows for dynamic text generation by substituting placeholders in the original text with corresponding replacement values, providing flexibility in generating customized messages or content.


## Installation

> `npm install @codexcentral/get-text-with-replacements`

## Usage
### 1. Import the function

```javascript
import { getText } from '@codexcentral/get-text-with-replacements';
```


### 2. Create the data object
Define between `{ }` the keywords that will be replaced

```javascript
const data = {
  "hello_world": "Hello World {name}!"
};
```


### 3. Call the function

```javascript
const text = getText({
  data,
  key: "hello_world",
  replacements: { name: "Roberto" },
  notFoundText: "not_found"
});
```

#### Result

```javascript
console.log(text); 
// Hello World Roberto!
```


### Attributes

| Attribute | Type | Mandatory |
| ------ | ------ | ------ |
|  data | `object` | true |
|  key | `string` | true |
|  replacements | `object` | false |
|  notFoundText | `string` | false (default: `<key__not_found>`) |

#### Example of attributes
```json
{
  "data": {
    "hello_world": "Hello World {name}!"
  },
  "key": "hello_world",
  "replacements": { "name": "Roberto" },
  "notFoundText": "not_found"
}
```

# Credits
These code was written by [Roberto Silva Z.](https://www.linkedin.com/in/robertosilvazuniga/)