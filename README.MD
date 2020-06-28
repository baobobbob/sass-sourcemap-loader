# Add `file:///` to sass sourcemap

## How to use ?

Add `sass-sourcemap-loader` in `webpack.config.js`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-sourcemap-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
}
```

## Before use sass-sourcemap-loader

![before](asset/before.jpg)

Online editing failed.

![online-edit-fail](asset/online-edit-fail.gif)

## After use sass-sourcemap-loader

![before](asset/after.jpg)

Online editing success.

![online-edit](asset/online-edit.gif)
