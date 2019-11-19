# Transit

> Real-time GrapQL micro service framework written in Node with support for C++ and Rust

## About

Transit is a framework that is intended to be used to create Node.js micro services powered by GraphQL, PostgreSQL, MongoDB, kdb+, NGINX and Docker. It provides fallback for C++ and Rust addons for situations when speed is critical. Applications are containerized in Docker containers so it plays nicely with orchestration tools like Kubernetes out-of-the-box.

Transit was created with developer happiness in my from both a coding and "sleeping at night" standpoint.

## The Stack

- Node.js
- TypeScript
- Rust
- C++
- GraphQL
- kdb+
- Kafka

## Directory Structure

- addons - C++ and Rust addons
  - cpp - C++ addons
  - rust - Rust addons
- bin - scripts for managing Docker, Kafka, migrations, etc.
- config - application configurations
- db - database related files
- docs - code documentation
- logs - application logs
- mailers - mailers
- protobufs - Protobuf schemas
- src - application code
  - server.ts - main server instance
  - datasources - GraphQL datasources
  - subscriptions - GraphQL subscriptions
  - messages - Kafka producers and consumers
  - notifications - notification modules
    - mailers - email notifications
    - paperduty - PagerDuty notifications
    - slack - Slack notifications
  - utils - utility methods
- tmp - temporary location for processing and storing temp data
- types - TypeScript type definitions

## Scripts

- start
- start:prod

## TODO

- Add Kafka support
- Add NGINX support
- Add Docker support
- Add k8s support
- Add continuous integration
