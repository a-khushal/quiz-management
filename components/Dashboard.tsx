import { authOptions } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getCourseDetails() {
    try {
        const session = await getServerSession(authOptions);

        const student = await client.student.findFirst({
            where: {
                email: session.user.email,
            }
        })

        const course = await client.courseOfStudent.findMany({
            where: {
                usn: student?.usn,
            }
        })

        return course;
    } catch(e) {
        console.log(e);
    }
}

export default async function Dashboard() {
    const course = await getCourseDetails();

    return <div>
        { JSON.stringify(course) }
    </div>
}