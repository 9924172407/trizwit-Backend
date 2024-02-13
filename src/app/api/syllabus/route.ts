import { getSyllabus } from "@/app/lib/data"
import { NextResponse } from "next/server"


export const GET = async (req: Request, res: Response) => {
    try {
        const syllabus = getSyllabus();
        return NextResponse.json({ message: "Ok", syllabus }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong", error }, {
            status: 500
        })
    }
}
