let rec closure0 () () : int32 =
    let v0 : string = "app ()"
    System.Console.WriteLine v0
    0
let v0 : (unit -> int32) = closure0()
()
