# Node Server Manager

## Description
[Product Requirements](documentation/PRD.md)

## Setup
[Setup.md](documentation/Setup.md)

## Deployment
[Deployment.md](documentation/Deployment.md)

## Project
The project is divided into 3 main parts:
[Frontend](nsm-frontend/package.json)
The frontend is the React UI that is served to the user.

[API](nsm-api/package.json)
The API is the backend that does the management of the server configurations and communicates with the containers.

[Platform](nsm-platform/package.json)
The platform is a collection of common code such as data validation and type definitions.