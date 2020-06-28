import { JSONSchema4 } from 'json-schema'
import { getOptions } from 'loader-utils'
import _ from 'lodash'
import path from 'path'
import validateOptions from 'schema-utils'

const schema: JSONSchema4 = {
  type: 'object',
  properties: {},
}

export default function(source: any, sourceMap: any) {
  // @ts-ignore
  const _this = this
  const options = getOptions(_this)
  const cb = _this.async()

  validateOptions(schema, options || {}, {
    name: 'css-map Loader',
  })

  if (sourceMap) {
    if (sourceMap.file) {
      _.remove(sourceMap.sources, (src: string) => {
        return src === sourceMap.file
      })
      sourceMap.sources = sourceMap.sources.map((src: string) => {
        return src.replace(path.join(sourceMap.file, '../'), '').replace(/\\/g, '/')
      })
      delete sourceMap.file
    } else {
      sourceMap.sources = sourceMap.sources.map((src: string) => {
        return path.join(sourceMap.sourceRoot, src).replace(/\\/g, '/')
      })
    }
    sourceMap.sourceRoot = 'file:///'
  }

  cb(null, `${source}`, sourceMap)

  return null
}
