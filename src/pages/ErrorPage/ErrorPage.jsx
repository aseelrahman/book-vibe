const ErrorPage = () => {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0b0b0f] px-6 font-sans text-[#f5f5f7]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');

                @keyframes ep-float {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(1.08); }
                }
                .ep-glow {
                    animation: ep-float 6s ease-in-out infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .ep-glow { animation: none; }
                }
            `}</style>

            {/* soft gradient glow behind the number */}
            <div
                className="ep-glow pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] rounded-full opacity-40 blur-[110px]"
                style={{
                    background: 'radial-gradient(circle, #7c6fff 0%, #5b8def 45%, transparent 70%)',
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-[#a5a8b0]">
                    ERROR 404
                </span>

                <h1 className="bg-gradient-to-b from-white to-[#8a8f98] bg-clip-text text-[112px] font-extrabold leading-none tracking-tight text-transparent sm:text-[140px]">
                    404
                </h1>

                <h2 className="mt-2 text-2xl font-semibold text-[#f5f5f7] sm:text-3xl">
                    Page not found
                </h2>

                <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-[#8a8f98]">
                    The page you're looking for doesn't exist or has been moved somewhere else.
                </p>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="/"
                        className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#0b0b0f] transition-transform duration-150 hover:bg-[#e5e5e5] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Back to home
                    </a>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center rounded-lg border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-[#f5f5f7] transition-colors duration-150 hover:border-white/25 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;