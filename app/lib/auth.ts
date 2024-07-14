import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "johndoe@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                if(!credentials) {
                    return null;
                }

                const user = await client.student.findUnique({
                    where: {
                        email: credentials.email,
                        password: credentials.password
                    }
                })

                if(user) {
                    return {
                        id: user?.id?.toString(),
                        email: credentials.email
                    };
                } else {
                    return null;
                }
            },
        }),
    ],
    
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token, user }: any) => {
            if(session && session.user) {
                session.user.id = token.sub
            }
            return session
        }
    },
}
