import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function Welcome({formMode}) {
    const pathname = usePathname();
    const isLogin = pathname === "/login";
    const targetRoute = isLogin ? "/signup" : "/login";
    const routeText = isLogin ? "Sign Up" : "Log In";
    const message = isLogin ? "Don't have an account?" : "Already have an account?";
    return (
        <div className="sm:border-l sm:border-gray-300 sm:pl-6 order-first sm:order-none">
            <Image src="/images/registerpage.jpg"
                   alt="registerpage"
                   width={600}
                   height={403}
            />
            <div className="p-4 sm:p-6 text-center space-y-6">
                <h2 className="text-2xl font-semibold">Welcome</h2>
                <p className="text-xl">A simple signup form built with React.js, using Formik library and styled with Tailwind CSS.</p>
                <div className="text-lg">
                    {message}
                    &nbsp;
                    <Link href={targetRoute}
                          className="font-medium text-[var(--theme-hover)]
                                     focus-visible:outline focus-visible:outline-gray-500
                                     focus-visible:-outline-offset-2">
                        {routeText}
                    </Link>
                </div>
            </div>
        </div>
    )
}