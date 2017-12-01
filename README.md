# Scrixel Map

A simple program that converts an image to pixel array. Useful for converting an
level image map to an array.

## Example

```
scrixelMap("./level.png").then(imageObj => {
    console.log(JSON.stringify(imageObj));
    // [[65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,65535,16711935,...]]
}).catch(err => console.log(err));
```

## Author

Jordan Lord

## License

MIT
