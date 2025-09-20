
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import bcyrpt from 'bcrypt'
import { prisma } from '@/lib/prisma';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:'Credentials',
            credentials: {
                email: {label:'Email', type: 'email'},
                password: {label: 'Password', type:'password'},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: {email: credentials.email},
                });

                if (!user) return null;

                const isValid = await bcyrpt.compare(credentials.password, user.password);
                return isValid ? user : null;


            
            },
        }),

        
    ],
    session : {strategy:'jwt'},
    pages: {
        signIn:'/auth/signin'
    },
});
export {handler as GET, handler as POST};