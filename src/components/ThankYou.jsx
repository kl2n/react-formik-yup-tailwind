import Link from "next/link";

export default function ThankYou() {
    return (
        <section className="max-w-screen-lg w-screen min-h-3/4
                        grid grid-cols-1 justify-items-center content-center
                        bg-white rounded-2xl border border-gray-300">
            <h1 className="block text-3xl mt-4 mb-6 font-semibold">Thank you for signing up!</h1>
            <h3 className="block text-xl mt-4 mb-6">You can access your account by logging in
                <Link href="/login"
                      className="font-medium text-[var(--theme-color)] hover:text-[var(--theme-hover)]
                                focus-visible:outline focus-visible:outline-gray-500
                                focus-visible:-outline-offset-2">
                    &nbsp;here
                </Link>.
            </h3>

        </section>
    )
}