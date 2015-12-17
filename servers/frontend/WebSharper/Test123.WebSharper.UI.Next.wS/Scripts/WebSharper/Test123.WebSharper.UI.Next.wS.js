(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,UI,Next,Var,Test123,WebSharper1,UI1,Next1,wS,Client,View,Submitter,Remoting,AjaxRemotingProvider,Var1,Concurrency,List,Doc,T,AttrProxy;
 Runtime.Define(Global,{
  Test123:{
   WebSharper:{
    UI:{
     Next:{
      wS:{
       Client:{
        Main:function()
        {
         var rvFirstName,rvLastName,arg00,arg10,arg20,viewFullName,submit,arg001,arg101,vReversed,arg201,arg202,arg203,arg204;
         rvFirstName=Var.Create("First name");
         rvLastName=Var.Create("Last name");
         arg00=function(f)
         {
          return function(l)
          {
           return Client.createPerson(f,l);
          };
         };
         arg10=rvFirstName.get_View();
         arg20=rvLastName.get_View();
         viewFullName=View.Map2(arg00,arg10,arg20);
         submit=Submitter.CreateOption(viewFullName);
         arg001=function(_arg1)
         {
          var input;
          if(_arg1.$==1)
           {
            input=_arg1.$0;
            return AjaxRemotingProvider.Async("Test123.WebSharper.UI.Next.wS:0",[Var1.Get(input.FirstName),Var1.Get(input.LastName)]);
           }
          else
           {
            return Concurrency.Delay(function()
            {
             return Concurrency.Return("");
            });
           }
         };
         arg101=submit.get_View();
         vReversed=View.MapAsync(arg001,arg101);
         arg202=function()
         {
          return submit.Trigger();
         };
         arg203=Runtime.New(T,{
          $:0
         });
         arg204=List.ofArray([Doc.TextView(vReversed)]);
         arg201=List.ofArray([Doc.Input(Runtime.New(T,{
          $:0
         }),rvFirstName),Doc.Input(Runtime.New(T,{
          $:0
         }),rvLastName),Doc.Button("Send",Runtime.New(T,{
          $:0
         }),arg202),Doc.Element("hr",[],arg203),Doc.Element("h4",List.ofArray([AttrProxy.Create("class","text-muted")]),List.ofArray([Doc.TextNode("The server responded:")])),Doc.Element("div",List.ofArray([AttrProxy.Create("class","jumbotron")]),List.ofArray([Doc.Element("h1",[],arg204)]))]);
         return Doc.Element("div",[],arg201);
        },
        createPerson:function(first,last)
        {
         return{
          FirstName:Var.Create(first),
          LastName:Var.Create(last)
         };
        }
       }
      }
     }
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  UI=Runtime.Safe(Global.WebSharper.UI);
  Next=Runtime.Safe(UI.Next);
  Var=Runtime.Safe(Next.Var);
  Test123=Runtime.Safe(Global.Test123);
  WebSharper1=Runtime.Safe(Test123.WebSharper);
  UI1=Runtime.Safe(WebSharper1.UI);
  Next1=Runtime.Safe(UI1.Next);
  wS=Runtime.Safe(Next1.wS);
  Client=Runtime.Safe(wS.Client);
  View=Runtime.Safe(Next.View);
  Submitter=Runtime.Safe(Next.Submitter);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  Var1=Runtime.Safe(Next.Var1);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  List=Runtime.Safe(Global.WebSharper.List);
  Doc=Runtime.Safe(Next.Doc);
  T=Runtime.Safe(List.T);
  return AttrProxy=Runtime.Safe(Next.AttrProxy);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
