import {rest} from  'msw';

export const handlers = [

    rest.get("./sampleData.json", (req:any, res:any, ctx:any) => {
        console.log(req)
        return res(ctx.status(200)), 
        ctx.json([
            {
                "ticker": "ALPHA",
                "price": 3150.67,
                "assetClass": "Credit"
              },
              {
                "ticker": "BETA",
                "price": 3791.37,
                "assetClass": "Equities"
              },
              {
                "ticker": "GAMMA",
                "price": 2299.1,
                "assetClass": "Equities"
              },
        ])
    })
]