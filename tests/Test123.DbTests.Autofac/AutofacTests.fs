namespace Test123.DbTests.Autofac

open NUnit.Framework
open Serilog
open System

module Setup=
    let runningOnAppveyor =
      not <| String.IsNullOrEmpty(Environment.GetEnvironmentVariable("CI"))

[<SetUpFixture>]
type SetupTest() =
    [<SetUp>]
    let ``start logging`` =
        Log.Logger <- LoggerConfiguration()
            .Destructure.FSharpTypes()
            .MinimumLevel.Debug() //uncomment to see the full debug in the console
            .WriteTo.ColoredConsole()
            .CreateLogger()
        Log.Information( "Tests started" )

module Tests =

    open Test123
    open Test123.Domain
    open System
    open Support

    [<Test>]
    let ``is th database accessible at all`` () =
        let a = Test123.NMemory.Impl.Database()
        Assert.IsNotNull(a)

    [<Test>]
    let ``simple database crud is working`` () =
        Log.Information( "Test entered" )
        let db = DI.Load<IHelloPersistency> ()
        //let db = DI.Register<Test123.NMemory.Impl.Database, IHelloPersistency> ()
        let p = {FirstName="John";LastName="Rambo"}
        db.Save( p )
        let lastSeen = db.Load( p )
        Assert.AreEqual( true, lastSeen.IsSome )
        Assert.LessOrEqual( DateTime.Now - lastSeen.Value, TimeSpan.FromSeconds(float 1) )
