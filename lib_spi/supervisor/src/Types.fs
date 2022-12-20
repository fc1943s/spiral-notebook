namespace Types


// #if FABLE_COMPILER_RUST

open Fable.Core
open Fable.Core.Rust

[<Erase; Emit("$0")>]
type EmitType<'T> = class end
[<Erase; Emit("dyn $0")>]
type Dyn<'T> = class end
[<Erase; Emit("mut $0")>]
type Mut<'T> = class end
[<Erase; Emit("&$0")>]
type Ref<'T> = class end
[<Erase; Emit("&'static $0")>]
type StaticRef<'T> = class end
[<Erase; Emit("str")>]
type Str = class end

module std =
    module io =
        [<Erase; Emit("std::io::Error")>]
        type Error = class end

    module iter =
        [<Erase; Emit("_")>]
        type Iterator<'T> = class end

    module path =
        [<Erase; Emit("std::path::Ancestors")>]
        type Ancestors = class end
        [<Erase; Emit("std::path::Path")>]
        type Path = class end
        [<Erase; Emit("std::path::PathBuf")>]
        type PathBuf = class end
        [<Erase; Emit("std::path::StripPrefixError")>]
        type StripPrefixError = class end

    module string =
        [<Erase; Emit("std::string::String")>]
        type String = class end

    module time =
        [<Erase; Emit("std::time::SystemTime")>]
        type SystemTime = class end


module chrono =
    [<Erase; Emit("chrono::Utc")>]
    type Utc = class end
    [<Erase; Emit("chrono::Local")>]
    type Local = class end
    [<Erase; Emit("chrono::DateTime<$0>")>]
    type DateTime<'T> = class end

module fable_library_rust =
    module Native_ =
        [<Erase; Emit("fable_library_rust::Native_::Box_<$0>")>]
        type Box<'T> = class end

// // #else
// //     ()
// // #endif //FABLE_COMPILER_RUST
