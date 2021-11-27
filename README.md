# Prusa Client

The client has been developed as part of a research programme investigating agent-based manufacturing systems. It is isomorphic and able to both server (Node.js) and client-side (Browser).

Please note. The Prusa Mini+ API is still under development and we will try and keep in line with their main branch.

## Using prusa-client

To install the package, use the following code. I am aiming to put it onto npm soon.

```
yarn add https://github.com/JamesGopsill/prusa-client
```

You can then use in your code via by importing

```typescript
import { PrusaClient } from "prusa-client"

// Create a new client.
const client = new PrusaClient("PRUSA_IP_ADDRESS")

// Retrieve the name of your printer.
try {
	const versionInfo = await client.getVersion()
	console.log(versionInfo)
} catch (res) { 
	// Promise reject will most likely return the response that resulted in the error.
	console.log(res)
}
```

## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/prusa-client/).

## Testing

Testing uses jest. We are using Prusa Mini+ in the lab and are currently testing with printers using version X.XX firmware.

To test the functionality, make sure you have an Prusa Mini+ on the network and create a `test.config.ts` file in the test directory (This is ignore by git via .gitignore). Then add the following export to make sure the tests know the ip address of the printer.

```
export const printerIPAddress = "123.456.789.101"
```

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

To donate and provide continued support, please go to **[TODO]**.

## References

- [Prusa Firmware Buddy](https://github.com/prusa3d/Prusa-Firmware-Buddy)