# Face Detect UI

Face Detect UI is a React application that uses SKYBIOMETRY's API to detect faces in photos.

## Installation & usage

Before you can run the app, you need to install its dependencies:

```bash
npm install
```

Then you will need to set API_KEY and API_SECRET for SKYBIOMETRY's API in `.env` file.

And now you can start the application:

```bash
npm start
```

The application will start on `http://localhost:3000`.

## How it works?

- Upload an image and the application will detect faces in the image.
- Select a face to see its attributes.

## Project Structure

The main parts of the project are:

- `src/`: This directory contains all the TypeScript and React code.
  - `components/`: This directory contains all the components used in the app.
    - `App.tsx`: This is the main component of the application.
  - `contexts/`: This directory contains React Contexts used for managing and sharing global state across the app.
  - `types/`: This directory contains all the TypeScript type definitions.
  - `utils/`: This directory contains helper functions used in the app's code.

## License

This project is licensed under the terms of the MIT license.