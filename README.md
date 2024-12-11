# Silent Failure on Unexpected Content Type in Next.js 15 app/fetch

This repository demonstrates a subtle bug in Next.js 15's `app` directory where fetching an API route that returns an unexpected content type can lead to silent failures.  The issue is particularly challenging to debug because it doesn't produce clear error messages.

## Problem

When using the `fetch` API within a component in the `app` directory, if the API route returns a response with a content type that the component isn't prepared to handle (e.g., expecting JSON but receiving plain text), Next.js might not throw an error.  This results in the component rendering without the expected data, potentially causing application instability or unexpected behavior.

## Solution

The solution involves robust error handling in both the API route and the component. The API route should consistently return appropriate responses with clear error indicators, and the component should handle various response statuses and content types appropriately.