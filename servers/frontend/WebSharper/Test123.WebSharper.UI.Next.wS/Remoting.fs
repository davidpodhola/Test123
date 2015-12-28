namespace Test123.WebSharper.UI.Next.wS

open WebSharper
open Test123.Backend

module Server =

    [<Rpc>]
    let DoSomething firstName lastName =        
        async {
            return Client.hello firstName lastName
        }
