import Removebtn from "./Removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList () {
    return(
        <>
        <div className="border border-slate-200 my-3 p-4 flex justify-between gap-5 items-start">
        <div >
            <h2 className="font-bold text-2xl">topic name</h2>
            <div>topic description</div>
        </div>
            <div className="flex gap-2">
                <Removebtn />
                <Link href={"/EditTopic/123"}> 
                <HiPencilAlt  size ={24} />
                </Link>
            </div>
        </div>
        </>

    );
}