import './about.css';
const Statistics = () => {
    return (
        <>
        <section class="stats-section relative w-full min-h-screen flex items-center justify-center px-8 py-16">
            <div class="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-10">
                    <h1 class="text-4xl md:text-5xl font-normal leading-tight text-white text-left">
                        Your Business Pays Are Now <br />
                        Faster and Secure
                    </h1>
                    <img
                        src="/stats-image.png"
                        alt="3D abstract object"
                        class="w-96 h-auto mx-auto drop-shadow-[0_0_25px_rgba(255,0,200,0.4)]"
                    />
                </div>
                <div class="space-y-16 text-left">
                    <div>
                        <h2 class="text-6xl font-normal bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent glow-text">
                            11.5M+
                        </h2>
                        <p class="text-sm uppercase tracking-widest text-gray-300 mt-2">
                            Transactions Processed Monthly</p>
                    </div>
                    <div>
                        <h2 class="text-6xl font-normal text-blue-400 glow-text">
                            99.9%
                        </h2>
                        <p class="text-sm uppercase tracking-widest text-gray-300 mt-2">
                            Platform Uptime and Reliability</p>
                    </div>
                    <div>
                        <h2 class="text-6xl font-normal text-teal-300 glow-text">
                            70% Faster</h2>
                        <p class="text-sm uppercase tracking-widest text-gray-300 mt-2">
                            Merchant Onboarding with AI Automation</p>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 w-80 h-80 blur-3xl bg-green-500 opacity-20 rounded-full pointer-events-none"></div>
        </section>
        </>
    )
}
export default Statistics;