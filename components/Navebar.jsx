import Link from "next/link";

 export default function Navebar(){
    return(
    <nav className="flex justify-between items-center
    bg-slate-800 px-8 py-3 ">
        <Link className="text-white font-bold" href={"/"}>Todo List</Link>
        <Link className="bg-white p-2 text-black" href={"/AddTopic"}>Add Topic</Link>

    </nav>
);
}