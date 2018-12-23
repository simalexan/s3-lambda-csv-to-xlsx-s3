
# S3 Bucket -> Lambda (Convert CSV to Excel XLSX) -> S3 Bucket

## Description

This is a serverless component that takes uploaded CSV files from one S3 Bucket, converts them to Microsoft Excel XLSX and uploads to another S3 Bucket. It contains:

- an Input S3 Bucket that accepts files.

- a Lambda that takes the CSV file from the Input S3 bucket, converts it to a Microsoft Excel XLSX and uploads it to the Output one

- an Output S3 Bucket that receives files.

## Deployment Parameters

This component has one CloudFormation deployment parameter:

- `ConversionTimeout`, an optional parameter, represents the timeout of the Conversion Lambda function. By default its 60 seconds.

## Latest Release - 1.0.0

Initial Release.

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests